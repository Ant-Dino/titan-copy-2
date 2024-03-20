import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Assuming UserInfo is now a service/function that returns user information
// You might need to adapt this part based on its actual implementation in React
const UserInfo = {
  getUser: () => axios.get('/api/userInfo').then(res => res.data)
};

const DashboardComponent = () => {
  const [user, setUser] = useState({});
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);

  useEffect(() => {
    UserInfo.getUser().then(response => {
      setUser(response);
      setHasBEQAccess(response.CanManageBEQ);
      setHasTEQAccess(response.CanManageTEQ);
      setHasAccess(response.ActivityRight === 'Admin' || response.ActivityRight === 'SuperAdmin');
      loadBEQExceptions();
      loadTEQExceptions();
    });
  }, []);

  const loadBEQExceptions = () => {
    axios.get('Dashboard/BEQException/')
      .then(response => {
        setBEQSummaryList(response.data);
      });
  };

  const loadTEQExceptions = () => {
    axios.get('Dashboard/TEQException/')
      .then(response => {
        setTEQSummaryList(response.data);
      });
  };

  // Additional functions for handling other logic like event handling, UI updates, etc., go here.

  // Render method here. Adapt it based on how you envision the component's UI.
  return (
    <div>
      {/* UI components related to dashboard data */}
      {/* Conditions rendering based on access rights, similar to ng-if or ng-show/ng-hide */}
      {hasAccess &&
        <div>
          {/* Show BEQ and TEQ summaries, possibly using .map for rendering lists */}
        </div>
      }
    </div>
  );
};

export default DashboardComponent;