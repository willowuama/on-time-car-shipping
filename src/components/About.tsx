import React from 'react';
import { Container } from 'react-bootstrap';
import QuoteModalForm from './QuoteForm';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
        <Container>
          <h2 className="section-title text-center">About us</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-body">
                <p className="about-text">
                OnTime Car Shipping is your #1 trusted mode of moving/shipping your Car, Truck, Van, SUV, Motor Bike, etc... From one location to another
                anywhere, anytime within the continental USA and Canada. Our truckers/movers are trained, experienced, and reliable. We will ensure that
                your priced and precious possession is handeled with the utmost care and deligence. Deliveries are right on schedule!
                We value you, the customer, and your satisfaction is our #1 priority!
                </p>
              </div>
            </div>
            <div className="col-lg-6">
                <img src="/truck-freight.jpg" alt="" />
            </div>
          </div>
          <div className="text-center mt-5">
          <QuoteModalForm/>
          </div>
        </Container>
      </section>
  );
};

export default About;