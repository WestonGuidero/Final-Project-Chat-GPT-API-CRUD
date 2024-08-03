import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Nav className="flex-column bg-light p-3" style={{ height: '100vh' }}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/RandomDog">Random Dog</Nav.Link>
        </Nav>
    );
};

export default Sidebar;
