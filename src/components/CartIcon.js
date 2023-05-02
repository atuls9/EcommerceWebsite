import React, { useContext } from "react";
import { Container, Col, Button, Badge } from "react-bootstrap";
import CartContext from "../store/CartContext";

const CartIcon = (props) => {
  const cartCtx = useContext(CartContext);
  const showModal = () => {
    props.showModal();
  };
  let total = cartCtx.items.reduce(
    (current, item) => (current = current + +item.amount),

    0
  );
  return (
    <>
      <Container fluid>
        <Col sm={2}></Col>
        <Col className="d-flex  "></Col>
        <Col sm={1}>
          <Button variant="outline-info" onClick={() => showModal()}>
            Cart <Badge bg="primary">{total}</Badge>
          </Button>
        </Col>
      </Container>
    </>
  );
};

export default CartIcon;
