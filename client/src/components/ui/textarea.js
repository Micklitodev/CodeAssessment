import React from "react";

const Textarea = ({ id, placeholder, name, className, onChange, value}) => {
  return (
    <textarea
      className={`flex wrap rounded border text-zinc-600 ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      id={id}
    />
  );
};

export default Textarea;