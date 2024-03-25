import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [beqExceptions, setBeqExceptions] = useState([]);
  const [teqExceptions, setTeqExceptions] = useState([]);
  const [graphicalTeqExceptions, setGraphicalTeqExceptions] = useState([]);
  const [graphicalBeqExceptions, setGraphicalBeqExceptions] = useState([]);
  const baseURL = ''; // Set your base URL here

  useEffect(() => {
    loadBEQExceptions();
    loadTEQExceptions();
    loadGraphicalTEQException();
    loadGraphicalBEQException();
  }, []);

  const loadBEQExceptions = async () => {
    const response = await axios.get(`${baseURL}/Dashboard/BEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    });
    setBeqExceptions(response.data);
  };

  const loadTEQExceptions = async () => {
    const response = await axios.get(`${baseURL}/Dashboard/TEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    });
    setTeqExceptions(response.data);
  };

  const loadGraphicalTEQException = async () => {
    const response = await axios.get(`${baseURL}/Dashboard/GraphicalTEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    });
    setGraphicalTeqExceptions(response.data);
  };

  const loadGraphicalBEQException = async () => {
    const response = await axios.get(`${baseURL}/Dashboard/GraphicalBEQException/`, {
      headers: {
        'Content-Type': 'application/json',
        // Any other headers
      },
    });
    setGraphicalBeqExceptions(response.data);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Render your data here */}
    </div>
  );
};

export default Dashboard;