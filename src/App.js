// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import RandomDog from './components/RandomDog';
import HouseData from './components/HouseData';
import ChatGPT from './components/ChatGPT';
import MockData from './components/MockData';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/random-dog" element={<RandomDog />} />
        <Route path="/house-data" element={<HouseData />} />
        <Route path="/mock-data" element={<MockData />} />
        <Route path="/chatgpt" element={<ChatGPT />} />
      </Routes>
    </Router>
  );
};

export default App;
