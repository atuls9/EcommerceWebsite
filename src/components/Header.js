import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Button,
  Badge,
  Row,
  Col,
  Nav,
} from "react-bootstrap";
import CartContext from "../store/CartContext";
import "./Header.css";
// import "./Header.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const showModal = () => {
    console.log("showModal");
    props.showModal();
  };
  let total = cartCtx.items.reduce(
    (current, item) => (current = current + +item.amount),
    0
  );
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ width: "100%", zIndex: "1" }}
        className="position-fixed  mt-0"
      >
        <Container fluid>
          <Col sm={2}>
            {" "}
            <Navbar.Brand href="#home">Welcome</Navbar.Brand>
          </Col>
          <Col className="d-flex  ">
            <Nav>
              <NavLink to="/" className=" text-decoration-none">
                {" "}
                <h4>Home</h4>{" "}
              </NavLink>
              <NavLink to="/store" className="mx-5  text-decoration-none">
                {" "}
                <h4>Store</h4>{" "}
              </NavLink>
              <NavLink to="about" className="  text-decoration-none">
                {" "}
                <h4>About </h4>
              </NavLink>
            </Nav>
          </Col>
          <Col sm={1}>
            <Button variant="outline-info" onClick={() => showModal()}>
              Cart <Badge bg="primary">{total}</Badge>
            </Button>
          </Col>
        </Container>
      </Navbar>
      <Container fluid className="p-5  bg-secondary">
        <Row>
          <Col className="text-white mt-5 bg-secondary text-center">
            <h1>The Generics</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
