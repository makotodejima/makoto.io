import { isFullBlock } from "@notionhq/client";
import { type TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";

export const Blocks = ({ blocks }) => {
  return (
    <div className="notion max-w-[520px]">
      {blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </div>
  );
};

const Block = ({ block }) => {
  if (!isFullBlock(block)) {
    throw new Error("Not a block");
  }
  const { type, id } = block;

  if (type === "heading_1") {
    return (
      <h1 key={id} className="text-lg">
        {block.heading_1.rich_text.map(
          (t) => (t as TextRichTextItemResponse).text.content,
        )}
      </h1>
    );
  }

  if (type === "heading_3") {
    return (
      <h3 key={id} className="font-extralight">
        {block.heading_3.rich_text.map((t) => t.plain_text)}
      </h3>
    );
  }

  if (type === "image") {
    if (block.image.type === "external") {
      throw new Error("Not implemented: external image");
    }
    const width = 620;
    const height = 600;

    return (
      <figure
        key={id}
        className="my-8"
        style={{
          minWidth: `350px`,
          maxWidth: `${width}px`,
        }}
      >
        <Image
          width={width}
          height={height}
          src={block.image.file.url}
          alt={block.image.caption.map((cap) => cap.plain_text).join(" ")}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        {block.image.caption.map((cap, idx) => (
          <figcaption key={idx} className="my-1 text-xs opacity-75">
            {cap.plain_text}
          </figcaption>
        ))}
      </figure>
    );
  }

  if (type === "paragraph") {
    if (!block.paragraph.rich_text.length)
      return <div key={id} className="min-h-4" />;
    return (
      <p key={id} className="notion-paragraph">
        {block.paragraph.rich_text.map((t) => t.plain_text)}
      </p>
    );
  }

  if (type === "callout") {
    return (
      <div key={id} className="text-sm">
        {block.callout.rich_text.map((t) => t.plain_text)}
      </div>
    );
  }
};
