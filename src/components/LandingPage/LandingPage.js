import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Container,
  Image,
} from "react-bootstrap";
import DetailedMap from "../WorldMapCOVID19/DetailedMap";
import classes from "./LandingPage.module.css";

export const LandingPage = () => (
  <Container fluid className="p-5">
    <Row>
      <Col>
        <Card className="p-3">
          <Form>
            <Card.Title>Sign up, Get connected</Card.Title>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
        <h1>We are all in this togehter</h1>
      </Col>
      <Col sm={8}>
        <DetailedMap />
      </Col>
    </Row>

    <Card className="p-3">
      <Row className={classes.usersOnlineContainer}>
        <Col xs={2}>
          <div className={classes.usersOnline}>
            <Image
              rounded
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt=""
            />
            <Row className={classes.center}>
              <Col xs={5}>
                <h6>moathsssss</h6>
              </Col>
              <Col xs={2}>
                <div id={classes.circle}></div>
              </Col>
            </Row>
            <h6>Uzbekistan</h6>
          </div>
        </Col>

        <Col>
          <Card>
            <Card.Title>gii</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>gii</Card.Title>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>gii</Card.Title>
          </Card>
        </Col>
      </Row>
    </Card>
  </Container>
);

export default LandingPage;
