 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUser } from '../services/UserInfo';
import { getBEQException, getGraphicalBEQException } from '../services/DashboardBEQ';
import { getTEQException, getGraphicalTEQException } from '../services/DashboardTEQ';

const Dashboard = () => {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [canAccessReq, setCanAccessReq] = useState(false);
  const [user, setUser] = useState({});
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [BEQGraphData, setBEQGraphData] = useState({});
  const [TEQGraphData, setTEQGraphData] = useState({});

  useEffect(() => {
    getCurrentUser();
    // Removed interval logic as it should be managed differently in React, for example by using useEffect with a specific dependency.
  }, []);

  const getCurrentUser = () => {
    getUser().then((response) => {
      setUser(response);
      setActivityRight(response.activityRight);
      setCanManageTEQ(response.canManageTEQ);
      setCanManageBEQ(response.canManageBEQ);
      setCanAccessReq(response.canAccessReq);
      loadBEQExceptions();
      loadTEQExceptions();
      handleAccessControl(response.activityRight);
    }).catch((error) => {
      console.error('There was an error!', error);
    });
  };

  const handleAccessControl = (right) => {
    const access = right === 'Admin' || right === 'SuperAdmin';
    const userRole = right !== 'Admin' && right !== 'SuperAdmin' && right === 'User';
    setHasAccess(access);
    setIsUser(userRole);
    setHasBEQAccess(canManageBEQ);
    setHasTEQAccess(canManageTEQ);
  };

  const loadBEQExceptions = () => {
    getBEQException().then((data) => {
      setBEQSummaryList(data);
    }).catch((error) => {
      console.error('Failed to load BEQ Exceptions', error);
    });
  };

  const loadTEQExceptions = () => {
    getTEQException().then((data) => {
      setTEQSummaryList(data);
    }).catch((error) => {
      console.error('Failed to load TEQ Exceptions', error);
    });
  };

  // Function to load graphical TEQ and BEQ Exception data could go here, for example:
  const loadGraphicalBEQException = () => {
    getGraphicalBEQException().then((data) => {
      setBEQGraphData(data);
    }).catch((error) => {
      console.error('Failed to load Graphical BEQ Exception', error);
    });
  };

  // Similar function for TEQ...

  return (
    <div>
      {/* Components and JSX go here */}
      {/* Show information based on state */}
      {hasAccess && <p>User has admin access</p>}
      {isUser && <p>User is a regular user</p>}
      {/* Render lists, graphs, etc based on the state like BEQSummaryList and TEQSummaryList */}
    </div>
  );
};

export default Dashboard;
