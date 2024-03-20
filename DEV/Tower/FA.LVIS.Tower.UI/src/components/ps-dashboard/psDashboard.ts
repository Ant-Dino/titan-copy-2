import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [canAccessReq, setCanAccessReq] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true); // Default to true for general users
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      const response = await axios.get('/user/info'); // Assuming this endpoint exists
      const { ActivityRight, CanManageTEQ, CanManageBEQ, CanAccessReq } = response.data;
      setCurrentUser(response.data);
      setActivityRight(ActivityRight);
      setCanManageTEQ(CanManageTEQ);
      setCanManageBEQ(CanManageBEQ);
      setCanAccessReq(CanAccessReq);

      // Access control logic based on the role
      setHasAccess(['Admin', 'SuperAdmin'].includes(ActivityRight));
      setIsUser(!['Admin', 'SuperAdmin', 'User'].includes(ActivityRight));
      setHasBEQAccess(CanManageBEQ);
      setHasTEQAccess(CanManageTEQ);

      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error('Failed to fetch user info', error);
    }
  };

  const loadBEQExceptions = async () => {
    const response = await axios.get('/Dashboard/BEQException/');
    setBEQSummaryList(response.data);
  };

  const loadTEQExceptions = async () => {
    const response = await axios.get('/Dashboard/TEQException/');
    setTEQSummaryList(response.data);
  };

  // This code omits the interval reloads for simplicity, but they can be implemented with useEffect as well

  // Assuming graphical components are present. Both TEQLineChart and BEQLineChart would need 
  // conversion similar to the Dashboard component, focusing on useEffect for data fetching 
  // and useState for state management.

  return (
    <div>
      <h1>Dashboard</h1>
      {/* UI Components rendering based on state */}
      {canManageBEQ && <div>BEQ Management Panel</div>}
      {canManageTEQ && <div>TEQ Management Panel</div>}
      {/* Display summary lists, etc. */}
    </div>
  );
};

export default Dashboard;