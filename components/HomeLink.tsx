import Link from "next/link";

const HomeLink = () => {
  return (
    <Link href="/" passHref>
      <a className="home-button">Home</a>
    </Link>
  );
};

export default HomeLink;
