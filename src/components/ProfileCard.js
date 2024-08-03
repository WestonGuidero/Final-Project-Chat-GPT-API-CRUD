import React from 'react';
import { Card } from 'react-bootstrap';

const ProfileCard = ({ name, email }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{email}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;
