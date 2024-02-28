import React from "react";

const Button = ({ children, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-orange-400 hover:bg-orange-500 rounded px-4 py-2 mt-2"
    >
      {children}
    </button>
  );
};

export default Button;
