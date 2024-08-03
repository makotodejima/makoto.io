import type { GetStaticPaths, InferGetStaticPropsType } from "next";
import Footer from "../components/Footer";
import HomeLink from "../components/HomeLink";
import { Blocks } from "../components/NotionBlock";
import { getEntries, overrideImages } from "../lib/utils";

export const getStaticPaths = (async () => {
  const entries = getEntries();
  return {
    paths: entries.flatMap((e: any) =>
      e.notion_id
        ? [
            {
              params: { id: e.id },
            },
          ]
        : [],
    ),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export async function getStaticProps({ params }) {
  const entries = getEntries();
  const entry = entries.find((e: any) => e.id === params.id);
  if (!entry?.notion_id) {
    throw new Error("Entry not found or has no Notion ID");
  }

  const data = await fetch(
    `https://api.notion.com/v1/blocks/${entry.notion_id}/children`,
    {
      headers: {
        "Notion-Version": "2022-06-28",
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      },
    },
  ).then((res) => res.json());

  await overrideImages(data.results, entry.id);

  return {
    props: {
      id: entry.id,
      blocks: data.results,
    },
  };
}

export default function Page({
  blocks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="container py-2">
      <HomeLink />
      {blocks && <Blocks blocks={blocks} />}
      <Footer />
    </main>
  );
}
