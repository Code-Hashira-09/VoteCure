import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateCard from './CandidateCard';
import './candidate.css';
const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/api/candidates');
      setCandidates(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {/* <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="px-1" md="2">
                      <Form.Group>
                        <label>PartyName</label>
                        <Form.Control
                          placeholder="PartyName"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          placeholder="Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>MoTo</label>
                        <Form.Control
                          cols="80"
                          placeholder="Here can be your MoTo"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row><br/>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/photo-1431578500526-4d9613015464.jpeg")}
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg")}
                    ></img>
                    <h5 className="title">Your Name</h5>
                  </a>
                  <p className="description">Your Party Name</p>
                </div>
                <p className="description text-center">
                  "Your MoTo will be displayed here"<br></br>
                  <br></br>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
          <div className="candidate-list">
      {candidates.map(candidate => (
        <CandidateCard
          key={candidate._id}
          candidateName={candidate.candidate_name}
          partyName={candidate.party_name}
          imageURL={candidate.imageURL}
        />
      ))}
    </div>
    </>
  );
}

export default CandidateList;
