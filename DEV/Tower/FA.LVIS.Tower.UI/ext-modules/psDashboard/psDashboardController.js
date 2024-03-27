import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Assuming the UserInfo, and other necessary services are already transformed to their React equivalents or via direct API calls
const DashboardController = () => {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  useEffect(() => {
    getCurrentUser();
    // Assuming your intervals would be converted into useEffect with dependency array as an empty array or with specific variables.
  }, []);
  const getCurrentUser = async () => {
    try {
      const response = await UserInfo.getUser(); // Make sure UserInfo.getUser is Promisified or use another method to fetch data
      // Emitting event "getUser" switches to a prop being passed down or a global state management / context
      setActivityRight(response.ActivityRight);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      setCanManageAccessReq(response.CanAccessReq);
      setCurrentUser(response);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error(error);
    }
  };
  const loadBEQExceptions = async () => {
    const response = await axios.get('Dashboard/BEQException/');
    setBEQSummaryList(response.data);
  };
  const loadTEQExceptions = async () => {
    const response = await axios.get('Dashboard/TEQException/');
    setTEQSummaryList(response.data);
  };
  // Additional functions like LoadException for TEQLineCtrl and BEQLineCtrl can also be moved to this component or to their own hooks/components
  return (
    <div>
      {/* JSX for Dashboard. Data can be passed to child components as needed */}
      {/* Example: <TEQExceptionComponent teqSummaryList={TEQSummaryList} /> */}
    </div>
  );
};
export default DashboardController;