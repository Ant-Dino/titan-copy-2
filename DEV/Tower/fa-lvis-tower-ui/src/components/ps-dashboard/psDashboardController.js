import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({ activityRight: '', canManageTEQ: false, canManageBEQ: false, canManageAccessReq: false });
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = () => {
    UserInfo.getUser().then(response => {
      setCurrentUser({
        activityRight: response.ActivityRight,
        canManageTEQ: response.CanManageTEQ,
        canManageBEQ: response.CanManageBEQ,
        canManageAccessReq: response.CanAccessReq,
      });
      loadBEQExceptions();
      loadTEQExceptions();
    }).catch(error => {
      console.error("Error fetching user info:", error);
    });
  };

  const hasAccess = currentUser.activityRight === 'Admin' || currentUser.activityRight === 'SuperAdmin';
  const isUser = ['Admin', 'SuperAdmin', 'User'].includes(currentUser.activityRight);
  const hasBEQAccess = currentUser.canManageBEQ;
  const hasTEQAccess = currentUser.canManageTEQ;

  const loadBEQExceptions = () => {
    axios.get('Dashboard/BEQException/')
      .then(response => setBEQSummaryList(response.data))
      .catch(error => console.error("Failed to load BEQ exceptions:", error));
  };

  const loadTEQExceptions = () => {
    axios.get('Dashboard/TEQException/')
      .then(response => setTEQSummaryList(response.data))
      .catch(error => console.error("Failed to load TEQ exceptions:", error));
  };

  return (
    <div>
      {hasAccess && (
        // Display some admin-specific content or component
        <div>Admin/SuperAdmin Access Content</div>
      )}
      {/* Render components or elements as per BEQ and TEQ exceptions lists */}
      <BEQExceptionsList data={BEQSummaryList} />
      <TEQExceptionsList data={TEQSummaryList} />
    </div>
  );
};

const BEQExceptionsList = ({ data }) => {
  // Component to list BEQ exceptions
  return <div>{/* Logic to display BEQ exceptions data */}</div>;
};

const TEQExceptionsList = ({ data }) => {
  // Component to list TEQ exceptions
  return <div>{/* Logic to display TEQ exceptions data */}</div>;
};

export default Dashboard;