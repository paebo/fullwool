import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";

function ItemList() {
  const { items } = useContext(ItemContext);

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}

export default ItemList;
