import type { GetStaticPaths, InferGetStaticPropsType } from "next";
import Footer from "../components/Footer";
import HomeLink from "../components/HomeLink";
import { getEntries } from "../lib/utils";
import { getMarkdownHtml } from "../lib/markdown";

export const getStaticPaths = (async () => {
  const entries = getEntries();
  return {
    paths: entries.flatMap((e) =>
      e.href === null
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
  const entry = entries.find((e) => e.id === params.id);
  if (!entry || entry.href !== null) {
    throw new Error("Entry not found or remote content");
  }

  const markdownData = await getMarkdownHtml(entry.id);
  if (!markdownData) {
    throw new Error("Markdown content not found");
  }

  return {
    props: {
      id: entry.id,
      title: markdownData.frontmatter.title || entry.title,
      subtitle: markdownData.frontmatter.subtitle || entry.subtitle,
      contentHtml: markdownData.contentHtml,
    },
  };
}

export default function Page({
  title,
  subtitle,
  contentHtml,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="container py-2">
      <HomeLink />
      <h1 className="text-lg">{title}</h1>
      <h2 className="text-md font-extralight">{subtitle}</h2>
      <div className="markdown-content max-w-[520px]">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
      <Footer />
    </div>
  );
}
