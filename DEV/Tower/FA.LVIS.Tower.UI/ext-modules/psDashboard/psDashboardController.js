import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  useEffect(() => {
    getCurrentUser();
  }, []);
  const getCurrentUser = () => {
    UserInfo.getUser()
      .then((response) => {
        // Assuming 'UserInfo.getUser()' is a placeholder for actual user info retrieval logic
        setCurrentUser(response);
        setHasAccess(['Admin', 'SuperAdmin'].includes(response.activityRight));
        setIsUser(!['Admin', 'SuperAdmin', 'User'].includes(response.activityRight));
        setHasBEQAccess(response.canManageBEQ);
        setHasTEQAccess(response.canManageTEQ);
        LoadBEQExceptions();
        LoadTEQExceptions();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const LoadBEQExceptions = () => {
    axios.get('Dashboard/BEQException/')
      .then((response) => {
        setBEQSummaryList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const LoadTEQExceptions = () => {
    axios.get('Dashboard/TEQException/')
      .then((response) => {
        setTEQSummaryList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Optional: Implement interval logic if needed using useEffect Hook

  return (
    <div>
      {/* Content Rendering Logic Here */}
    </div>
  );
};
export default Dashboard;