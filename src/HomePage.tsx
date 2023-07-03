import React from "react";
import { Container } from "react-bootstrap";
import "./HomePage.css";
import "./btn.css";
import QuoteModalForm from './components/QuoteForm';
import ShippingSteps from "./components/ShippingSteps";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Reasons from "./components/Reasons";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* NavBar Section */}
      <NavBar></NavBar>
      {/* Hero Section */}
      <Hero></Hero>

      {/* About Section */}
      <About></About>

      {/* Features Section */}
        <Features></Features>

      {/* Reasons to ship Section */}
      <Reasons></Reasons>

      {/* Steps Section
      <section className="steps">
        <Container>
          <h2 className="section-title text-center">
            How to Ship Your Vehicle
          </h2>
          <div className="row">
            <div className="col-md-3">
              <div className="steps">
                <div className="steps-inner">
                  <h3 className="steps-title">Step 1</h3>
                  <p className="steps-description">
                    Fill out our quote request form and we’ll send you a cost
                    estimate for your move. You get to choose if you want an
                    email, text, or a good ol’ fashioned call – whatever floats
                    your boat!
                  </p>
                </div>
              </div>
              <div className="steps-line steps-line-one"></div>
            </div>
            <div className="col-md-3">
              <div className="steps">
                <div className="steps-inner">
                  <h3 className="steps-title">Step 2</h3>
                  <p className="steps-description">
                    Confirm your move! Let’s make it official and turn your
                    quote into an order! Just click the link we send your way.
                    We’ll hammer the nitty gritty details and get your vehicle
                    on a truck in no time.
                  </p>
                </div>
              </div>
              <div className="steps-line steps-line-two"></div>
            </div>
            <div className="col-md-3">
              <div className="steps">
                <div className="steps-inner">
                  <h3 className="steps-title">Step 3</h3>
                  <p className="steps-description">
                    Your pick-up day and carrier’s name will be sent to you in
                    due time, so sit back, relax, and wait for the good news to
                    roll in. We suggest clearing your schedule for pick up day
                    so we don’t miss the driver.
                  </p>
                </div>
              </div>
              <div className="steps-line steps-line-three"></div>
            </div>
            <div className="col-md-3">
              <div className="steps">
                <div className="steps-inner">
                  <h3 className="steps-title">Step 4</h3>
                  <p className="steps-description">
                    We’ll give you a heads up when your vehicle is set to
                    arrive. We need you to be there all day so we don’t miss the
                    hauler. When your vehicle arrives, give it a good once-over.
                    If everything checks out, pay the driver and you’ll be on
                    your way.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
          <QuoteModalForm/>
          </div>
        </Container>
      </section> */}

      {/* Steps section 2 */}
        <ShippingSteps></ShippingSteps>

      {/* Testimonials Section */}
      {/*       
        <Testimonial></Testimonial>
      */}

      {/* FAQ Section */}
        <FAQ></FAQ>

      {/* Contact Section */}
      <Contact></Contact>

      {/* Footer Section */}
      <Footer></Footer>

    </div>
  );
};

export default HomePage;
