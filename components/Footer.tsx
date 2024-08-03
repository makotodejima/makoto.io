import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-12 flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:gap-4">
      <Logo />
      <div>&copy; {year} MKD Inc.</div>
      <Link href="https://github.com/makotodejima" className="underline">
        GitHub
      </Link>
      <Link
        href="https://www.linkedin.com/in/makotodejima/"
        className="underline"
      >
        LinkedIn
      </Link>
      <div>email: yo[at]makoto.io</div>
    </footer>
  );
};

export default Footer;
