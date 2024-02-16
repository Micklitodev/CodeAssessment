import React from "react";

const Button = ({ children, className, onClick, ariaLabel}) => {
  return (
    <button onClick={onClick}  aria-label={ariaLabel} className={`px-2 py-2 border rounded-lg ${className}`}>
      {children}
    </button>
  );
};

export default Button;