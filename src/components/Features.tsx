import React from 'react';
import { Container} from 'react-bootstrap';
import QuoteModalForm from './QuoteForm';

const Features: React.FC = () => {
    return (
        <section className="features" id='services'>
        <Container>
          <h2 className="section-title text-center">Our Services</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="feature">
                <h3 className="feature-title">Professional Car Shipping</h3>
                <p className="feature-description">
                  We provide reliable and professional car shipping services to
                  ensure your vehicle reaches its destination safely.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature">
                <h3 className="feature-title">Fast Delivery</h3>
                <p className="feature-description">
                  We prioritize fast delivery to get your vehicle to you in a
                  timely manner, without compromising on safety.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature">
                <h3 className="feature-title">Freight Shipping</h3>
                <p className="feature-description">
                  Let us handle your freight logistics. No load is too small or too big. Safe pick up & scheduled delivery!
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature">
                <h3 className="feature-title">Competitive Pricing</h3>
                <p className="feature-description">
                  Our services are competitively priced to provide you with
                  affordable Car/Freight shipping options.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
          <QuoteModalForm/>
          </div>
        </Container>
        </section>
    );
};

export default Features;