import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Store from "./components/Store";
import About from "./components/About";
import Home from "./components/Home";
import ContactUS from "./components/ContactUS";
import Header from "./components/Header";
import Cart from "./components/Cart";
import CartProvider from "./store/CartProvider";
import SingleProductDetails from "./components/SingleProductDetails";

const Routes = () => {
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    setModalShow(true);
  };
  return (
    <Switch>
      <Route path="/store/:productId" component={SingleProductDetails} />

      <CartProvider>
        <Header showModal={showModal} />
        {!!modalShow && (
          <Cart show={modalShow} onHide={() => setModalShow(false)} />
        )}
        <Route path="/store" exact>
          <Store />
        </Route>

        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/contactus">
          <ContactUS />
        </Route>
      </CartProvider>
    </Switch>
  );
};

export default Routes;
