import React, { useState, useEffect } from 'react';
import axios from 'axios';
const MyComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('YOUR_API_ENDPOINT');
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      {!data ? (
        <div>No data available</div>
      ) : (
        <>
          {/* Iterate through your data object */}
          {data.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default MyComponent;