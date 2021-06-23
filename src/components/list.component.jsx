import React from "react";

const clicked = () => {};

const list = (props) => {
  return (
    <div onClick={clicked}>
      <li style={{ textDecoration: "line-through" }}>{props.propItem}</li>;
    </div>
  );
};

export default list;
