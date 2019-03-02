import React from "react";
import { Link } from "gatsby";

const Label = () => {
  return (
    <div className="label flex justify-between">
      <p>Latest work</p>
      <Link to="/work/">More</Link>
    </div>
  );
};

export default Label;
