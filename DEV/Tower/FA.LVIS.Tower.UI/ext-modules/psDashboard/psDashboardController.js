import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardReactComponent = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await UserInfo.getUser(); // Assuming UserInfo.getUser() is an axios-like promise
      setCurrentUser(response);
      setActivityRight(response.ActivityRight);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.log(error);
    }
  };

  const loadBEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadTEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  let hasAccess = activityRight === 'Admin' || activityRight === 'SuperAdmin';
  let isUser = ['Admin', 'SuperAdmin', 'User'].includes(activityRight);
  let hasBEQAccess = canManageBEQ;
  let hasTEQAccess = canManageTEQ;

  return (
    <div>
      <h2>Dashboard Component</h2>
      {/* Display content based on conditions or fetched data */}
      {hasBEQAccess && <div>Has BEQ Access</div>}
      {hasTEQAccess && <div>Has TEQ Access</div>}
      {hasAccess && <div>Has Admin or SuperAdmin Rights</div>}
    </div>
  );
};

export default DashboardReactComponent;