import React, { useState, useEffect } from 'react';
import DashboardService from 'DEV/Tower/FA.LVIS.Tower.UI/src/services/psDashboard.service.ts';
const Dashboard = () => {
  const [userActivityRight, setUserActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  // Simulates UserInfo.getUser(). Replaced with a direct call for simplicity. Adapt as needed.
  const getCurrentUser = async () => {
    try {
      const response = await DashboardService.getCurrentUser();
      const { ActivityRight, CanManageTEQ, CanManageBEQ } = response;
      setUserActivityRight(ActivityRight);
      setCanManageTEQ(CanManageTEQ);
      setCanManageBEQ(CanManageBEQ);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error(error);
    }
  };
  const loadBEQExceptions = async () => {
    const response = await DashboardService.loadBEQExceptions();
    setBEQSummaryList(response);
  };
  const loadTEQExceptions = async () => {
    const response = await DashboardService.loadTEQExceptions();
    setTEQSummaryList(response);
  };
  useEffect(() => {
    getCurrentUser();
    // You can add intervals here if needed using setInterval and clear them using clearInterval in the cleanup function.
  }, []);
  return (
    <div>
      {/* Render UI based on the state here */}
    </div>
  );
};
export default Dashboard;