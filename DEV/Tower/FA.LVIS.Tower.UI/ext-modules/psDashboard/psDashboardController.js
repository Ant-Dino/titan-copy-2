import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userActivityRight, setUserActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  // Simulates UserInfo.getUser(). Replaced with a direct call for simplicity. Adapt as needed.
  const getCurrentUser = async () => {
    try {
      const response = await axios.get('/path/to/user/info'); // Replace with actual path to user info
      const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
      setUserActivityRight(ActivityRight);
      setCanManageTEQ(CanManageTEQ);
      setCanManageBEQ(CanManageBEQ);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error(error);
    }
  };

  const loadBEQExceptions = async () => {
    const response = await axios.get('Dashboard/BEQException/');
    setBEQSummaryList(response.data);
  };

  const loadTEQExceptions = async () => {
    const response = await axios.get('Dashboard/TEQException/');
    setTEQSummaryList(response.data);
  };

  useEffect(() => {
    getCurrentUser();
    // You can add intervals here if needed using setInterval and clear them using clearInterval in the cleanup function.
  }, []);

  return (
    <div>
      {/* Render UI based on the state here */}
    </div>
  );
};

export default Dashboard;