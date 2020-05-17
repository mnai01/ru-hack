import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../userContext";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Container,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import DetailedMap from "../WorldMapCOVID19/DetailedMap";
import RegisterModal from "../Modal/RegisterModal";
import axios from "axios";

import classes from "./LandingPage.module.css";
import { testdatacall } from "../../testDataCall";

const POST_LOGIN = "";

const LandingPage = (props) => {
  const { onlineUsers, loading, getOnlineUsers } = useContext(UserContext);
  const { currentUser, getCurrentUser } = useContext(UserContext);

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [status, setStatus] = useState();

  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    console.log(currentUser);
    if (currentUser !== undefined) {
      if (currentUser.id !== null && currentUser.id !== undefined) {
        props.handleAuth(true);
        setStatus("Success!");
      } else {
        props.handleAuth(false);
      }
    }
    getOnlineUsers();
  }, [currentUser]);
  console.log(onlineUsers);

  const handlerLogin = (e) => {
    setLogin(e);
    console.log("login " + e);
  };

  const handlerPassword = (e) => {
    setPassword(e);
    console.log("Password " + e);
  };

  const handleSubmitLogin = (event) => {
    let data = {
      userName: login,
      password: password,
    };
    getCurrentUser(data);
    event.preventDefault();
  };
  return (
    <Container fluid className="p-5">
      <Row>
        <Col>
          <Card className="p-3">
            <Form>
              <Card.Title>Sign In, Get connected</Card.Title>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  onChange={(e) => handlerLogin(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => handlerPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              {status === "Success!" ? (
                <h5>Your are now logged in</h5>
              ) : (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleSubmitLogin}
                >
                  Submit
                </Button>
              )}

              <RegisterModal />
            </Form>
          </Card>
          <h1>We are all in this togehter</h1>
        </Col>
        <Col sm={6} md={8} lg={9}>
          <DetailedMap />
        </Col>
      </Row>

      {onlineUsers === null ? (
        ""
      ) : (
        <>
          <Card className="p-3">
            <Row className={classes.usersOnlineContainer}>
              {onlineUsers.map((res) => (
                <Col xs={5} sm={3} md={3} lg={3} xl={2}>
                  <Link to={"/Profile/" + res.id}>
                    <div className={classes.usersOnline}>
                      <Image
                        rounded
                        src="https://www.w3schools.com/w3images/avatar2.png"
                        alt=""
                      />
                      <Row className={classes.center}>
                        <Col xs={10} sm={7}>
                          <h6>{res.userName}</h6>
                        </Col>
                        <Col xs={0}>
                          <div id={classes.circle}></div>
                        </Col>
                      </Row>
                      <h6>{res.country}</h6>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Card>
        </>
      )}
    </Container>
  );
};

export default LandingPage;
