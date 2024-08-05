import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HouseData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://zillow-base1.p.rapidapi.com/WebAPIs/zillow/search',
                params: {
                    location: 'Brownsville, TX',
                    page: '1',
                    status_type: 'ForSale',
                    sort_by: 'Homes_For_You',
                    listing_type: 'Cat1',
                    days_on_zillow: '1_day'
                },
                headers: {
                    'x-rapidapi-key': process.env.REACT_APP_ZILLOW_API_KEY,
                    'x-rapidapi-host': process.env.REACT_APP_ZILLOW_API_HOST
                }
            };

            try {
                const response = await axios.request(options);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>House Data</h1>
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default HouseData;
