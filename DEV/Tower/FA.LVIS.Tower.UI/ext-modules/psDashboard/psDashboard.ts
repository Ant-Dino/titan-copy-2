import React, { useEffect, useState } from 'react';
import { UserInfo } from './UserInfo';
import psDashboardTemplate from './psDashboardTemplate';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const [activityRights, setActivityRights] = useState('');
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
    UserInfo.getUser().then(response => {
      setActivityRights(response.ActivityRight);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      setCanManageAccessReq(response.CanAccessReq);
      setHasBEQAccess(response.CanManageBEQ);
      setHasTEQAccess(response.CanManageTEQ);
      setHasAccess(response.ActivityRight === 'Admin' || response.ActivityRight === 'SuperAdmin');
      setIsUser(!(response.ActivityRight !== 'Admin' && response.ActivityRight !== 'SuperAdmin' && response.ActivityRight !== 'User'));
      LoadBEQExceptions();
      LoadTEQExceptions();
    });
  }, []);

  const LoadBEQExceptions = () => {
    axios.get('Dashboard/BEQException/')
      .then((response) => {
        setBEQSummaryList(response.data);
      });
  };

  const LoadTEQExceptions = () => {
    axios.get('Dashboard/TEQException/')
      .then((response) => {
        setTEQSummaryList(response.data);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      LoadTEQExceptions();
      LoadBEQExceptions();
    }, 900000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <psDashboardTemplate
      activityRights={activityRights}
      canManageTEQ={canManageTEQ}
      canManageBEQ={canManageBEQ}
      canManageAccessReq={canManageAccessReq}
      hasAccess={hasAccess}
      isUser={isUser}
      hasBEQAccess={hasBEQAccess}
      hasTEQAccess={hasTEQAccess}
      BEQSummaryList={BEQSummaryList}
      TEQSummaryList={TEQSummaryList}
    />
  );
};

export default Dashboard;