import React from "react";

const Counter = ({ count, maxLength }) => {
  return (
    <span>
      <span className={count >= 140 ? "text-red-400 font-bold" : "text-white"}>
        {count}
      </span>
      /{maxLength}
    </span>
  );
};

export default Counter;
