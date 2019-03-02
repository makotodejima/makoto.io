import React from "react";

const CardLayout = props => {
  return <div className="flex flex-wrap justify-between">{props.children}</div>;
};

export default CardLayout;
