import React from "react";

interface IListItem {
  label: string;
  text: string;
}

const ListItem = ({ label, text }: IListItem) => {
  return (
    <li className="body">
      <span className="label">{label}:</span>
      {text}
    </li>
  );
};

export default ListItem;
