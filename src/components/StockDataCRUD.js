import React, { useEffect, useState } from 'react';
import { fetchStockDataWithCRUD, createStockEntry, updateStockEntry, deleteStockEntry } from '../ApiService';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';

const StockDataCRUD = () => {
  const [stockData, setStockData] = useState(null);
  const [symbol, setSymbol] = useState('AAPL:NASDAQ');
  const [period, setPeriod] = useState('1D');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStockDataWithCRUD(symbol, period, language);
        setStockData(data);
        console.log('Fetched stock data:', data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, [symbol, period, language]);

  const handleCreate = async () => {
    try {
      const data = await createStockEntry(symbol, { some: 'data' });
      console.log('Created:', data);
    } catch (error) {
      console.error('Error creating stock entry:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const data = await updateStockEntry(symbol, id, { updated: 'data' });
      console.log('Updated:', data);
    } catch (error) {
      console.error('Error updating stock entry:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const data = await deleteStockEntry(symbol, id);
      console.log('Deleted:', data);
    } catch (error) {
      console.error('Error deleting stock entry:', error);
    }
  };

  return (
    <Container className="my-4">
      <h1>Stock Data CRUD</h1>
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Group controlId="symbol">
              <Form.Label>Symbol</Form.Label>
              <Form.Control type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="period">
              <Form.Label>Period</Form.Label>
              <Form.Control type="text" value={period} onChange={(e) => setPeriod(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="language">
              <Form.Label>Language</Form.Label>
              <Form.Control type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={4} className="d-flex align-items-end">
            <Button variant="primary" onClick={() => { setSymbol(symbol); setPeriod(period); setLanguage(language); }}>
              Fetch Data
            </Button>
          </Col>
        </Row>
      </Form>
      {stockData && stockData.data ? (
        <Row>
          <Col md={12}>
            <Card>
              <Card.Body>
                <Card.Title>{symbol} - {period}</Card.Title>
                <pre>{JSON.stringify(stockData.data, null, 2)}</pre>
                {/* Display news items if available */}
                {stockData.data.news && stockData.data.news.map((newsItem, index) => (
                  <Card key={index} className="mb-4">
                    {newsItem.article_photo_url && (
                      <Card.Img variant="top" src={newsItem.article_photo_url} alt="News Image" />
                    )}
                    <Card.Body>
                      <Card.Title>{newsItem.article_title}</Card.Title>
                      <Card.Text>
                        <a href={newsItem.article_url} target="_blank" rel="noopener noreferrer">
                          Read more
                        </a>
                      </Card.Text>
                      <Card.Footer>
                        <small className="text-muted">Source: {newsItem.source}</small>
                        <br />
                        <small className="text-muted">Posted on: {newsItem.post_time_utc}</small>
                      </Card.Footer>
                      <Button variant="warning" onClick={() => handleUpdate(newsItem.id)}>Update</Button>
                      <Button variant="danger" onClick={() => handleDelete(newsItem.id)}>Delete</Button>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <p>Loading...</p>
      )}
      <Button variant="success" onClick={handleCreate}>Create New Entry</Button>
    </Container>
  );
};

export default StockDataCRUD;
