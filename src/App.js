import React, { useState } from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Store from "./components/Store";
import About from "./components/About";
import Home from "./components/Home";
import ContactUS from "./components/ContactUS";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    setModalShow(true);
  };
  return (
    <>
      <Header showModal={showModal} />
      {!!modalShow && (
        <Cart show={modalShow} onHide={() => setModalShow(false)} />
      )}

      <Route path="/home">
        <Home />
      </Route>
      <Route path="/store">
        <Store />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contactus">
        <ContactUS />
      </Route>

      <Footer />
    </>
  );
}

export default App;
