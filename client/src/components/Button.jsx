import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-4 py-1 bg-[#2c3e50] hover:bg-[#435b74] transition duration-150 rounded-md">
      {children}
    </button>
  );
};

export default Button;
