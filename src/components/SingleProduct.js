import React from "react";
import { Col, Container, Image, Row, Badge } from "react-bootstrap";
import Images from "../images/Images";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import "./SingleProdut.css";
const productsArr = [
  {
    id: "p1",
    title: "Headphones",
    price: 100,

    imagesArray: [Images.p11, Images.p12, Images.p13, Images.p14],
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p2",
    title: "iPhone",
    price: 50,
    imagesArray: [Images.p21, Images.p22, Images.p23, Images.p24],

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p3",
    title: "Refrigerator",
    price: "70",
    imagesArray: [Images.p31, Images.p32, Images.p33, Images.p34],

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "p4",
    title: "Horse Painting",
    price: 100,
    imagesArray: [Images.p41, Images.p42, Images.p43, Images.p44],

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const SingleProduct = () => {
  const param = useParams();
  console.log(param.id, "param.id");
  const products = productsArr.find((el) => {
    return param.id === el.id;
  });
  console.log("products", products.id);

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
      </Container>
    </div>
  );
};

export default SingleProduct;
