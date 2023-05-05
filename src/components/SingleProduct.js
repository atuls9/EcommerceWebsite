import React from "react";
import { Col, Container, Image, Row, Badge, Button } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./SingleProdut.css";
import productsArr from "./ProductArr";

const SingleProduct = () => {
  const history = useHistory();
  const param = useParams();
  console.log(param.id, "param.id");
  const products = productsArr.find((el) => {
    return param.id === el.id;
  });
  console.log("products", products.id);

  const goToStore = () => {
    history.push("/store");
  };

  return (
    <div>
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
              src={products.imagesArray[0]}
              alt=""
            />
          </Col>
          <Col md={3}>
            <Image
              className="imagesingle"
              src={products.imagesArray[1]}
              alt=""
            />
          </Col>
          <Col md={3}>
            <Image
              className="imagesingle"
              src={products.imagesArray[2]}
              alt=""
            />
          </Col>
          <Col md={3}>
            <Image
              className="imagesingle"
              src={products.imagesArray[3]}
              alt=""
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Button onClick={goToStore}> Go to Store</Button>
        </Row>
      </Container>
    </div>
  );
};

export default SingleProduct;
