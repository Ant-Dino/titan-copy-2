jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo'; // Assuming UserInfo is adapted for React

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  const getCurrentUser = async () => {
    try {
      const response = await UserInfo.getUser();
      setCurrentUser(response);
      setActivityRight(response.ActivityRight);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      setCanManageAccessReq(response.CanAccessReq);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error('Failed to fetch user info', error);
    }
  };

  useEffect(() => {
    getCurrentUser();
    const accessInterval = setInterval(() => {
      loadTEQExceptions();
      loadBEQExceptions();
    }, 900000); // Repeat every 15 minutes
    return () => clearInterval(accessInterval);
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
  }, [activityRight, canManageBEQ, canManageTEQ]);

  const loadBEQExceptions = () => {
    axios.get('Dashboard/BEQException/')
      .then(response => {
        setBEQSummaryList(response.data);
      })
      .catch(error => console.error('Failed to fetch BEQ exceptions', error));
  };

  const loadTEQExceptions = () => {
    axios.get('Dashboard/TEQException/')
      .then(response => {
        setTEQSummaryList(response.data);
      })
      .catch(error => console.error('Failed to fetch TEQ exceptions', error));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {/* UI components related to BEQ and TEQ can be rendered here using BEQSummaryList and TEQSummaryList */}
    </div>
  );
};

export default Dashboard;
