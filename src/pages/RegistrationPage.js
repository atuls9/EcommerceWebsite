import React, { useState, useRef, useContext } from "react";
import { Col, Container, Row, Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";

const RegistrationPage = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const emailRegEx = enteredEmail.replace(/[^a-zA-Z0-9 ]/g, "");
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9nLWnwWjIQORgHxvi1HIul1aFtPmzwAo";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9nLWnwWjIQORgHxvi1HIul1aFtPmzwAo";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // console.log("data", data);
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace("/store");
        localStorage.setItem("email", emailRegEx);
        // console.log("success", data.idToken);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container className="mt-5">
      <Col md={{ offset: 3, span: 6 }}>
        <Card className={`${isLogin ? "bg-info" : "bg-warning"}`}>
          <Row>
            <Col md>
              <h1 className="text-center p-3">
                {!isLogin ? "Sign Up" : "Login"}
              </h1>
            </Col>
          </Row>
          <Row className="ms-5 me-5">
            <Col>
              <Form onSubmit={submitHandler}>
                {!isLogin && (
                  <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label className="fw-bold">User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                  </Form.Group>
                )}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    ref={emailRef}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fw-bold">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    ref={passwordRef}
                  />
                </Form.Group>
                <Row className="text-center">
                  <Col>
                    <Button size="lg" type="submit">
                      {isLogin ? "Login" : "Create Account"}
                    </Button>
                  </Col>
                </Row>
                <Row className="text-center">
                  <Col>
                    <Button
                      className="fw-bolder"
                      variant="link"
                      onClick={() => {
                        setIsLogin((prevState) => !prevState);
                      }}
                    >
                      {isLogin
                        ? "Create new account"
                        : "Login with existing account"}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card>
      </Col>
    </Container>
  );
};

export default RegistrationPage;
