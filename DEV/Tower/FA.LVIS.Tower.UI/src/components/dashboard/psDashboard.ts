import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const TEQLineChart: React.FC = () => {
  const currentUser = useSelector((state: any) => state.currentUser); // Adjust the state shape as necessary
  const [graphData, setGraphData] = useState<any[]>([]); // Type according to actual data structure

  useEffect(() => {
    if (currentUser) {
      loadTEQException();
}
}, [currentUser]);

  const loadTEQException = async () => {
    try {
      const response = await axios.get('URL_TO_GET_TEQ_EXCEPTION'); // Adjust URL as necessary
      setGraphData(response.data);
} catch (error) {
      console.error(error);
}
};

// Render logic for chart goes here

  return <div>{/* Chart rendering based on graphData */}</div>;
};

export default TEQLineChart;