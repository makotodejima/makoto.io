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
  const { type, id, has_children, children, object } = block;
  if (object !== "block") {
    throw new Error("Not a block");
  }

  if (type === "heading_1") {
    return (
      <h1 key={id} className="notion-h1">
        {block.heading_1.rich_text.map((t) => t.text.content)}
      </h1>
    );
  }

  if (type === "heading_3") {
    return (
      <h3 key={id} className="notion-h3">
        {block.heading_3.rich_text.map((t) => t.text.content)}
      </h3>
    );
  }

  if (type === "image") {
    return <p>Not implemented: image </p>;
  }

  if (type === "paragraph") {
    return (
      <p key={id} className="notion-paragraph">
        {block.paragraph.rich_text.map((t) => t.text.content)}
      </p>
    );
  }

  if (type === "callout") {
    return (
      <div key={id} className="notion-callout">
        {block.callout.rich_text.map((t) => t.text.content)}
      </div>
    );
  }

  if (type === "callout") {
    return (
      <div key={id} className="notion-callout">
        {block.callout.rich_text.map((t) => t.text.content)}
      </div>
    );
  }
};
