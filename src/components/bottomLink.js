import React from "react";
import { Link } from "gatsby";

const BottomLink = props => {
  return (
    <div className="text-center mt-8 mb-32">
      <Link to={props.path} className="no-underline">
        {props.linkText}
      </Link>
    </div>
  );
};

export default BottomLink;
