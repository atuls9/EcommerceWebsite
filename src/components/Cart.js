import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import "./Cart.css";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Form,
  InputGroup,
} from "react-bootstrap";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const handleClose = () => {
    props.onHide();
  };
  let total = 0;
  let totalForItem = 0;
  let totalPrice = 0;
  const products = cartCtx.items.map((item) => {
    totalForItem = +item.amount;
    total = total + +item.amount;
    totalPrice = totalPrice + +item.price * totalForItem;
    return (
      <>
        <Row className="mb-4 mt-4">
          <Col sm={3}>
            <hr />
            <Image
              src={`${item.imageUrl}`}
              className="mx-auto "
              style={{
                height: "80px",
                width: "80px",
              }}
            />
          </Col>

          <Col sm={2}>
            <hr />
            {item.title}
          </Col>

          <Col sm={2}>
            <hr />
            {item.price}
          </Col>
          <Col sm={5}>
            <hr />
            <Form>
              <InputGroup>
                <Form.Control type="number" value={totalForItem} />
                <Button variant="danger" className="float-end">
                  Remove
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </>
    );
  });

  return (
    <Container
      style={{
        backgroundColor: "white",
        border: "solid 4px red",
        borderRadius: "16px",
      }}
      className=" setCart "
    >
      <Container className="  mt-4">
        <Row className="mb-4 ">
          <Col sm={4}></Col>
          <Col sm={4}>
            <h2>Cart</h2>
          </Col>
          <Col sm={4}>
            <Button
              onClick={handleClose}
              style={{ marginLeft: "95px" }}
              variant="outline-danger"
            >
              Close
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            {" "}
            <h4>Item</h4>
          </Col>
          <Col sm={2}>
            <h4>Price</h4>
          </Col>
          <Col sm={5}>
            <h4>Quantity</h4>
          </Col>
        </Row>
      </Container>
      <Container>{products}</Container>

      <Container className="mb-3 ">
        <Button
          bg="dark"
          size="lg"
          style={{ marginLeft: "15%", marginBottom: "1px" }}
          disabled
          variant="dark"
          //   className="border border-danger"
        >
          Total Amount : {totalPrice}
        </Button>
        <Button
          variant="info"
          size="lg"
          style={{ marginLeft: "16px" }}
          onClick={handleClose}
        >
          Purchase
        </Button>
      </Container>
    </Container>
  );
};

export default Cart;
