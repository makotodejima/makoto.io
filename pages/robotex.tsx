import Footer from "../components/Footer";
import HomeLink from "../components/HomeLink";
import { NotionRenderer } from "../react-notion";

const Robotex = ({ blockMap }) => {
  return (
    <main style={{ padding: "8px 16px" }}>
      <HomeLink />
      <NotionRenderer blockMap={blockMap} />
      <Footer />
    </main>
  );
};

export default Robotex;

export async function getStaticProps() {
  const data = await fetch(
    process.env.NOTION_API_URL + process.env.NOTION_ROBOTEX
  ).then((res) => res.json());

  return {
    props: {
      blockMap: data,
    },
  };
}
