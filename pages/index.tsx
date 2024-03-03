import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import { getEntries } from "../lib/utils";
import { Entry } from "../lib/types";

export default function Home({ entries }: { entries: Entry[] }) {
  return (
    <div>
      <Head>
        <title>Makoto Dejima | Software engineer</title>
        <link rel="icon" href="/mdfavicon.svg" />
      </Head>
      <main style={{ padding: "8px 16px" }}>
        <h1 className="home-heading-1">Makoto Dejima{"\n"}Software Engineer</h1>
        {entries.map((e) => (
          <Link key={e.id} href={e.href ?? `/${e.id}`} className="home-a">
            {e.title} <i>{e.subtitle}</i>
          </Link>
        ))}
        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      entries: getEntries(),
    },
  };
}
