import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({ title, text }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
