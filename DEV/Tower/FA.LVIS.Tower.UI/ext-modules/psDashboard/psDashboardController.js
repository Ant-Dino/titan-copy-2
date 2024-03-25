import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Dashboard() {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  useEffect(() => {
    UserInfo.getUser().then(response => {
      // Broadcasting would typically be replaced by moving the data to a context or similar in React
      setActivityRight(response.ActivityRight);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      setBEQSummaryList([]); // Assume function to fetch BEQ exceptions updates this state
      setTEQSummaryList([]); // Assume function to fetch TEQ exceptions updates this state
      
      if (response.CanManageBEQ) {
        setHasBEQAccess(true);
      }

      if (response.CanManageTEQ) {
        setHasTEQAccess(true);
      }

      if (['Admin', 'SuperAdmin'].includes(response.ActivityRight)) {
        setHasAccess(true);
      }

      if (!['Admin', 'SuperAdmin', 'User'].includes(response.ActivityRight)) {
        setIsUser(false);
      }
    });
  }, []);
  useEffect(() => {
    const fetchBEQExceptions = async () => {
      try {
        const { data } = await axios.get('Dashboard/BEQException/');
        setBEQSummaryList(data);
      } catch (error) {
        console.error("Failed to fetch BEQ Exceptions", error);
      }
    };

    const fetchTEQExceptions = async () => {
      try {
        const { data } = await axios.get('Dashboard/TEQException/');
        setTEQSummaryList(data);
      } catch (error) {
        console.error("Failed to fetch TEQ Exceptions", error);
      }
    };

    fetchBEQExceptions();
    fetchTEQExceptions();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {/* Content goes here */}
    </div>
  );
}
export default Dashboard;