import React, { useState, useEffect } from 'react';
import './RandomDog.css';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleted, setDeleted] = useState(false);

  const fetchDogImage = async () => {
    setLoading(true);
    setError(null);
    setDeleted(false); // Reset the deleted state
    try {
      const response = await fetch('https://random.dog/woof.json');
      const data = await response.json();
      if (data.url && (data.url.endsWith('.jpg') || data.url.endsWith('.png'))) {
        setDogImage(data.url);
      } else {
        // Fetch another dog image if the URL is invalid
        fetchDogImage();
      }
    } catch (error) {
      // Try fetching another dog image if an error occurs
      fetchDogImage();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  const handleFetchAnotherDog = () => {
    fetchDogImage();
  };

  const handleDeleteDog = () => {
    setDogImage(null);
    setDeleted(true); // Set the deleted state
  };

  return (
    <div className="App">
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1>Dog Image</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {dogImage && !loading && !deleted && (
          <>
            <img 
              src={dogImage} 
              alt="Dog" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '80vh', 
                display: 'block', 
                margin: '0 auto' 
              }} 
            />
            <button onClick={handleDeleteDog} style={{ display: 'block', margin: '10px auto' }}>
              Why would you delete the dog picture? :(
            </button>
          </>
        )}
        {deleted && (
          <p style={{ color: 'blue' }}>
            You did the unspeakable... You deleted the dog picture :'( Don't worry they're all stored in a server via this API request, so jokes on you! ;)
          </p>
        )}
        <button onClick={handleFetchAnotherDog} style={{ display: 'block', margin: '10px auto' }}>
          Fetch Another Dog
        </button>
      </div>
    </div>
  );
}

export default App;
