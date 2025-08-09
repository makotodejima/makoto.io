import Footer from "../../components/Footer";
import HomeLink from "../../components/HomeLink";
import { getEntries } from "../../lib/utils";
import { getMarkdownHtml } from "../../lib/markdown";

export async function generateStaticParams() {
  const entries = getEntries();
  return entries
    .filter((e) => e.href === null)
    .map((e) => ({
      id: e.id,
    }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entries = getEntries();
  const entry = entries.find((e) => e.id === id);

  if (!entry || entry.href !== null) {
    throw new Error("Entry not found or remote content");
  }

  const markdownData = await getMarkdownHtml(id);
  if (!markdownData) {
    throw new Error("Markdown content not found");
  }

  const title = markdownData.frontmatter.title || entry.title;
  const subtitle = markdownData.frontmatter.subtitle || entry.subtitle;

  return (
    <div className="container py-2">
      <HomeLink />
      <h1 className="text-lg">{title}</h1>
      <h2 className="text-md font-extralight">{subtitle}</h2>
      <div className="markdown-content max-w-[520px]">
        <div dangerouslySetInnerHTML={{ __html: markdownData.contentHtml }} />
      </div>
      <Footer />
    </div>
  );
}
