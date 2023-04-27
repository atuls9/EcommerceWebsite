import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { PlayCircle } from "react-bootstrap-icons";
import "./Home.css";

const Home = () => {
  return (
    <Container fluid className="p-0">
      <Container fluid className="pb-5 bg-secondary">
        <Row className="text-center">
          <Col>
            <Button
              className="p-3 mr-5 text-white mx-auto"
              variant="outline-info"
              size="lg"
            >
              Get Our Latest Album
            </Button>
            <Button
              className="bg-transparent mx-auto"
              color="info"
              variant="link"
            >
              <PlayCircle color="skyblue " size={45} />
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="">
        <Col className="mx-auto justify-content-center text-center p-5">
          <h2>Tour</h2>
        </Col>
      </Container>
      <Container fluid className=" col-md-auto ">
        <Row className="p-2  justify-content-center  ">
          <Col md={{ span: 1, offset: 1 }}>JUL16</Col>
          <Col md={1}>DETROIT, MI</Col>
          <Col md={2}>DTE ENERGY MUSIC THEATRE</Col>
          <Col md={2}>
            {" "}
            <Button variant="info" className="float-end ">
              Buy Tickets
            </Button>
          </Col>
        </Row>
        <Row className="p-2  justify-content-center  ">
          <Col md={{ span: 1, offset: 1 }}>JUL16</Col>
          <Col md={1}>DETROIT, MI</Col>
          <Col md={2}>DTE ENERGY MUSIC THEATRE</Col>
          <Col md={2}>
            {" "}
            <Button variant="info" className="float-end">
              Buy Tickets
            </Button>
          </Col>
        </Row>
        <Row className="p-2  justify-content-center  ">
          <Col md={{ span: 1, offset: 1 }}>JUL16</Col>
          <Col md={1}>DETROIT, MI</Col>
          <Col md={2}>DTE ENERGY MUSIC THEATRE</Col>
          <Col md={2}>
            {" "}
            <Button variant="info" className="float-end">
              Buy Tickets
            </Button>
          </Col>
        </Row>
        <Row className="p-2  justify-content-center  ">
          <Col md={{ span: 1, offset: 1 }}>JUL16</Col>
          <Col md={1}>DETROIT, MI</Col>
          <Col md={2}>DTE ENERGY MUSIC THEATRE</Col>
          <Col md={2}>
            {" "}
            <Button variant="info" className="float-end">
              Buy Tickets
            </Button>
          </Col>
        </Row>
        <Row className="p-2  justify-content-center  ">
          <Col md={{ span: 1, offset: 1 }}>JUL16</Col>
          <Col md={1}>DETROIT, MI</Col>
          <Col md={2}>DTE ENERGY MUSIC THEATRE</Col>
          <Col md={2}>
            {" "}
            <Button variant="info" className="float-end">
              Buy Tickets
            </Button>
          </Col>
        </Row>
        <Row className="p-2  justify-content-center ">
          <Col md={{ span: 1, offset: 1 }}>JUL16</Col>
          <Col md={1}>DETROIT, MI</Col>
          <Col md={2}>DTE ENERGY MUSIC THEATRE</Col>
          <Col md={2}>
            {" "}
            <Button variant="info" className="float-end">
              Buy Tickets
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
