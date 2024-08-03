import React, { useState } from 'react';
import { fetchChatGPTResponse } from '../ApiService';

const ChatGPT = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSendMessage = async () => {
    try {
      const result = await fetchChatGPTResponse(message);
      setResponse(result.result); // Extracting the 'result' property
      setError('');
    } catch (error) {
      setError('Error fetching response from ChatGPT');
    }
  };

  return (
    <div>
      <h1>ChatGPT Interaction</h1>
      <label>Message</label>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <div>
          <p><strong>Response:</strong> {response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatGPT;
