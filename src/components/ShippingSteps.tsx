import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import QuoteModalForm from './QuoteForm';

const ShippingSteps: React.FC = () => {
  return (
    <section className="steps-section">
    <Container>
      <h2 className='section-title text-center steps-title'>How to Ship Your Vehicle</h2>
      <Row>
        <Col xs={12} md={6}>
          <Image src="src/assets/car.jpg" fluid />
        </Col>
        <Col xs={12} md={6}>
          <h3 className="steps-title"><strong>Step 1</strong></h3>
          <p className="steps-description">
          Fill out our quote request form and we’ll send you a cost
                    estimate for your move. You get to choose if you want an
                    email, text, or a good ol’ fashioned call – whatever floats
                    your boat!
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="order-md-2">
          <Image src="src/assets/jeep.jpg" fluid />
        </Col>
        <Col xs={12} md={6} className="order-md-1">
          <h3 className="steps-title"><strong>Step 2</strong></h3>
          <p className="steps-description">
          Confirm your move! Let’s make it official and turn your
                    quote into an order! Just click the link we send your way.
                    We’ll hammer the nitty gritty details and get your vehicle
                    on a truck in no time.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Image src="src/assets/classic.jpg" fluid />
        </Col>
        <Col xs={12} md={6}>
          <h3 className="steps-title"><strong>Step 3</strong></h3>
          <p className="steps-description">
          Your pick-up day and carrier’s name will be sent to you in
                    due time, so sit back, relax, and wait for the good news to
                    roll in. We suggest clearing your schedule for pick up day
                    so we don’t miss the driver.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="order-md-2">
          <Image src="src/assets/moto.jpg" fluid />
        </Col>
        <Col xs={12} md={6} className="order-md-1">
          <h3 className="steps-title"><strong>Step 4</strong></h3>
          <p className="steps-description">
          We’ll give you a heads up when your vehicle is set to
                    arrive. We need you to be there all day so we don’t miss the
                    hauler. When your vehicle arrives, give it a good once-over.
                    If everything checks out, pay the driver and you’ll be on
                    your way.
          </p>
        </Col>
      </Row>
      <Row>
        <div className="text-center mt-5">
          <QuoteModalForm></QuoteModalForm>
          </div>
      </Row>
    </Container>
    </section>
  );
};

export default ShippingSteps;
