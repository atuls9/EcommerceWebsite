import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Button, Badge } from "react-bootstrap";

const Header = (props) => {
  const showModal = () => {
    console.log("showModal");
    props.showModal();
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
        <Button variant="outline-info" onClick={() => showModal()}>
          Cart <Badge bg="primary">9</Badge>
          {/* <span className="visually-hidden">unread messages</span> */}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
