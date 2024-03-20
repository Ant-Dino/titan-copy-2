import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  useEffect(() => {
    fetchCurrentUser();
  }, []);
  const fetchCurrentUser = async () => {
    try {
      const response = await axios.get("path/to/UserInfo/getUser");
      setCurrentUser(response.data.UserName);
      setActivityRight(response.data.ActivityRight);
      setCanManageTEQ(response.data.CanManageTEQ);
      setCanManageBEQ(response.data.CanManageBEQ);
      loadBEQExceptions();
      loadTEQExceptions();
      setAccessRights(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const setAccessRights = (data) => {
    const hasBEQ = data.CanManageBEQ;
    const hasTEQ = data.CanManageTEQ;
    const access = data.ActivityRight === 'Admin' || data.ActivityRight === 'SuperAdmin';
    const userRole = !(data.ActivityRight === 'Admin' || data.ActivityRight === 'SuperAdmin' || data.ActivityRight === 'User');
    setHasBEQAccess(hasBEQ);
    setHasTEQAccess(hasTEQ);
    setHasAccess(access);
  };
  const loadBEQExceptions = async () => {
    try {
      const { data } = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(data);
    } catch (error) {
      console.log(error);
    }
  };
  const loadTEQExceptions = async () => {
    try {
      const { data } = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* You can use the state variables here to control access or display data */}
      {currentUser && (
        <div>
          <p>Current User: {currentUser}</p>
          {/* Display BEQ and TEQ exceptions or any other component logic here */}
        </div>
      )}
    </div>
  );
};
export default Dashboard;