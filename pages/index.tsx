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
        <Link href="https://github.com/makotodejima/fi" passHref>
          <a className="home-a">
            fi | <i>Command line tool for personal finance</i>
          </a>
        </Link>
        <Link href="https://soba.madmak.me" passHref>
          <a className="home-a">
            Sobasquare | <i>Never stop exploring Soba restaurants</i>
          </a>
        </Link>
        <Link href="/robotex" passHref>
          <a className="home-a">
            Robotex Japan | <i>Corporate website design and development</i>
          </a>
        </Link>
        <Link href="https://naotatsukaku.com/" passHref>
          <a className="home-a">
            Naotatsu Kaku | <i>Visual artist's portfolio website</i>
          </a>
        </Link>
        <Link href="/the_light_of_tokyo" passHref>
          <a className="home-a">
            The Light of Tokyo | <i>Tokyo Postcard Award 2019</i>
          </a>
        </Link>
        <Link href="/manhattan_portage" passHref>
          <a className="home-a">
            Manhattan Portage | <i>Manhattan Portage Art Award 2019</i>
          </a>
        </Link>
        <Link href="/satte_city" passHref>
          <a className="home-a">
            Satte City | <i>Municipal government logo design</i>
          </a>
        </Link>
        <Footer />
      </main>
    </div>
  );
}
