import React from "react";
import { Link } from "gatsby";

const Card = props => {
  return (
    <div className="w-full md:w-9/20 my-8">
      <Link to={`/work/${props.path}/`}>{props.children}</Link>
    </div>
  );
};

export default Card;
