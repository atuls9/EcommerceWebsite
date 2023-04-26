import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import Cart from "./Cart";
import Footer from "./Footer";

function RootLayout() {
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
      <Outlet />
      <Footer />
    </>
  );
}
export default RootLayout;
