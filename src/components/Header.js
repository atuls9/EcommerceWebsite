import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Button, Badge } from "react-bootstrap";
import CartContext from "../store/CartContext";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const showModal = () => {
    console.log("showModal");
    props.showModal();
  };
  let total = cartCtx.items.reduce(
    (current, item) => (current = current + +item.amount),
    0
  );
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
        <Button variant="outline-info" onClick={() => showModal()}>
          Cart <Badge bg="primary">{total}</Badge>
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
