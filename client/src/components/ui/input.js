import React from "react";

const Input = ({
  id,
  placeholder,
  type,
  name,
  className, 
  onChange

}) => {
  return (
    <input
    className={`${className} rounded py-2 px-2 flex wrap border  text-zinc-800`}
      id={id}
      type={type}
      placeholder={placeholder} 
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
