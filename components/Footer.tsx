import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <Logo />
      <span className="copyright">&copy; {year} MKD Inc.</span>
      <Link href="https://github.com/makotodejima" passHref>
        <a className="footer-a">GitHub</a>
      </Link>
      <Link href="https://www.linkedin.com/in/makotodejima/" passHref>
        <a className="footer-a">LinkedIn</a>
      </Link>
      <div>email: yo[at]makoto.io</div>
    </footer>
  );
};

export default Footer;
