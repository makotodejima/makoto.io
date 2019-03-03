import React from "react";
import { Link } from "gatsby";

const BottomLink = props => {
  return (
    <div className="text-center my-20 mx-4">
      <Link
        to={props.path}
        className="border border-grey-darkest text-grey-darkest font-hairline hover:bg-grey-darkest hover:text-white py-2 px-4 rounded-full no-underline"
      >
        {props.linkText}
      </Link>
    </div>
  );
};

export default BottomLink;
