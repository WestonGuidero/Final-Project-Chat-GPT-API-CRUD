// src/components/Button.js
import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ onClick, text }) => {
  return (
    <BootstrapButton onClick={onClick} variant="primary" style={{ margin: '10px' }}>
      {text}
    </BootstrapButton>
  );
};

export default Button;
