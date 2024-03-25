import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  const getCurrentUser = async () => {
    try {
      const response = await UserInfo.getUser(); // Assuming UserInfo.getUser() returns a promise
      setCurrentUser(response);
      setHasAccess(['Admin', 'SuperAdmin'].includes(response.ActivityRight));
      setHasBEQAccess(response.CanManageBEQ);
      setHasTEQAccess(response.CanManageTEQ);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const loadBEQExceptions = async () => {
    try {
      const { data } = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(data);
    } catch (error) {
      console.error('Error loading BEQ exceptions:', error);
    }
  };

  const loadTEQExceptions = async () => {
    try {
      const { data } = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(data);
    } catch (error) {
      console.error('Error loading TEQ exceptions:', error);
    }
  };

  useEffect(() => {
    getCurrentUser();
    // Assuming the intervals are required, they can be set here. Remember to clear them on component unmount.
  }, []);

  return (
    <div>
      {/* Render your component UI here */}
    </div>
  );
};

export default Dashboard;