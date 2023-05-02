import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import CartContext from "../store/CartContext";
import "./Store.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const productsArr = [
  {
    id: "p1",
    title: "Headphones",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p2",
    title: "iPhone",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p3",
    title: "Refrigerator",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "p4",
    title: "Horse Painting",

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
            <Link to={`/store/${item.id}`}>
              <Card.Img
                src={`images/1${item.id}.png`}
                className=" cardImg "
                style={{ height: "250px", width: "250px" }}
                // onClick={() => imageClicked(item.id)}
              />
            </Link>
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
