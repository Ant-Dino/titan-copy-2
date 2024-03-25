import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  useEffect(() => {
    // Simulating UserInfo.getUser()
    axios.get('/api/userInfo')
      .then(response => {
        const { data } = response;
        setCurrentUser(data);
        setHasAccess(['Admin', 'SuperAdmin'].includes(data.ActivityRight));
        setHasBEQAccess(data.CanManageBEQ);
        setHasTEQAccess(data.CanManageTEQ);
        loadBEQExceptions();
        loadTEQExceptions();
      })
      .catch(error => console.error(error));
  }, []);

  const loadBEQExceptions = () => {
    axios.get('/Dashboard/BEQException/')
      .then(response => setBEQSummaryList(response.data))
      .catch(error => console.error(error));
  };

  const loadTEQExceptions = () => {
    axios.get('/Dashboard/TEQException/')
      .then(response => setTEQSummaryList(response.data))
      .catch(error => console.error(error));
  };

  // Commenting out interval updates for demonstration purposes
  /*
  useEffect(() => {
    const teqInterval = setInterval(loadTEQExceptions, 900000);
    return () => clearInterval(teqInterval);
  }, [currentUser]);

  useEffect(() => {
    const beqInterval = setInterval(loadBEQExceptions, 900000);
    return () => clearInterval(beqInterval);
  }, [currentUser]);
  */

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Example content rendering */}
      <div>
        {hasAccess && <p>User has Admin access.</p>}
        {BEQSummaryList.length > 0 && (
          <div>
            <h3>BEQ Exceptions:</h3>
            {/* Render BEQ data */}
          </div>
        )}
        {TEQSummaryList.length > 0 && (
          <div>
            <h3>TEQ Exceptions:</h3>
            {/* Render TEQ data */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;