import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import CartContext from "../store/CartContext";
import "./Store.css";

const productsArr = [
  {
    id: "p1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p3",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "p4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Store = () => {
  const cartCtx = useContext(CartContext);

  const addItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
    console.log(cartCtx.addItem);
  };
  const products = productsArr.map((item) => {
    return (
      <Col>
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
            <Card.Img src={`${item.imageUrl}`} className=" cardImg " />
          </Card.Body>

          <Card.Text className="mt-5">
            ${item.price}
            <Button className="float-end" onClick={() => addItem(item)}>
              ADD TO CART
            </Button>
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
