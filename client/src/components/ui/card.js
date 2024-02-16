import React from "react";

const Card = ({ children }) => {
  return (
    <div className="flex flex-col p-6 bg-zinc-850 shadow-lg rounded-lg justify-between">
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div>{children}</div>;
};

export { CardContent, Card };
