import React from "react";
import "./HomePage.css";
import "./btn.css";
import ShippingSteps from "./components/ShippingSteps";
import Features from "./components/Features";
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
