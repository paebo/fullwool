import React, { useState, createContext } from "react";
import { fetchItemsApi } from "../api/get";

export const ItemContext = createContext();

export function InventoryProvider(props) {
  const [items, setItems] = useState();

  function fetchItems() {
    fetchItemsApi().then((data) => setItems(data.data));
  }

  return (
    <ItemContext.Provider value={{ items, fetchItems }}>
      {props.children}
    </ItemContext.Provider>
  );
}
