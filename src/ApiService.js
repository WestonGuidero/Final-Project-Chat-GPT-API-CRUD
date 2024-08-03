import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://chatgpt-42.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': 'f86cdef181mshb29a26d30ff0418p1d3e31jsn3186742bc9fe',
    'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
    'Content-Type': 'application/json',
  },
});

export const fetchChatGPTResponse = async (message) => {
  const payload = {
    messages: [
      {
        role: 'user',
        content: message,
      },
    ],
    system_prompt: '',
    temperature: 0.9,
    top_k: 5,
    top_p: 0.9,
    max_tokens: 256,
    web_access: false,
  };

  try {
    const response = await apiClient.post('/conversationgpt4-2', payload);
    return response.data;
  } catch (error) {
    console.error('Error fetching ChatGPT response:', error);
    throw error;
  }
};
