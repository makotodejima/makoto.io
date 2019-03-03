import React from "react";
import BottomLink from "./bottomLink";

const HomeWorkBtns = props => {
  return (
    <div className="flex justify-center">
      <BottomLink path="/" linkText="Home" />
      <BottomLink path="/work/" linkText="Work" />
    </div>
  );
};

export default HomeWorkBtns;
