import React, { useEffect, useContext, useState } from "react";
import Media from "react-bootstrap/Media";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { UserContext } from "../../userContext";
import avi from "../../assets/avi.png";
const UserInfo = (props) => {
  const { selectedUser, loading, getUserById } = useContext(UserContext);
  const [loadingThis, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    console.log(id);
    getUserById(id);
    setLoading(false);
  }, []);

  return (
    <div>
      {loadingThis === true ? (
        <h1>
          <>
            <Container fluid>
              <Media className=" m-2">
                <img
                  width={100}
                  height={100}
                  className="m-5"
                  src={avi}
                  alt="Generic placeholder"
                />
                <Media.Body className="pt-3">
                  <Row>
                    <Col>
                      <Row>
                        <h5 className="pl-3 mr-4">Bryan B</h5>
                        <p>(last seen 0 min ago)</p>
                      </Row>
                      <h6>Country:</h6>
                      <h6>Speaks:</h6>
                      <h6>Interested in:</h6>
                      <h6>Speaks:</h6>
                    </Col>
                  </Row>
                </Media.Body>
              </Media>
              <Row className="p-3">
                <h2>
                  If you can travel anywhere in the world where would it be?
                </h2>
              </Row>
              <p className="p-3">...</p>
              <Row className="p-3">
                <h2>What is your dream job?</h2>
              </Row>
              <p className="p-3">...</p>
              <Row className="p-3">
                <h2>What is your favorite food? </h2>
              </Row>
              <p className="p-3">...</p>
              <Row className="p-3">
                <h2>What are your hobbies? </h2>
              </Row>
              <p className="p-3">...</p>
            </Container>
          </>
        </h1>
      ) : (
        <>
          <Container fluid>
            <Media className=" m-2">
              <img
                width={100}
                height={100}
                className="m-5"
                src={avi}
                alt="Generic placeholder"
              />
              <Media.Body className="pt-3">
                <Row>
                  <Col>
                    <Row>
                      <h5 className="pl-3 mr-4">
                        {selectedUser.firstName} {selectedUser.lastName}
                      </h5>
                      <p>(last seen 5 min ago)</p>
                    </Row>
                    <h6>Country: {selectedUser.country}</h6>
                    <h6>Speaks: {selectedUser.languagesSpoken}</h6>
                    <h6>Interested in: {selectedUser.languagesInterested}</h6>
                  </Col>
                </Row>
              </Media.Body>
            </Media>
            <Row className="p-3">
              <h2>
                If you can travel anywhere in the world where would it be?
              </h2>
            </Row>
            <p className="p-3">...</p>
            <Row className="p-3">
              <h2>What is your dream job?</h2>
            </Row>
            <p className="p-3">...</p>
            <Row className="p-3">
              <h2>What is your favorite food? </h2>
            </Row>
            <p className="p-3">...</p>
            <Row className="p-3">
              <h2>What are your hobbies? </h2>
            </Row>
            <p className="p-3">...</p>
          </Container>
        </>
      )}
    </div>
  );
};

export default UserInfo;
