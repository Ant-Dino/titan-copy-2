import React, { useState, useEffect } from 'react';
import axios from 'axios';
const useUserInfo = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get('/UserInfo/getUser');
        setCurrentUser(response.data);
        setHasAccess(['Admin', 'SuperAdmin'].includes(response.data.ActivityRight));
        setHasBEQAccess(response.data.CanManageBEQ);
        setHasTEQAccess(response.data.CanManageTEQ);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    getCurrentUser();
  }, []);
  return { currentUser, hasAccess, hasBEQAccess, hasTEQAccess };
};
const useExceptions = () => {
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  useEffect(() => {
    const loadBEQExceptions = async () => {
      try {
        const response = await axios.get('/Dashboard/BEQException/');
        setBEQSummaryList(response.data);
      } catch (error) {
        console.error('Error fetching BEQ exceptions:', error);
      }
    };
    const loadTEQExceptions = async () => {
      try {
        const response = await axios.get('/Dashboard/TEQException/');
        setTEQSummaryList(response.data);
      } catch (error) {
        console.error('Error fetching TEQ exceptions:', error);
      }
    };
    loadBEQExceptions();
    loadTEQExceptions();
  }, []);
  return { BEQSummaryList, TEQSummaryList };
};
const DashboardComponent = () => {
  const { currentUser, hasAccess, hasBEQAccess, hasTEQAccess } = useUserInfo();
  const { BEQSummaryList, TEQSummaryList } = useExceptions();
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Render your UI based on the state */}
    </div>
  );
};
export default DashboardComponent;