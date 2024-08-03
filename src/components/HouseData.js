// src/components/HouseData.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';

const HouseData = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const url = 'https://zillow56.p.rapidapi.com/lender/reviews?screenName=mortgagecapitalpartners';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': 'zillow56.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.get(url, options);
        setReviews(response.data.reviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <h2>{error}</h2>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <h1>Zillow Lender Reviews</h1>
      <Row>
        {reviews.map((review, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{review.reviewerName}</Card.Title>
                <Card.Text>{review.reviewText}</Card.Text>
                <Card.Text>Rating: {review.rating}</Card.Text>
                <Card.Text>Date: {new Date(review.reviewDate).toLocaleDateString()}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HouseData;
