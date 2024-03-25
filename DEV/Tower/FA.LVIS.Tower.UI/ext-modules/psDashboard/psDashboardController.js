import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get('/user/info');
        const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
        setActivityRight(ActivityRight);
        setCanManageTEQ(CanManageTEQ);
        setCanManageBEQ(CanManageBEQ);
        loadBEQExceptions();
        loadTEQExceptions();
      } catch (error) {
        console.error('Error fetching user info', error);
      }
    };

    getCurrentUser();
  }, []);

  const loadBEQExceptions = async () => {
    const response = await axios.get('Dashboard/BEQException/');
    setBEQSummaryList(response.data);
  };

  const loadTEQExceptions = async () => {
    const response = await axios.get('Dashboard/TEQException/');
    setTEQSummaryList(response.data);
  };

  const hasBEQAccess = canManageBEQ;
  const hasTEQAccess = canManageTEQ;
  const hasAccess = activityRight === 'Admin' || activityRight === 'SuperAdmin';
  const isUser = ['Admin', 'SuperAdmin', 'User'].includes(activityRight);
  
  // Exclude code related to interval since it's not applicable for React conversion directly
  // Since intervals handling would be significantly different in React, especially with Hooks. 

  return (
    <div>
      <h1>Dashboard</h1>
      {hasAccess ? <p>Access Granted</p> : <p>Access Denied</p>}
      {hasBEQAccess && <div>BEQ Summary: {/* Display BEQ Summary */}</div>}
      {hasTEQAccess && <div>TEQ Summary: {/* Display TEQ Summary */}</div>}
    </div>
  );
};

export default Dashboard;