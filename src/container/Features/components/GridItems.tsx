import React from "react";

interface IGridItems {
  label: string;
  text: string;
}

const GridItems = ({ label, text }: IGridItems) => {
  return (
    <div className="p-4 bg-secondary-50/20 hover:shadow-lg hover:shadow-accent/30 cursor-default transition-all duration-200 ease-in-out rounded-md shadow-md shadow-accent/25 space-y-4">
      <h1 className="text-2xl text-primary-700  font-meduim">{label}</h1>
      <p className="body">{text}</p>
    </div>
  );
};

export default GridItems;
