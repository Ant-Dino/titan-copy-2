import React, { useState, useEffect } from 'react';
import axios from 'axios';
import psDashboardTemplate from './psDashboardTemplate'; // Assuming the template is exported as a React component

const Dashboard: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>({}); // Using any for simplicity, define a proper type for production
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(true);
  const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
  const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);
  const [BEQSummaryList, setBEQSummaryList] = useState<any[]>([]);
  const [TEQSummaryList, setTEQSummaryList] = useState<any[]>([]);

  useEffect(() => {
    getUser();
    // Assuming you want to reload TEQ and BEQ exceptions every 15 minutes
    const intervalTEQ = setInterval(() => loadTEQExceptions(), 900000);
    const intervalBEQ = setInterval(() => loadBEQExceptions(), 900000);
    return () => {
      clearInterval(intervalTEQ);
      clearInterval(intervalBEQ);
    };
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get('path/to/user/info'); // Adjust the URL as needed
      const user = response.data;
      setCurrentUser(user);
      setHasAccess(user.activityright === 'Admin' || user.activityright === 'SuperAdmin');
      setIsUser(user.activityright === 'User' || user.activityright === 'Admin' || user.activityright === 'SuperAdmin');
      setHasBEQAccess(user.canmanagebeq);
      setHasTEQAccess(user.canmanageteq);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error('Failed to fetch user data', error);
    }
  };

  const loadBEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(response.data);
    } catch (error) {
      console.error('Failed to fetch BEQ Exceptions', error);
    }
  };

  const loadTEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(response.data);
    } catch (error) {
      console.error('Failed to fetch TEQ Exceptions', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <psDashboardTemplate
        userData={currentUser}
        BEQSummaryList={BEQSummaryList}
        TEQSummaryList={TEQSummaryList}
      />
    </div>
  );
};

export default Dashboard;