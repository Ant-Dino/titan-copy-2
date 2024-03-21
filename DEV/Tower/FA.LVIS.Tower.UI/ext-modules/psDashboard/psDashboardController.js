import React, { useState, useEffect } from 'react';
import { getUser, getBEQException, getTEQException, getGraphicalBEQException, getGraphicalTEQException } from './services/dashboardService';
const Dashboard = () => {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  useEffect(() => {
    getCurrentUser();
  }, []);
  const getCurrentUser = () => {
    getUser().then(response => {
      setActivityRight(response.ActivityRight);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      setCanManageAccessReq(response.CanAccessReq);
      loadBEQExceptions();
      loadTEQExceptions();
    }).catch(error => {
      console.error("Fetching user failed", error);
    });
  };
  const loadBEQExceptions = () => {
    getBEQException().then(data => {
      setBEQSummaryList(data);
    }).catch(error => {
      console.error("Fetching BEQ exceptions failed", error);
    });
  };
  const loadTEQExceptions = () => {
    getTEQException().then(data => {
      setTEQSummaryList(data);
    }).catch(error => {
      console.error("Fetching TEQ exceptions failed", error);
    });
  };
  const hasAccess = activityRight === 'Admin' || activityRight === 'SuperAdmin';
  const isUser = activityRight === 'Admin' || activityRight === 'SuperAdmin' || activityRight === 'User';
  const hasBEQAccess = canManageBEQ;
  const hasTEQAccess = canManageTEQ;
  return (
    <div>
      <h1>Dashboard</h1>
      {hasBEQAccess && <div>BEQ Summary List: {JSON.stringify(BEQSummaryList)}</div>}
      {hasTEQAccess && <div>TEQ Summary List: {JSON.stringify(TEQSummaryList)}</div>}
    </div>
  );
};
export default Dashboard;