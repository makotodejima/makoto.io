import React from "react";

const CardLayout = props => {
  return (
    <div className="boxes flex mb-10 flex-wrap justify-around bg-grey-lighter">
      {props.children}
    </div>
  );
};

export default CardLayout;
