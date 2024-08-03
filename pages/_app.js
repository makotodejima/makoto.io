import "../styles/globals.css";
import { GeistSans } from "geist/font/sans";

function MyApp({ Component, pageProps }) {
  return (
    <main className={GeistSans.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
