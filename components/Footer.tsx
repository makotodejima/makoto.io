import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <Logo />
      <span className="copyright">&copy; {year} MKD Inc.</span>
      <Link href="https://github.com/makotodejima" className="footer-a">
        GitHub
      </Link>
      <Link
        href="https://www.linkedin.com/in/makotodejima/"
        className="footer-a"
      >
        LinkedIn
      </Link>
      <div>email: yo[at]makoto.io</div>
    </footer>
  );
};

export default Footer;
