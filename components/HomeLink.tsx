import Link from "next/link";
import { useScrollPosition } from "../utils/scroll_position";

const HomeLink = () => {
  const { y } = useScrollPosition();
  if (y < 280) return null;
  return (
    <Link href="/" passHref>
      <a className="home-button">Home</a>
    </Link>
  );
};

export default HomeLink;
