import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUser, getBEQException, getTEQException, getGraphicalTEQException, getGraphicalBEQException } from './services';
const DashboardComponent = () => {
  const [user, setUser] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  useEffect(() => {
    getCurrentUser();
  }, []);
  const getCurrentUser = async () => {
    try {
      const response = await getUser();
      setUser(response);
      setHasAccess(response.activityright === 'Admin' || response.activityright === 'SuperAdmin');
      setHasBEQAccess(response.canManageBEQ);
      setHasTEQAccess(response.canManageTEQ);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error('Failed to fetch user data', error);
    }
  };
  const loadBEQExceptions = async () => {
    const data = await getBEQException();
    setBEQSummaryList(data);
  };
  const loadTEQExceptions = async () => {
    const data = await getTEQException();
    setTEQSummaryList(data);
  };
  return (
    <div>
      <h1>Dashboard</h1>
      {hasAccess && <p>You have administrative access</p>}
      {hasBEQAccess && <div>BEQ Access granted</div>}
      {hasTEQAccess && <div>TEQ Access granted</div>}
      {/* Render Summary Lists */}
    </div>
  );
};
export default DashboardComponent;