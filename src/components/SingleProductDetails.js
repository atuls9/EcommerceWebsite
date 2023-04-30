import React from "react";
import { Col, Container, Image, Row, Badge } from "react-bootstrap";
import "./SingleProductDetails.css";
import { useParams } from "react-router-dom";

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
    price: "70",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const SingleProductDetails = () => {
  let { productID } = useParams();
  console.log("params", productID);
  const products = productsArr.find((el) => {
    return productID === el.id;
  });
  console.log(products);
  return (
    <div>
      <h1>hello you are in </h1>
      <h1 style={{ marginLeft: "40%", marginTop: "100px" }}>
        <Badge bg="transparent" className="fw-bold text-center" text="dark">
          {products.title}
        </Badge>
      </h1>
      <h3
        style={{ marginLeft: "40%", marginTop: "10px", marginBottom: "50px" }}
      >
        <Badge bg="transparent" className="fw-bold text-center" text="dark">
          Price: ₹{products.price}.00
        </Badge>
      </h3>
      <Container>
        <Row>
          <Col md={3}>
            <Image
              className="imagesingle"
              src={`images/1${products.id}.png`}
              alt=""
            />
          </Col>
          <Col md={3}>
            <Image
              className="imagesingle"
              src={`images/2${products.id}.png`}
              alt=""
            />
          </Col>
          <Col md={3}>
            <Image
              className="imagesingle"
              src={`images/3${products.id}.png`}
              alt=""
            />
          </Col>
          <Col md={3}>
            <Image
              className="imagesingle"
              src={`images/4${products.id}.png`}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleProductDetails;
