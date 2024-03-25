import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [currentUser, setCurrentUser] = useState({});
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  useEffect(() => {
    // Simulating UserInfo.getUser() with axios
    axios.get('/userinfo').then((response) => {
      const userResponse = response.data;
      setCurrentUser(userResponse);
      setHasAccess(userResponse.ActivityRight === 'Admin' || userResponse.ActivityRight === 'SuperAdmin');
      setHasBEQAccess(userResponse.CanManageBEQ);
      setHasTEQAccess(userResponse.CanManageTEQ);
      LoadBEQExceptions();
      LoadTEQExceptions();
    });
  }, []);

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

  useEffect(() => {
    // Replace with actual interval needs, commenting out for now
    // const teqInterval = setInterval(() => {
    //   LoadTEQExceptions();
    // }, 900000);

    // const beqInterval = setInterval(() => {
    //   LoadBEQExceptions();
    // }, 900000);

    // return () => {
    //   clearInterval(teqInterval);
    //   clearInterval(beqInterval);
    // };
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {hasAccess && <p>User has admin access</p>}
        {hasBEQAccess && <p>User can manage BEQ</p>}
        {hasTEQAccess && <p>User can manage TEQ</p>}
      </div>
      {/* Render BEQ and TEQ Summary Lists */}
    </div>
  );
}

export default Dashboard;