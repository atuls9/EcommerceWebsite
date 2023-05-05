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
  ButtonGroup,
} from "react-bootstrap";

const Cart = (props) => {
  // const emailRegEx = localStorage.getItem("email");
  // let url = `https://crudcrud.com/api/b3cef26eab3e450a961bd32ca23f6e77`;

  const cartCtx = useContext(CartContext);

  const removeOneItem = (item) => {
    cartCtx.removeOneItem(item);
  };
  const addOneItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItem = (id) => {
    cartCtx.removeItem(id);
  };

  const handleClose = () => {
    // console.log(cartCtx.items);
    props.onHide();
  };
  let total = 0;
  let totalForItem = 0;
  let totalPrice = 0;
  const products = cartCtx.items.map((item) => {
    totalForItem = +item.amount;
    if (totalForItem < 1) {
      return;
    }
    // setAddProduct(totalForItem);
    total = total + +item.amount;
    totalPrice = totalPrice + +item.price * totalForItem;
    return (
      <>
        <Row className="mb-4 mt-4">
          <Col sm={3}>
            <hr />
            <Image
              src={`images/1${item.id}.png`}
              className="mx-auto  "
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

          <Col sm={1} id="price">
            <hr />
            {item.price}
          </Col>
          <Col sm={6}>
            <hr />
            <Form>
              <InputGroup>
                <Form.Control
                  id="quantity"
                  style={{
                    height: "40px",
                    marginRight: "13px",
                    borderRadius: "16px",
                  }}
                  type="number"
                  value={item.amount}
                />
                <ButtonGroup className="mb-2">
                  <Button
                    className="rounded-end"
                    variant="outline-danger"
                    onClick={() => removeOneItem(item)}
                  >
                    -
                  </Button>
                  <Button
                    className="mx-2 rounded-1"
                    variant="success"
                    onClick={() => addOneItem(item)}
                  >
                    +
                  </Button>
                  <Button
                    className="rounded-start"
                    variant="danger"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </ButtonGroup>
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
        // border: "solid 2px",
        borderRadius: "16px",
      }}
      className=" setCart shadow-lg"
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
