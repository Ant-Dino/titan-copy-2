import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({});
  const [cookies, setCookie] = useCookies(['userInfo']);
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    const { CanManageBEQ, CanManageTEQ, ActivityRight } = userInfo;
    setHasBEQAccess(CanManageBEQ || false);
    setHasTEQAccess(CanManageTEQ || false);
    setHasAccess(ActivityRight === 'Admin' || ActivityRight === 'SuperAdmin');
    setIsUser(!['Admin', 'SuperAdmin', 'User'].includes(ActivityRight));
  }, [userInfo]);

  const getCurrentUser = async () => {
    try {
      const response = await axios.get('/path/to/UserInfo/getUser'); // Adjust path accordingly
      setUserInfo(response.data);
      // Assuming response structure aligns. Adjust as necessary.
      const { CanManageBEQ, CanManageTEQ } = response.data;
      if (CanManageBEQ) loadBEQExceptions();
      if (CanManageTEQ) loadTEQExceptions();
    } catch (error) {
      console.error('Failed to get user info:', error);
    }
  };

  const loadBEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(response.data);
    } catch (error) {
      console.error('Failed to load BEQ Exceptions:', error);
    }
  };

  const loadTEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(response.data);
    } catch (error) {
      console.error('Failed to load TEQ Exceptions:', error);
    }
  };

  // Implement similar useEffect hooks for reloading exceptions every 15 minutes
  // For this example, it is omitted for brevity.

  return (
    <div>
      {/* Render UI based on state */}
      Dashboard Component
      {hasAccess && <div>Access Granted</div>}
      {isUser && <div>User Identified</div>}
      {/* Further UI elements based on state */}
    </div>
  );
};

export default Dashboard;