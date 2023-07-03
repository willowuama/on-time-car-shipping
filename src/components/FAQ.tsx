import React from 'react';
import { Container, Col, Row, Card, Accordion} from 'react-bootstrap';

const FAQ: React.FC = () => {
  return (
    <section className="faq" id="faq">
    <Container>
          <h2 className="section-title text-center">
            Frequently Asked Questions
          </h2>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Q: How do I get a car shipping quote?
                    </Accordion.Header>
                    <Accordion.Body>
                      To get a quote, simply fill out our simple quote request
                      form, and we’ll get back to you with your estimated
                      shipping cost.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Q: How do I prepare my car for shipping?
                    </Accordion.Header>
                    <Accordion.Body>
                      Before transport, make sure to clean out personal items
                      and leave only the essentials in your car. We recommend
                      giving it a wash so it can be thoroughly inspected for
                      transport.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Q: How long does it take to ship a car?
                    </Accordion.Header>
                    <Accordion.Body>
                      Shipping times depend on your location, but we’ll keep you
                      updated every step of the way.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Q: What happens if my car is damaged during transport?
                    </Accordion.Header>
                    <Accordion.Body>
                      In the unlikely event that your car is damaged during
                      transport, rest assured that all of the carriers we use
                      are licensed and insured. We will monitor any claims until
                      settled.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Q: Can I track my car during transport?
                    </Accordion.Header>
                    <Accordion.Body>
                      While we don’t have tracking capabilities just yet, we’ll
                      keep you informed with regular updates throughout the
                      shipping process.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      Q: How do I pay for my car shipping?
                    </Accordion.Header>
                    <Accordion.Body>
                      We accept all major credit cards for our up-front broker's
                      fee. The remaining balance is due in cash or certified
                      funds upon delivery. We keep it simple and straightforward
                      just like we keep the car shipping process.
                    </Accordion.Body>
                  </Accordion.Item>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
        </section>
  );
};

export default FAQ;
