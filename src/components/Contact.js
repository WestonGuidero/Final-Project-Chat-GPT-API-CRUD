import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import CardComponent from './CardComponent';

const Contact = () => {
    return (
        <Container fluid className="mt-5">
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col md={9}>
                    <CardComponent title="Contact Us" text="This is the Contact Page." />
                    <CardComponent title="Support" text="Reach out to us for support." />
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
