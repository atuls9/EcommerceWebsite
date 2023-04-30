import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Store from "./components/Store";
import About from "./components/About";
import Home from "./components/Home";
import ContactUS from "./components/ContactUS";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";
import SingleProduct from "./components/SingleProduct";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    setModalShow(true);
  };
  return (
    <CartProvider>
      <Header showModal={showModal} />
      {!!modalShow && (
        <Cart show={modalShow} onHide={() => setModalShow(false)} />
      )}

      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/store" exact>
        <Store />
      </Route>
      <Route path="/store/:id">
        <SingleProduct />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      <Route path="/contactus">
        <ContactUS />
      </Route>

      <Footer />
    </CartProvider>
  );
}

export default App;
