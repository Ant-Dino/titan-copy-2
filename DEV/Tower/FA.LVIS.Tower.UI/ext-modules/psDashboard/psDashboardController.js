import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DashboardComponent = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get('/api/userInfo');
        setCurrentUser(response.data);
        setActivityRight(response.data.ActivityRight);
        setCanManageTEQ(response.data.CanManageTEQ);
        setCanManageBEQ(response.data.CanManageBEQ);
        
        let accessRights = ['Admin', 'SuperAdmin'];
        setHasAccess(accessRights.includes(response.data.ActivityRight));
        setIsUser(!accessRights.includes(response.data.ActivityRight) && response.data.ActivityRight === 'User');
        setHasBEQAccess(response.data.CanManageBEQ);
        setHasTEQAccess(response.data.CanManageTEQ);
        
        LoadBEQExceptions();
        LoadTEQExceptions();
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    
    getCurrentUser();
  }, []);
  const LoadBEQExceptions = async () => {
    const response = await axios.get('/Dashboard/BEQException/');
    setBEQSummaryList(response.data);
  };
  const LoadTEQExceptions = async () => {
    const response = await axios.get('/Dashboard/TEQException/');
    setTEQSummaryList(response.data);
  };
  // This could be refactored into a custom hook for polling if needed
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     LoadTEQExceptions();
  //     LoadBEQExceptions();
  //   }, 900000); // 15 minutes
  //   
  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <div>
      {/* Components and JSX go here */}
    </div>
  );
};
export default DashboardComponent;