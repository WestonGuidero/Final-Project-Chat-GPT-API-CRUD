import React, { useEffect, useState } from 'react';

// Assuming you already have other code in this file, add the Reviews component here

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      const url = 'https://zillow56.p.rapidapi.com/lender/reviews?screenName=mortgagecapitalpartners';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        setError('Error fetching reviews');
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review.comment}</li>
        ))}
      </ul>
    </div>
  );
};



// Or if housedata.js is a larger component, you can integrate Reviews into the main export
const HouseData = () => {
  // Your existing house data code here

  return (
    <div>
      {/* Your existing house data rendering code here */}
      <Reviews />  {/* Include the Reviews component here */}
    </div>
  );
};

export default HouseData;
