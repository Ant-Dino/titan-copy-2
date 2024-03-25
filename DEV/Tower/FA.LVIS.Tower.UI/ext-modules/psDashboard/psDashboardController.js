import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
  const [activityRight, setActivityRight] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const getCurrentUser = async () => {
    try {
      const response = await axios.get('/user/info'); // Adjust API endpoint as necessary
      setCurrentUser(response.data);
      setActivityRight(response.data.ActivityRight);
      setCanManageTEQ(response.data.CanManageTEQ);
      setCanManageBEQ(response.data.CanManageBEQ);
      setHasAccess(response.data.ActivityRight === 'Admin' || response.data.ActivityRight === 'SuperAdmin');
      setIsUser(!['Admin', 'SuperAdmin', 'User'].includes(response.data.ActivityRight));
      setHasTEQAccess(response.data.CanManageTEQ);
      setHasBEQAccess(response.data.CanManageBEQ);
      loadTEQExceptions();
      loadBEQExceptions();
    } catch (error) {
      console.error('Failed to fetch user', error);
    }
  };
  const loadTEQExceptions = async () => {
    try {
      const { data } = await axios.get('/Dashboard/TEQException/'); // Adjust API endpoint as necessary
      setTEQSummaryList(data);
    } catch (error) {
      console.error('Failed to load TEQ exceptions', error);
    }
  };
  const loadBEQExceptions = async () => {
    try {
      const { data } = await axios.get('/Dashboard/BEQException/'); // Adjust API endpoint as necessary
      setBEQSummaryList(data);
    } catch (error) {
      console.error('Failed to load BEQ exceptions', error);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  // Simulation of $interval for refreshing the TEQ and BEQ exceptions every 15 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      loadTEQExceptions();
      loadBEQExceptions();
    }, 900000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h2>Dashboard</h2>
      {/* UI elements and logic to display data goes here */}
    </div>
  );
};
export default Dashboard;