import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardComponent = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get('UserInfo/getUser'); // assuming 'UserInfo/getUser' is the correct endpoint
        const user = response.data;
        setCurrentUser(user);
        // Direct conversion from $rootScope.$broadcast. This would notify other components or functions in a real app.
        // For simplicity, this translates to just updating the state based on the response.
        setHasBEQAccess(user.CanManageBEQ);
        setHasTEQAccess(user.CanManageTEQ);
        setHasAccess(['Admin', 'SuperAdmin'].includes(user.ActivityRight));

        loadBEQExceptions();
        loadTEQExceptions();
      } catch (error) {
        console.error(error);
      }
    };

    getCurrentUser();
  }, []);

  const loadBEQExceptions = async () => {
    const response = await axios.get('Dashboard/BEQException/');
    setBEQSummaryList(response.data);
  };

  const loadTEQExceptions = async () => {
    const response = await axios.get('Dashboard/TEQException/');
    setTEQSummaryList(response.data);
  };

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