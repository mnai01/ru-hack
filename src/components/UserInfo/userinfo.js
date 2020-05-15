import React from "react";
import Media from "react-bootstrap/Media";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import avi from "../../assets/avi.png";
const userInfo = () => (
  <div>
    <Media>
      <img
        width={100}
        height={100}
        className="align-self-start mt-5 ml-5 mr-5"
        src={avi}
        alt="Generic placeholder"
      />
      <Media.Body className="mt-2">
        <h5>Bryan B</h5>
        <p>United States, New York</p>
        <p>Speaks: English, Spanish</p>
        <p>Interested in: Chinese</p>
        <p>Speaks: English, Spanish</p>
      </Media.Body>
    </Media>
    <Container fluid>
      <Row className="pt-4 pl-4">
        <h2> If you can travel anywhere in the world where would it be?</h2>
      </Row>{" "}
      <p className="pt-4 pl-4">Canada, those moose man....</p>
      <Row className="pt-4 pl-4">
        <h2> What is your dream job?</h2>
      </Row>{" "}
      <p className="pt-4 pl-4">Astronaut</p>
      <Row className="pt-4 pl-4">
        <h2> What is your favorite food? </h2>
      </Row>{" "}
      <p className="pt-4 pl-4">Tacos</p>
      <Row className="pt-4 pl-4">
        <h2> What are your hobbies? </h2>
      </Row>{" "}
      <p className="pt-4 pl-4">Shitty design</p>
    </Container>
  </div>
);

export default userInfo;
