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
      <main className="container py-2">
        <h1 className="text-lg">Makoto Dejima</h1>
        <h2 className="mb-2 font-extralight">Software Engineer</h2>
        <section className="my-8 space-y-2 sm:space-y-1">
          {entries.map((e) => (
            <div key={e.id} className="hover:underline">
              <Link
                href={e.href ?? `/${e.id}`}
                className="flex flex-col items-baseline sm:flex-row sm:gap-4"
              >
                <h3 className="">{e.title}</h3>
                <span className="text-sm font-light">{e.subtitle}</span>
              </Link>
            </div>
          ))}
        </section>
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
