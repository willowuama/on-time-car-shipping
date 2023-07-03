import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QuoteModalForm from './QuoteForm';

const Reasons: React.FC = () => {
    return (
        <section className="reason-section">
        <Container>
            <h2 className="section-title text-center">
                Reasons to Ship Your Vehicle
            </h2>
                <div className='text-center'>
                    <p className='reasons-tagline'>Let us handle all the logistical hastles while you focus on the other important things!</p>
                </div>
            <div className='reasons-description'>
            <Row>
                <Col xs={12} md={6} className='text-center'>
                    <p className='reason-text'>Relocation</p>
                </Col>
                <Col xs={12} md={6} className='text-center'>
                    <p className='reason-text'>Online Car Purchase</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} className='text-center'>
                    <p className='reason-text'>Military Moves</p>
                </Col>
                <Col xs={12} md={6} className='text-center'>
                    <p className='reason-text'>Vacation</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} className='text-center'>
                    <p className='reason-text'>Perennial Auto Shows</p>
                </Col>
                <Col xs={12} md={6} className='text-center'>
                    <p className='reason-text'>Back to School</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} className='text-center'>
                    <p className='reason-text'>Gifted Auto</p>
                </Col>
                <Col xs={12} md={6} className='text-center'>
                    <p className='reason-text'>Car Dealers</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} className='text-center'>
                    <p className='reason-text'>Auto Auctions</p>
                </Col>
            </Row>
            </div>
            <div className="text-center mt-5">
          <QuoteModalForm></QuoteModalForm>
          </div>    
        </Container>
      </section>
    );
};

export default Reasons;