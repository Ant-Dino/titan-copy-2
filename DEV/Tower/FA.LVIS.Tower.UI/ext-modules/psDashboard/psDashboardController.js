import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardComponent() {
  // Converted $rootScope and $scope variables to React state
  const [currentUser, setCurrentUser] = useState({});
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  // Converted business logic
  const getCurrentUser = () => {
    UserInfo.getUser().then((response) => {
      setCurrentUser(response);
      setActivityRight(response.ActivityRight);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      LoadBEQExceptions();
      LoadTEQExceptions();
    });
  };

  const LoadBEQExceptions = () => {
    axios.get('Dashboard/BEQException/').then((response) => {
      setBEQSummaryList(response.data);
    });
  };

  const LoadTEQExceptions = () => {
    axios.get('Dashboard/TEQException/').then((response) => {
      setTEQSummaryList(response.data);
    });
  };

  // Monitoring changes to rights and setting access rights
  useEffect(() => {
    setHasBEQAccess(canManageBEQ);
    setHasTEQAccess(canManageTEQ);
    if (activityRight === 'Admin' || activityRight === 'SuperAdmin') {
      setHasAccess(true);
    } else {
      setHasAccess(false);
    }
  }, [canManageBEQ, canManageTEQ, activityRight]);

  // Fetching data on component mount similar to AngularJS controller's behavior
  useEffect(() => {
    getCurrentUser();
    // Assuming a function similar to $interval for auto-refresh is required
    const intervalTEQ = setInterval(LoadTEQExceptions, 900000);
    const intervalBEQ = setInterval(LoadBEQExceptions, 900000);
    return () => {
      clearInterval(intervalTEQ);
      clearInterval(intervalBEQ);
    };
  }, []);

  return (
    <div>
      {/* Planned UI structure can be augmented here */}
      <h1>Dashboard</h1>
      {/* Example of displaying TEQ and BEQ List */}
      <div>
        {TEQSummaryList.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        {BEQSummaryList.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default DashboardComponent;