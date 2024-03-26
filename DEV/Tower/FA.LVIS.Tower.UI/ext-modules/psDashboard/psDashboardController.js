import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Assuming UserInfo is a service that's been adapted for use in React
// OR
// A similar API request function is used in place of UserInfo.getUser()
import { getUserInfo } from '../services/UserInfo';
const DashboardComponent = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await getUserInfo();
        setCurrentUser(response);
        setActivityRight(response.ActivityRight);
        setCanManageTEQ(response.CanManageTEQ);
        setCanManageBEQ(response.CanManageBEQ);
        setCanManageAccessReq(response.CanAccessReq);
        loadBEQExceptions();
        loadTEQExceptions();
        setHasAccess(response.activityright === 'Admin' || response.activityright === 'SuperAdmin');
        setIsUser(!(response.activityright !== 'Admin' && response.activityright !== 'SuperAdmin' && response.activityright !== 'User'));
        setHasBEQAccess(response.CanManageBEQ);
        setHasTEQAccess(response.CanManageTEQ);
      } catch (error) {
        console.error("Failed to fetch current user info", error);
      }
    };
    getCurrentUser();
  }, []);
  const loadBEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(response.data);
    } catch (error) {
      console.error("Failed to load BEQ exceptions", error);
    }
  };
  const loadTEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(response.data);
    } catch (error) {
      console.error("Failed to load TEQ exceptions", error);
    }
  };
  // Other functions and effects would be implemented similarly
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Dashboard UI elements go here */}
    </div>
  );
};
export default DashboardComponent;