import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import CardComponent from './CardComponent';

const About = () => {
    return (
        <Container fluid className="mt-5">
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>
                <Col md={9}>
                    <CardComponent title="About Us" text="This is the About Page." />
                    <CardComponent title="Our Mission" text="To provide the best service possible." />
                </Col>
            </Row>
        </Container>
    );
};

export default About;
