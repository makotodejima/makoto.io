import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Makoto Dejima | Developer and designer</title>
        <link rel="icon" href="/mdfavicon.svg" />
      </Head>
      <main style={{ padding: "8px 16px" }}>
        <h1 className="home-heading-1">
          Makoto Dejima{"\n"}Developer / Designer
        </h1>
        <Link href="https://github.com/makotodejima/fi" className="home-a">
          fi <Pipe /> <i>Command line tool for personal finance</i>
        </Link>
        <Link href="/the_light_of_tokyo" className="home-a">
          The Light of Tokyo <Pipe /> <i>Tokyo Postcard Award 2019</i>
        </Link>
        <Link href="/robotex" className="home-a">
          Robotex Japan <Pipe /> <i>Corporate website design and development</i>
        </Link>
        <Link href="https://soba.makoto.io" className="home-a">
          Sobasquare <Pipe /> <i>Never stop exploring Soba restaurants</i>
        </Link>
        <Link href="/satte_city" className="home-a">
          Satte City <Pipe /> <i>Municipal government logo design</i>
        </Link>
        <Link href="/manhattan_portage" className="home-a">
          Manhattan Portage <Pipe /> <i>Manhattan Portage Art Award 2019</i>
        </Link>
        <Link href="https://naotatsukaku.com/" className="home-a">
          Naotatsu Kaku <Pipe /> <i>Visual artist's portfolio website</i>
        </Link>
        <Footer />
      </main>
    </div>
  );
}

const Pipe = () => <span className="home-pipe">|</span>;
