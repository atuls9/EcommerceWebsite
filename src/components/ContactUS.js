import React, { useRef } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";

const ContactUS = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const numberRef = useRef("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      number: numberRef.current.value,
    };

    const response = await fetch(
      "https://ecommerse-e23f6-default-rtdb.firebaseio.com/contactus.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        handlers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <Container className="my-5 ">
      <Row className=" justify-content-center mb-5 fs-3 fw-bold text-decoration-underline">
        {" "}
        Contact Us
      </Row>
      <Form>
        <Form.Group as={Row} className="mb-3 fw-bold">
          <Form.Label column sm="3">
            Name
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="Name" ref={nameRef} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 fw-bold">
          <Form.Label column sm="3">
            Email
          </Form.Label>
          <Col sm="9">
            <Form.Control type="email" placeholder="Email" ref={emailRef} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 fw-bold">
          <Form.Label column sm="3">
            Phone Number
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="number"
              placeholder="Phone Number"
              ref={numberRef}
            />
          </Col>
        </Form.Group>
        <Button style={{ marginLeft: "50%" }} size="lg" onClick={submitHandler}>
          {" "}
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUS;
