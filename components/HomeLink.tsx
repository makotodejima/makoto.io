import Link from "next/link";

const HomeLink = () => {
  return (
    <Link
      href="/"
      className="fixed left-[600px] hidden text-xl tracking-widest hover:underline sm:block"
    >
      ../
    </Link>
  );
};

export default HomeLink;
