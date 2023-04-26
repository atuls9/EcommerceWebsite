import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = () => {
  return (
    <Container fluid className="p-5 mt-5 bg-info">
      <Row>
        <Col className="text-white  bg-info text-center">
          <h1>The Generics</h1>
        </Col>
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              <img
                src="https://w7.pngwing.com/pngs/208/269/png-transparent-youtube-play-button-computer-icons-youtube-youtube-logo-angle-rectangle-logo.png"
                alt=""
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </Button>
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                alt=""
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </Button>
            <Button style={{ backgroundColor: "transparent", border: "none" }}>
              {" "}
              <img
                src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                alt=""
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
