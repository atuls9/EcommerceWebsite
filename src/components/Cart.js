import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import "./Cart.css";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  Image,
  Form,
  InputGroup,
} from "react-bootstrap";

// const cartElements = [
//   {
//     title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

//     quantity: 2,
//   },

//   {
//     title: "Black and white Colors",

//     price: 50,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

//     quantity: 3,
//   },

//   {
//     title: "Yellow and Black Colors",

//     price: 70,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

//     quantity: 1,
//   },
// ];

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
                <Form.Control type="number" defaultValue={totalForItem} />
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
    <Modal {...props} className="custamiseModal">
      <Modal.Header closeButton>
        <Modal.Title className="mx-auto fw-b">
          <h4>Cart</h4>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row>
            <Col sm={5}>
              {" "}
              <h5>Item</h5>
            </Col>
            <Col sm={2}>
              <h5>Price</h5>
            </Col>
            <Col sm={5}>
              <h5>Product</h5>
            </Col>
          </Row>
        </Container>
        <Container>{products}</Container>
      </Modal.Body>
      <Modal.Footer>
        <Button bg="dark" size="lg" disabled variant="dark">
          Total Amount : {totalPrice}
        </Button>
        <Button
          variant="info"
          size="lg"
          className="mx-auto"
          onClick={handleClose}
        >
          Purchase
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
