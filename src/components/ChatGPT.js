import React, { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const options = {
            method: 'POST',
            url: `https://${process.env.REACT_APP_CHATGPT_API_HOST}/chatbotapi`,
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
                'x-rapidapi-host': process.env.REACT_APP_CHATGPT_API_HOST,
                'Content-Type': 'application/json'
            },
            data: {
                bot_id: 'OEXJ8qFp5E5AwRwymfPts90vrHnmr8yZgNE171101852010w2S0bCtN3THp448W7kDSfyTf3OpW5TUVefz',
                messages: [
                    {
                        role: 'user',
                        content: message
                    }
                ],
                user_id: '',
                temperature: 0.9,
                top_k: 5,
                top_p: 0.9,
                max_tokens: 256,
                model: 'gpt 3.5'
            }
        };

        try {
            const response = await axios.request(options);
            // Update to match the actual response structure
            if (response.data && response.data.result) {
                setResponse(response.data.result);
            } else {
                setResponse('Unexpected response structure');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponse('Error fetching response from ChatGPT');
        }
    };

    return (
        <div>
            <h1>ChatGPT Interaction</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Message:
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <button type="submit">Send</button>
            </form>
            <h2>Response:</h2>
            <p>{response}</p>
        </div>
    );
};

export default ChatGPT;
