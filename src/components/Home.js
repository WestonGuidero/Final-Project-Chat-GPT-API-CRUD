// src/components/Home.js
import React, { useState } from 'react';
import Button from './Button';  // If Button.js is in the same directory
import Greeting from './Greeting';  // If Greeting.js is in the same directory

const Home = () => {
  const [message, setMessage] = useState('');

  const handleButtonClick = (buttonType) => {
    if (buttonType === 'button1') {
      setMessage('You clicked Button 1!');
    } else if (buttonType === 'button2') {
      setMessage('You clicked Button 2!');
    }
  };

  return (
    <div>
      <Greeting />
      <Button onClick={() => handleButtonClick('button1')} text="Button 1" />
      <Button onClick={() => handleButtonClick('button2')} text="Button 2" />
      {message && <p>{message}</p>}
    </div>
  );
};

export default Home;
