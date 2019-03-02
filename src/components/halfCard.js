import React from "react";
import { Link } from "gatsby";

const HalfCard = props => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="half-card w-1/3 h-48 my-8 bg-white no-underline"
    >
      <div className="text-center h-full flex flex-col justify-center">
        {props.children}
      </div>
    </a>
  );
};

export default HalfCard;
