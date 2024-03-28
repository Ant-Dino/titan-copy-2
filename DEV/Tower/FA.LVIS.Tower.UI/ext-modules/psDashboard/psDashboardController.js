import React, { useState, useEffect } from 'react';
import { getUser, LoadBEQExceptions, LoadTEQExceptions } from 'DEV/Tower/FA.LVIS.Tower.UI/src/services/psDashboard.service';
const Dashboard = () => {
  const [user, setUser] = useState({});
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  useEffect(() => {
    getCurrentUser();
    // Removed $interval replacement for LoadTEQExceptions and LoadBEQExceptions since useEffect with setTimeout should be handled carefully without causing infinite loops
  }, []); 
  const getCurrentUser = () => {
    getUser().then(response => {
      setUser(response);
      setActivityRight(response.ActivityRight);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      handleAccessRights(response);
      loadTEQExceptions();
      loadBEQExceptions();
    });
  };
  const handleAccessRights = (response) => {
    if (response.CanManageBEQ) {
      setHasBEQAccess(true);
    }
    if (response.CanManageTEQ) {
      setHasTEQAccess(true);
    }
    if (['Admin', 'SuperAdmin'].includes(response.ActivityRight)) {
      setHasAccess(true);
    }
  };
  const loadBEQExceptions = () => {
    LoadBEQExceptions().then(data => {
      setBEQSummaryList(data);
    });
  };
  const loadTEQExceptions = () => {
    LoadTEQExceptions().then(data => {
      setTEQSummaryList(data);
    });
  };
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Render UI based on state variables */}
    </div>
  );
};
export default Dashboard;