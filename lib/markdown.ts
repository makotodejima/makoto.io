import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const entriesDirectory = path.join(process.cwd(), "data/entries");

export function getMarkdownContent(id: string) {
  const fullPath = path.join(entriesDirectory, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    id,
    frontmatter: data,
    content,
  };
}

export async function getMarkdownHtml(id: string) {
  const markdownData = getMarkdownContent(id);

  if (!markdownData) {
    return null;
  }

  const processedContent = await remark()
    .use(remarkHtml)
    .process(markdownData.content);

  return {
    id,
    frontmatter: markdownData.frontmatter,
    contentHtml: processedContent.toString(),
  };
}

export function getAllMarkdownIds() {
  if (!fs.existsSync(entriesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(entriesDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}
