import React from "react";
import classes from "./UserTile.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import avi from "../../../assets/avi.png";
export const UserTile = (props) => {
  return (
    <Container>
      <div className={classes.Highlight}>
        <Row>
          <Col className="p-0" xs={12} sm={3} xl={2}>
            <img width={150} src={avi} alt="Generic placeholder" />
            <Row>
              <p>Online Now</p>
            </Row>
          </Col>

          <Col xs={0} sm={12} md={8} xl={9}>
            <Row>
              {props.user.firstName}
              {props.user.lastName}
            </Row>
            <Row>{props.user.country}</Row>
            <Row>{props.user.userName}</Row>
            <Row>{props.user.gender}</Row>
            <Row>{props.user.onlineStatus}</Row>
            <Row>{props.user.id}</Row>
          </Col>
        </Row>
        <Row></Row>
      </div>
    </Container>
  );
};

export default UserTile;
