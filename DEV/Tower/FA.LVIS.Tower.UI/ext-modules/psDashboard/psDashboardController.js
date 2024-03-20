import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming axios is used for HTTP requests
const Dashboard = () => {
  const [userActivityRight, setUserActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);

  const hasAccess = userActivityRight === 'Admin' || userActivityRight === 'SuperAdmin';
  const isUser = ['Admin', 'SuperAdmin', 'User'].includes(userActivityRight);
  const hasBEQAccess = canManageBEQ;
  const hasTEQAccess = canManageTEQ;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data: response } = await axios.get('UserInfo/getUser');
        setUserActivityRight(response.ActivityRight);
        setCanManageTEQ(response.CanManageTEQ);
        setCanManageBEQ(response.CanManageBEQ);
        loadBEQExceptions();
        loadTEQExceptions();
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };
    fetchUserInfo();
  }, []);

  const loadBEQExceptions = async () => {
    try {
      const { data } = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(data);
    } catch (error) {
      console.error('Failed to fetch BEQ Exceptions:', error);
    }
  };

  const loadTEQExceptions = async () => {
    try {
      const { data } = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(data);
    } catch (error) {
      console.error('Failed to fetch TEQ Exceptions:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {hasAccess && <p>You have Admin/SuperAdmin Access</p>}
      {hasBEQAccess && <p>You have BEQ Management Access</p>}
      {hasTEQAccess && <p>You have TEQ Management Access</p>}
      {/* Render BEQ and TEQ summary lists here */}
    </div>
  );
};

export default Dashboard;