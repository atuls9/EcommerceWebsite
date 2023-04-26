import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Store from "./components/Store";
import Header from "./components/Header";
import Cart from "./components/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    setModalShow(true);
  };
  // const CloseModal = () => {
  //   setModalShow(false)
  // }
  return (
    <CartProvider>
      <Header showModal={showModal} />
      <Cart show={modalShow} onHide={() => setModalShow(false)} />
      <Store />
    </CartProvider>
  );
}

export default App;
