import React, { useState, useEffect } from 'react';
import axios from 'axios';
function DashboardController() {
  const [currentUser, setCurrentUser] = useState({});
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  useEffect(() => {
    const getCurrentUser = () => {
      axios.get('/UserInfo/getUser').then((response) => {
        const { ActivityRight, CanManageTEQ, CanManageBEQ, CanAccessReq } = response.data;
        setCurrentUser(response.data);
        setHasAccess(ActivityRight === 'Admin' || ActivityRight === 'SuperAdmin');
        setHasBEQAccess(CanManageBEQ);
        setHasTEQAccess(CanManageTEQ);
        LoadBEQExceptions();
        LoadTEQExceptions();
      });
    };
    const LoadBEQExceptions = () => {
      axios.get('Dashboard/BEQException/').then((response) => {
        setBEQSummaryList(response.data);
      });
    };
    const LoadTEQExceptions = () => {
      axios.get('Dashboard/TEQException/').then((response) => {
        setTEQSummaryList(response.data);
      });
    };
    getCurrentUser();
    // Disabling the automatic refresh for demonstration purposes.
    // setInterval(() => {
    //   LoadTEQExceptions();
    //   LoadBEQExceptions();
    // }, 900000);
  }, []);
  return (
    <div>
      <h2>Dashboard</h2>
      {hasAccess ? <p>User has admin access</p> : <p>User has regular access</p>}
      <div>
        <h3>BEQ Exceptions</h3>
        {/* Displays a list of BEQ exceptions */}
      </div>
      <div>
        <h3>TEQ Exceptions</h3>
        {/* Displays a list of TEQ exceptions */}
      </div>
    </div>
  );
}
export default DashboardController;