import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
        <Container>
          <p className="text-center">
            &copy; OnTime Car Shipping LLC. | MC#15357421 | Phone: 877-317-3139
          </p>
        </Container>
      </footer>
    );
};

export default Footer;