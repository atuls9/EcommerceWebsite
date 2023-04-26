import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Store from "./components/Store";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    setModalShow(true);
  };
  // const CloseModal = () => {
  //   setModalShow(false)
  // }
  return (
    <div>
      <Header showModal={showModal} />
      <Cart show={modalShow} onHide={() => setModalShow(false)} />
      <Store />
    </div>
  );
}

export default App;
