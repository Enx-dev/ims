import React from "react";

interface IGridItems {
  label: string;
  text: string;
}

const GridItems = ({ label, text }: IGridItems) => {
  return (
    <div className="p-4 hover:shadow-lg cursor-default transition-all duration-200 ease-in-out rounded-sm shadow-sm shadow-accent/25 space-y-4">
      <h1 className="text-2xl text-primary-700  font-meduim">{label}</h1>
      <p className="body">{text}</p>
    </div>
  );
};

export default GridItems;
