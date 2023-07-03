import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QuoteModalForm from './QuoteForm';

const Hero: React.FC = () => {
    return (
        <header className="hero" id="home">
        <div className="overlay">
          <Container>
            <Row>
              <Col md={6}>
                <h1 className="hero-title">OnTime Car Shipping LLC</h1>
                <p className="hero-description">
                  We provide reliable and efficient car shipping services to any
                  destination.
                </p>
                <QuoteModalForm/>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    );
};

export default Hero