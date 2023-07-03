import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const emailBody = `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Shipped with us before?: ${formData.subject}
      Message: ${formData.message}
    `;


    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID_CONTACT;
    const userID = import.meta.env.VITE_USER_ID;

    const emailParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      to_name: 'support@ontimecarshipping.com',
      message: emailBody,
    };

    console.log("Attempting to send Email")

    emailjs.send(serviceID, templateID, emailParams, userID)
      .then((response) => {
        console.log('Email sent:', response.text);
        // Handle the successful email sending (e.g., show a success message to the user)
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        // Handle the error (e.g., show an error message to the user)
      });

      // Reset form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    console.log("Form Data Reset")

  };

  return (
    <section className="contact" id="contact">
        <Container>
          <h2 className="section-title text-center">Contact Us</h2>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="first-name">Name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="form-control"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        name="firstName"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="last-name">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        name="lastName"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                      type="email"
                      id="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                       />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                      type="phone"
                      id="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      name="phone" 
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <div className="form-group">
                      <label htmlFor="subject">Shipped with us before?</label>
                      <div className="select-wrapper">
                        <select 
                        id="subject"
                        className="form-control form-select"
                        value={formData.subject}
                        onChange={handleChange}
                        name="subject"
                        >
                          <option value="option"></option>
                          <option value="option1">Yes</option>
                          <option value="option2">Not Yet</option>
                          <option value="option3">Broker</option>
                          <option value="option4">Past Client</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                  id="message"
                  rows={4}
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                ></textarea>
                </div>
                <Button variant="primary" type="submit" className="btn-warning cta-btn">
                  Send Message
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default Contact;
