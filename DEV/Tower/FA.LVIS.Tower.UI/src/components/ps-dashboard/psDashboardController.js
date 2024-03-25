import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardComponent = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [beqSummaryList, setBEQSummaryList] = useState([]);
  const [teqSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);

  const getCurrentUser = async () => {
    try {
      const response = await axios.get('UserInfoEndpointURL'); // This should be updated with the actual UserInfo endpoint
      setCurrentUser(response.data);
      setHasAccess(response.data.activityright === 'Admin' || response.data.activityright === 'SuperAdmin');
      setHasBEQAccess(response.data.canmanagebeq);
      setHasTEQAccess(response.data.manageteq);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.log(error);
    }
  };

  const loadBEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadTEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
    // For loading TEQ and BEQ exceptions every 900 seconds
    const teqInterval = setInterval(loadTEQExceptions, 900000);
    const beqInterval = setInterval(loadBEQExceptions, 900000);

    return () => {
      clearInterval(teqInterval);
      clearInterval(beqInterval);
    };
    // Empty dependency array to run once on component mount
  }, []);

  // Here we would return JSX that represents the UI of the component, possibly including the data we have fetched.
  return (
    <div>
      {/* Sample JSX structure assuming Dashboard should display TEQ and BEQ summary lists */}
      <h2>Dashboard</h2>
      <h3>TEQ Summary</h3>
      <ul>
        {teqSummaryList.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
      <h3>BEQ Summary</h3>
      <ul>
        {beqSummaryList.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardComponent;