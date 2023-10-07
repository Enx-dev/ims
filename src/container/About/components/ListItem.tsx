import React from "react";

interface IListItem {
  label: string;
  text: string;
}

const ListItem = ({ label, text }: IListItem) => {
  return (
    <li id="about_item" className="body">
      <span className="label">{label}:</span>
      {text}
    </li>
  );
};

export default ListItem;
