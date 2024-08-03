// src/components/NewsCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NewsCard = ({ newsItem, handleUpdate, handleDelete }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{newsItem.title}</Card.Title>
        <Card.Text>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </Card.Text>
        <Card.Footer>
          <small className="text-muted">Source: {newsItem.body}</small>
          <br />
          <small className="text-muted">Posted on: {newsItem.id}</small>
        </Card.Footer>
        <Button variant="warning" onClick={() => handleUpdate(newsItem.id)}>Update</Button>
        <Button variant="danger" onClick={() => handleDelete(newsItem.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
