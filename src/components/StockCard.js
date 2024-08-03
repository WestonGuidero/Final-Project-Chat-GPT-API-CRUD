// src/components/StockCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const StockCard = ({ stockData }) => {
  const price = stockData.price;
  const timestamp = new Date(stockData.timestamp).toLocaleString();

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>ETH-USD Price</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ${price}
          <br />
          <strong>Timestamp:</strong> {timestamp !== 'Invalid Date' ? timestamp : 'N/A'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StockCard;
