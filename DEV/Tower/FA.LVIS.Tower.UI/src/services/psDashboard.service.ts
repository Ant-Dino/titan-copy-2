import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [beqExceptions, setBeqExceptions] = useState([]);
  const [teqExceptions, setTeqExceptions] = useState([]);
  const [graphicalTeqExceptions, setGraphicalTeqExceptions] = useState([]);
  const [graphicalBeqExceptions, setGraphicalBeqExceptions] = useState([]);
  const baseURL = ''; // Set the base URL according to the environment
  
  useEffect(() => {
    const fetchData = async () => {
      const beqExceptionResponse = await axios.get(`${baseURL}/Dashboard/BEQException/`, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by the API
        },
      });

      const teqExceptionResponse = await axios.get(`${baseURL}/Dashboard/TEQException/`, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by the API
        },
      });

      const graphicalTeqExceptionResponse = await axios.get(`${baseURL}/Dashboard/GraphicalTEQException/`, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by the API
        },
      });

      const graphicalBeqExceptionResponse = await axios.get(`${baseURL}/Dashboard/GraphicalBEQException/`, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers required by the API
        },
      });

      setBeqExceptions(beqExceptionResponse.data);
      setTeqExceptions(teqExceptionResponse.data);
      setGraphicalTeqExceptions(graphicalTeqExceptionResponse.data);
      setGraphicalBeqExceptions(graphicalBeqExceptionResponse.data);
    };

    fetchData();
  }, [baseURL]);

  return (
    <div>
      {/* Render dashboard data */}
    </div>
  );
};

export default Dashboard;