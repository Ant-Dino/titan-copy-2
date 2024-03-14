import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Assuming UserInfo is another service or component that's been adapted for React
// and provides a getUser method that returns a promise.
const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    ActivityRight: '',
    CanManageTEQ: false,
    CanManageBEQ: false,
    CanAccessReq: false,
  });
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await UserInfo.getUser();
        setUserInfo({
          ActivityRight: response.ActivityRight,
          CanManageTEQ: response.CanManageTEQ,
          CanManageBEQ: response.CanManageBEQ,
          CanAccessReq: response.CanAccessReq,
        });
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };
    fetchUserInfo();
  }, []);
  return userInfo;
};
const Dashboard = () => {
  const {
    ActivityRight,
    CanManageTEQ,
    CanManageBEQ,
    CanAccessReq,
  } = useUserInfo();
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const loadBEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(response.data);
    } catch (error) {
      console.error('Failed to fetch BEQ exceptions:', error);
    }
  };
  const loadTEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(response.data);
    } catch (error) {
      console.error('Failed to fetch TEQ exceptions:', error);
    }
  };
  useEffect(() => {
    if (CanManageBEQ) {
      loadBEQExceptions();
    }
    if (CanManageTEQ) {
      loadTEQExceptions();
    }
    // Intervals replaced with useEffect cleanup for unmount
    const teqInterval = setInterval(loadTEQExceptions, 900000);
    const beqInterval = setInterval(loadBEQExceptions, 900000);
    return () => {
      clearInterval(teqInterval);
      clearInterval(beqInterval);
    };
  }, [CanManageBEQ, CanManageTEQ]);
  const hasAccess = ['Admin', 'SuperAdmin'].includes(ActivityRight);
  const isUser = ['Admin', 'SuperAdmin', 'User'].includes(ActivityRight);
  const hasBEQAccess = CanManageBEQ;
  const hasTEQAccess = CanManageTEQ;
  return (
    <div>
      {/* Dashboard UI elements go here */}
    </div>
  );
};
export default Dashboard;