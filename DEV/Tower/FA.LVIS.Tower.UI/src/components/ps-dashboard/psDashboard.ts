import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Will be removed after refactoring
import { getCurrentUser, loadBEQExceptions, loadTEQExceptions } from '../services/dashboardService'; // Importing the services
const DashboardComponent = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  useEffect(() => {
    const getUserAndExceptions = async () => {
      try {
        const user = await getCurrentUser(); // Refactored to use the service
        setCurrentUser(user);
        setHasBEQAccess(user.CanManageBEQ);
        setHasTEQAccess(user.CanManageTEQ);
        setHasAccess(['Admin', 'SuperAdmin'].includes(user.ActivityRight));
        const BEQExceptions = await loadBEQExceptions(); // Refactored to use the service
        setBEQSummaryList(BEQExceptions);
        const TEQExceptions = await loadTEQExceptions(); // Refactored to use the service
        setTEQSummaryList(TEQExceptions);
      } catch (error) {
        console.error(error);
      }
    };
    getUserAndExceptions();
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      {hasAccess && <div>You have admin or super admin access.</div>}
      {hasBEQAccess && <div>BEQ Access Granted</div>}
      {hasTEQAccess && <div>TEQ Access Granted</div>}
      {/* Render data or graphs based on BEQSummaryList and TEQSummaryList */}
    </div>
  );
};
export default DashboardComponent;