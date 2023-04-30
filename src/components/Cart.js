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
  // const [addProduct, setAddProduct] = useState("1");

  const cartCtx = useContext(CartContext);

  const handleClose = () => {
    props.onHide();
  };
  let total = 0;
  let totalForItem = 0;
  let totalPrice = 0;
  const products = cartCtx.items.map((item) => {
    totalForItem = +item.amount;
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

          <Col sm={3}>
            <hr />
            {item.title}
          </Col>

          <Col sm={1} id="price">
            <hr />
            {item.price}
          </Col>
          <Col sm={5}>
            <hr />
            <Form>
              <InputGroup>
                <Form.Control
                  id="quantity"
                  type="number"
                  // onChange={() => inputHandler(addProduct)}
                  // defaultValue={item.amount}
                  value={item.amount}
                />
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
