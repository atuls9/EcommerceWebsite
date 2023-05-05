import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    // const emailRegEx = localStorage.getItem("email");
    console.log(item);

    let existingItemIndex = items.findIndex((el) => el.id === item.id);
    let existingItem = items[existingItemIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: +existingItem.amount + +item.amount,
      };
      updatedItems = [...items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      const updatedItem = {
        key: Math.random().toString(),
        ...item,
      };
      updatedItems = items.concat(updatedItem);
    }
    setItems([...updatedItems]);
    console.log("into context", ...updatedItems);
  };
  const removeItemFromCartHandler = (id) => {
    const newItems = items.filter((el) => id !== el.id);
    setItems(newItems);
  };
  const removeOneItemHandler = (item) => {
    const existingItemIndex = items.findIndex((el) => el.id === item.id);
    const existingItem = items[existingItemIndex];
    const newItem = { ...existingItem, amount: +existingItem.amount - 1 };
    let updatedItems = [...items];
    updatedItems[existingItemIndex] = newItem;
    setItems(updatedItems);
    // console.log(existingItem);
  };
  const addAllItemHandler = (items) => {
    setItems(items);
  };
  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeOneItem: removeOneItemHandler,
    addAllItem: addAllItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
