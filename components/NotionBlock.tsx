import { isFullBlock } from "@notionhq/client";
import {
  type TextRichTextItemResponse,
  type BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";

export const Blocks = ({ blocks }) => {
  return (
    <>
      {blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </>
  );
};

const Block = ({ block }) => {
  if (!isFullBlock(block)) {
    throw new Error("Not a block");
  }
  const { type, id, has_children, object } = block;

  if (type === "heading_1") {
    return (
      <h1 key={id} className="notion-h1">
        {block.heading_1.rich_text.map(
          (t) => (t as TextRichTextItemResponse).text.content,
        )}
      </h1>
    );
  }

  if (type === "heading_3") {
    return (
      <h3 key={id} className="notion-h3">
        {block.heading_3.rich_text.map((t) => t.plain_text)}
      </h3>
    );
  }

  if (type === "image") {
    if (block.image.type === "external") {
      throw new Error("Not implemented: external image");
    }
    const width = 650;
    const height = 600;
    return (
      <div
        style={{
          minWidth: `350px`,
          maxWidth: `${width}px`,
        }}
      >
        <Image
          layout="responsive"
          width={width}
          height={height}
          src={block.image.file.url}
          alt={JSON.stringify(block.image.caption)}
        />
      </div>
    );
    return <p>Not implemented: image </p>;
  }

  if (type === "paragraph") {
    return (
      <p key={id} className="notion-paragraph">
        {block.paragraph.rich_text.map((t) => t.plain_text)}
      </p>
    );
  }

  if (type === "callout") {
    return (
      <div key={id} className="notion-callout-text">
        {block.callout.rich_text.map((t) => t.plain_text)}
      </div>
    );
  }
};
