import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardController = (props) => {
  const [activityRight, setActivityRight] = useState("");
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = () => {
    UserInfo.getUser().then((response) => {
      // Simulated $rootScope broadcasting event with props or context
      setActivityRight(response.ActivityRight);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      setCanManageAccessReq(response.CanAccessReq);
      evaluateAccessRights(response);
      loadBEQExceptions();
      loadTEQExceptions();
    }).catch((error) => {
      console.log(error);
    });
  };

  const evaluateAccessRights = (response) => {
    let tempHasAccess = false;
    let tempIsUser = true;
    let tempHasBEQAccess = false;
    let tempHasTEQAccess = false;

    if (response.CanManageBEQ) {
      tempHasBEQAccess = true;
    }

    if (response.CanManageTEQ) {
      tempHasTEQAccess = true;
    }

    if (response.ActivityRight === 'Admin' || response.ActivityRight === 'SuperAdmin') {
      tempHasAccess = true;
    }

    if (response.ActivityRight !== 'Admin' && response.ActivityRight !== 'SuperAdmin' && response.ActivityRight !== 'User') {
      tempIsUser = false;
    }

    setHasAccess(tempHasAccess);
    setIsUser(tempIsUser);
    setHasBEQAccess(tempHasBEQAccess);
    setHasTEQAccess(tempHasTEQAccess);
  };

  const loadBEQExceptions = () => {
    axios.get('Dashboard/BEQException/')
      .then((response) => {
        setBEQSummaryList(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const loadTEQExceptions = () => {
    axios.get('Dashboard/TEQException/')
      .then((response) => {
        setTEQSummaryList(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  // Example of interval set-up in React (similar to $interval)
  // Make sure to clear these intervals on component unmount to avoid memory leaks
  useEffect(() => {
    const intervalTEQ = setInterval(() => {
      loadTEQExceptions();
    }, 900000);

    const intervalBEQ = setInterval(() => {
      loadBEQExceptions();
    }, 900000);

    return () => {
      clearInterval(intervalTEQ);
      clearInterval(intervalBEQ);
    };
  }, []);

  return (
    <div>
      {/* Rendered UI Component */}
      <h2>Dashboard Component</h2>
    </div>
  );
};

export default DashboardController;