import React, { useState, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUS from "./pages/ContactUS";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";
import SingleProduct from "./components/SingleProduct";
import AuthContext from "./store/auth-context";
// import CartIcon from "./components/CartIcon";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLoggedIn;
  const showModal = () => {
    setModalShow(true);
  };
  return (
    <CartProvider>
      {/* <RegistrationPage /> */}
      {/* <CartIcon showModal={showModal} /> */}
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
        {isLogin && <Store />}
        {!isLogin && <Redirect to="/login" />}
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
      <Route path="/login">
        <RegistrationPage />
      </Route>

      <Footer />
    </CartProvider>
  );
}

export default App;
