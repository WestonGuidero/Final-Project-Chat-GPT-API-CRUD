import React, { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSendMessage = async () => {
    const url = 'https://chatgpt-42.p.rapidapi.com/gpt4';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        messages: [
          {
            role: 'user',
            content: message
          }
        ],
        web_access: false
      }
    };

    try {
      const response = await axios(url, options);
      setResponse(response.data.result);
    } catch (error) {
      setError('Error fetching response from ChatGPT');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>ChatGPT Interaction</h1>
      <div>
        <label>Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <div>
        <h2>Response:</h2>
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <p>{response}</p>
        )}
      </div>
    </div>
  );
};

export default ChatGPT;
