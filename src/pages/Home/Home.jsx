import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Home.css"

export const Home = () => {
  return (
    
    <Container>
      <h1 className="text-center ">Looking for a new Job?</h1>
      <p className="text-center mb-5">We can help you to find new opportunities!</p>
      
        <Col md={4} className="mb-4">
          <Card className="event-card">
            <Card.Body>
              <Card.Title>Software Development, AI, Big Data and more! </Card.Title>
              <Card.Text>
              Join tech enthusiasts and show off your skills!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Container>
      );
    }
