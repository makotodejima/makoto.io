import { NotionRenderer } from "../react-notion";
import HomeLink from "../components/HomeLink";

const LightOfTokyo = ({ blockMap }) => {
  return (
    <main style={{ padding: "8px 16px" }}>
      <HomeLink />
      <NotionRenderer blockMap={blockMap} />
    </main>
  );
};

export default LightOfTokyo;

export async function getStaticProps() {
  const data = await fetch(
    process.env.NOTION_API_URL + process.env.NOTION_THE_LIGHT_OF_TOKYO
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}
