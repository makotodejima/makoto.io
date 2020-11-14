import HomeLink from "../components/HomeLink";
import { NotionRenderer } from "../react-notion";

const Satte = ({ blockMap }) => {
  return (
    <main style={{ padding: "8px 16px" }}>
      <HomeLink />
      <NotionRenderer blockMap={blockMap} />
    </main>
  );
};

export default Satte;

export async function getStaticProps() {
  const data = await fetch(
    process.env.NOTION_API_URL + process.env.NOTION_SATTE_CITY
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}
