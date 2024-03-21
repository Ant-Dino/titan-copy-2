import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from './services/UserInfo';
const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await UserInfo.getUser();
        setCurrentUser(response);
        setActivityRight(response.ActivityRight);
        setCanManageTEQ(response.CanManageTEQ);
        setCanManageBEQ(response.CanManageBEQ);
        loadBEQExceptions();
        loadTEQExceptions();
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };
    getCurrentUser();
  }, []);
  useEffect(() => {
    if (canManageBEQ) {
      setHasBEQAccess(true);
    }
    if (canManageTEQ) {
      setHasTEQAccess(true);
    }
    if (activityRight === 'Admin' || activityRight === 'SuperAdmin') {
      setHasAccess(true);
    }
    if (activityRight !== 'Admin' && activityRight !== 'SuperAdmin' && activityRight !== 'User') {
      setIsUser(false);
    }
  }, [activityRight, canManageBEQ, canManageTEQ]);
  const loadBEQExceptions = async () => {
    try {
      const { data } = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(data);
    } catch (error) {
      console.error('Failed to load BEQ exceptions:', error);
    }
  };
  const loadTEQExceptions = async () => {
    try {
      const { data } = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(data);
    } catch (error) {
      console.error('Failed to load TEQ exceptions:', error);
    }
  };
  // You can expand this component functionality as needed.
  return (
    <div>
      <h1>Dashboard</h1>
      {hasAccess && <p>Admin or SuperAdmin access rights detected.</p>}
      {!isUser && <p>User access rights not detected.</p>}
      {/* Render UI based on BEQ and TEQ summaries here */}
    </div>
  );
};
export default Dashboard;