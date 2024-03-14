import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ExampleComponent: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('URL'); // Replace 'URL' with your API endpoint
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError('An error occurred while fetching data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {/* Render your data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default ExampleComponent;