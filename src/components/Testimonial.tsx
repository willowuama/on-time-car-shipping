import React from 'react';
import { Container, Col, Row} from 'react-bootstrap';

const Testimonial: React.FC = () => {
    return (
        <section className="testimonials">
        <Container>
          <h2 className="section-title text-center">What Our Customers Say</h2>
          <Row>
            <Col md={4}>
              <div className="testimonial">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Customer"
                  className="testimonial-image"
                />
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ut neque quis ipsum sagittis eleifend.
                </p>
                <p className="testimonial-author">John Doe</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Customer"
                  className="testimonial-image"
                />
                <p className="testimonial-text">
                  Ut maximus risus id arcu pulvinar, et viverra justo tristique.
                  Donec sagittis tellus nec consectetur luctus.
                </p>
                <p className="testimonial-author">Jane Smith</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Customer"
                  className="testimonial-image"
                />
                <p className="testimonial-text">
                  In faucibus lorem vitae mauris fringilla, eget tristique
                  ligula condimentum. Nulla vitae orci vitae lectus aliquam
                  varius ac ac justo.
                </p>
                <p className="testimonial-author">Mike Johnson</p>
              </div>
            </Col>
          </Row>
        </Container>
        </section>
    );
};

export default Testimonial;