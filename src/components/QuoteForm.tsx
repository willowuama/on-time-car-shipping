import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import "../btn.css";
import emailjs from 'emailjs-com';

interface FormData {
  startingZipCode: string;
  endingZipCode: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

const QuoteModalForm: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    startingZipCode: '',
    endingZipCode: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailBody = `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phoneNumber}
      Starting zipcode: ${formData.startingZipCode}
      Ending zipcode: ${formData.endingZipCode}
    `;

    const emailParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      to_name: 'support@ontimecarshipping.com',
      message: emailBody,
    };

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID_QUOTE;
    const userID = import.meta.env.VITE_USER_ID;

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
      startingZipCode: '',
      endingZipCode: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    });
    // Hide the modal
    toggleModal();
  };

  return (
    <>
      <Button variant="primary" size="lg" className='btn-warning cta-btn' onClick={toggleModal}>
        Get Your Free Quote
      </Button>
      <Modal show={showModal} onHide={toggleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Get Your Free Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="startingZipCode">
              <Form.Label>Starting Zip Code</Form.Label>
              <Form.Control
                type="text"
                name="startingZipCode"
                value={formData.startingZipCode}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="endingZipCode">
              <Form.Label>Ending Zip Code</Form.Label>
              <Form.Control
                type="text"
                name="endingZipCode"
                value={formData.endingZipCode}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={toggleModal}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default QuoteModalForm;
