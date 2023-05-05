import React, { useContext, useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { productsArr1 } from "../components/ProductArr";
import {
  Button,
  Card,
  Col,
  Row,
  Form,
  FloatingLabel,
  InputGroup,
} from "react-bootstrap";
import CartContext from "../store/CartContext";
import "./Store.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

// const productsArr = productsArr;
const Store = () => {
  const quantityRef = useRef("");
  // const [importItem, setImportItem] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const cartCtx = useContext(CartContext);
  const [cartItems, setCartItems] = useState([...cartCtx.items]);
  const emailRegEx = localStorage.getItem("email");

  let url = `https://crudcrud.com/api/b3cef26eab3e450a961bd32ca23f6e77`;
  useEffect(() => {
    fetch(`${url}/cart${emailRegEx}`)
      .then((res) => res.json())
      .then((data) => {
        return cartCtx.addAllItem(data);
      });
  }, [cartCtx, emailRegEx, url]);
  const handleQuantityChange = (productId, newQuantity) => {
    // console.log(newQuantity, "newquantity");
    setQuantity(newQuantity);
    setCartItems(
      cartItems.map((product) => {
        if (product.id === productId) {
          cartCtx.addItem({ ...product, amount: newQuantity });
          return { ...product, amount: newQuantity };
        }
        return product;
      })
    );
    console.log(cartCtx.items);
  };
  const addItem = (item) => {
    for (const el of cartCtx.items) {
      if (el.id === item.id) {
        return alert("You have added this Item to cart");
        // console.log("you have added Item");
      }
    }

    // console.log(quantity, "itemamount");

    // console.log("object amount", inputquantity);

    cartCtx.addItem({ ...item, amount: quantity });
    let newItem = { ...item, amount: quantity };
    console.log("object new Item", newItem);
    console.log("NewItem", newItem);
    fetch(`${url}/cart${emailRegEx}`, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setQuantity(1);
  };
  const products = productsArr1.map((item) => {
    return (
      <Col key={Math.random().toString()}>
        <Card
          style={{ width: "310px", border: "none" }}
          className="mx-auto mt-5 cardSet"
        >
          <Card.Header
            className="mx-auto mb-4"
            style={{
              backgroundColor: "transparent",
              borderBottom: "transparent",
              marginTop: "16px",
            }}
          >
            <h4>{item.title}</h4>
          </Card.Header>
          <Card.Body className="cardSet">
            <Link to={`/store/${item.id}`}>
              <Card.Img
                src={`images/1${item.id}.png`}
                className=" cardImg "
                style={{ height: "250px", width: "250px" }}
                // onClick={() => imageClicked(item.id)}
              />
            </Link>
          </Card.Body>

          <Card.Text className="my-auto">
            <InputGroup>
              <InputGroup.Text>₹{item.price}.00 </InputGroup.Text>

              <FloatingLabel
                style={{ width: "60px" }}
                controlId="floatingPassword"
                label="Quantity"
              >
                <Form.Control
                  type="number"
                  ref={quantityRef}
                  value={item.amount}
                  defaultValue="1"
                  onChange={(e) => {
                    console.log(e.target.value);
                    return handleQuantityChange(item.id, e.target.value);
                  }}
                  className="text-center"
                  placeholder="Quantity"
                />
              </FloatingLabel>
              <Button
                className="float-end"
                style={{ zIndex: "0" }}
                type="submit"
                onClick={() => addItem(item)}
              >
                ADD TO CART
              </Button>
            </InputGroup>
          </Card.Text>

          {/* <Card.Img src=`${item.imageUrl}"/250px250"` alt="Card image" /> */}
        </Card>
      </Col>
    );
  });
  return (
    <>
      <Row xs={1} md={2} className="g-4 mx-auto" style={{ width: "60%" }}>
        {products}
      </Row>
    </>
  );
};

export default Store;
