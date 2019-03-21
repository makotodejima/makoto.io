import React from "react";

const WorkHeader = props => (
  <div className="hero flex flex-col justify-center text-center align-middle">
    <h3 className="font-light tracking-wide">{props.desc}</h3>
    <h2 className="my-4">{props.title}</h2>
  </div>
);

export default WorkHeader;
