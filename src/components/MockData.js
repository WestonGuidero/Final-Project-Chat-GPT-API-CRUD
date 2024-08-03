// src/components/MockData.js
import React, { useState, useEffect } from 'react';
import { fetchResources, createResource, updateResource, deleteResource } from '../firestoreService';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const MockData = () => {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({ title: '', body: '', source: '', date: '' });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchResources();
      setResources(data);
    };
    fetchData();
  }, []);

  const handleCreate = async () => {
    const data = await createResource(newResource);
    setResources([...resources, data]);
    setNewResource({ title: '', body: '', source: '', date: '' });
  };

  const handleUpdate = async (id) => {
    const updatedData = { ...newResource, title: prompt('New title:', newResource.title) };
    const data = await updateResource(id, updatedData);
    setResources(resources.map((resource) => (resource.id === id ? data : resource)));
  };

  const handleDelete = async (id) => {
    await deleteResource(id);
    setResources(resources.filter((resource) => resource.id !== id));
  };

  return (
    <Container className="my-4">
      <h1>Mock Data CRUD</h1>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={newResource.title}
            onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control
            type="text"
            value={newResource.body}
            onChange={(e) => setNewResource({ ...newResource, body: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="source">
          <Form.Label>Source</Form.Label>
          <Form.Control
            type="text"
            value={newResource.source}
            onChange={(e) => setNewResource({ ...newResource, source: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="text"
            value={newResource.date}
            onChange={(e) => setNewResource({ ...newResource, date: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleCreate}>
          Create
        </Button>
      </Form>
      <Row className="mt-4">
        {resources.map((resource) => (
          <Col key={resource.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{resource.title}</Card.Title>
                <Card.Text>{resource.body}</Card.Text>
                <Card.Text>Source: {resource.source}</Card.Text>
                <Card.Text>Date: {resource.date}</Card.Text>
                <Button variant="warning" onClick={() => handleUpdate(resource.id)}>
                  Update
                </Button>
                <Button variant="danger" onClick={() => handleDelete(resource.id)} className="ml-2">
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MockData;
