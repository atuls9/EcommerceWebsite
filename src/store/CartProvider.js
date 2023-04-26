import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    let existingItemIndex = items.findIndex((el) => el.id === item.id);
    let existingItem = items[existingItemIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: +existingItem.amount + +item.amount,
      };
      updatedItems = [...items];
      console.log("updatedItem", updatedItem);
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      const updatedItem = {
        key: Math.random().toString(),
        ...item,
      };
      updatedItems = items.concat(updatedItem);
    }
    console.log("into context", item);
    setItems([...updatedItems]);
  };
  const removeItemFromCartHandler = () => {};
  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
