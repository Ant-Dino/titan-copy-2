import React, { useState, useEffect } from 'react';
import { getUser, getTEQException, getBEQException, getGraphicalTEQException, getGraphicalBEQException } from './services/DashboardService';

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({});

  const [beqSummaryList, setBEQSummaryList] = useState([]);
  const [teqSummaryList, setTEQSummaryList] = useState([]);

  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);

  const [graphDataTEQ, setGraphDataTEQ] = useState([]);
  const [graphDataBEQ, setGraphDataBEQ] = useState([]);

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    if (currentUser.CanManageBEQ) {
      setHasBEQAccess(true);
    }
    if (currentUser.CanManageTEQ) {
      setHasTEQAccess(true);
    }
    if (currentUser.ActivityRight === 'Admin' || currentUser.ActivityRight === 'SuperAdmin') {
      setHasAccess(true);
    }
  }, [currentUser]);

  const getCurrentUser = () => {
    getUser().then(response => {
      setCurrentUser(response);
      if (response.CanManageTEQ) loadTEQExceptions();
      if (response.CanManageBEQ) loadBEQExceptions();
    });
  };

  const loadTEQExceptions = () => {
    getTEQException().then(data => {
      setTEQSummaryList(data);
    });
  };

  const loadBEQExceptions = () => {
    getBEQException().then(data => {
      setBEQSummaryList(data);
    });
  };

  const loadGraphicalTEQException = () => {
    getGraphicalTEQException().then(data => {
      setGraphDataTEQ(data);
    });
  };

  const loadGraphicalBEQException = () => {
    getGraphicalBEQException().then(data => {
      setGraphDataBEQ(data);
    });
  };

  return (
    <div>
      <h3>Dashboard</h3>
      {/* Render your components related to TEQ and BEQ here */}
      {/* Based on access control, you may conditionally render links or components, e.g., */}
      { hasAccess && <p>Admin Access Granted</p> }
      { hasBEQAccess && <p>BEQ Access Granted</p> }
      { hasTEQAccess && <p>TEQ Access Granted</p> }

      {/* Component for TEQ and BEQ graphical representation could be placed here */}
      {/* You should pass the appropriate props based on state */}
    </div>
  );
};

export default Dashboard;