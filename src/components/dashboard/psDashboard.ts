import React, { useEffect, useState } from 'react';
import UserInfo from '{Path to your UserInfo service}'; // Adjust the path as needed
import psDashboardTemplate from './psDashboardTemplate'; // Adjust the import as needed

const PsDashboardComponent: React.FC = () => {
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageTEQ, setCanManageTEQ] = useState<boolean>(false);
  const [canManageBEQ, setCanManageBEQ] = useState<boolean>(false);
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(true);
  const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
  const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);

  useEffect(() => {
    UserInfo.getUser().then(response => {
      // Assuming UserInfo.getUser returns a promise that resolves with user info
      setActivityRight(response.ActivityRight);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      setCanManageAccessReq(response.CanAccessReq);
      loadBEQExceptions();
      loadTEQExceptions();

      setHasBEQAccess(response.CanManageBEQ);
      setHasTEQAccess(response.CanManageTEQ);

      if (response.ActivityRight === 'Admin' || response.ActivityRight === 'SuperAdmin') {
        setHasAccess(true);
      }

      if (response.ActivityRight !== 'Admin' && response.ActivityRight !== 'SuperAdmin' && response.ActivityRight !== 'User') {
        setIsUser(false);
      }
    });
  }, []);

  const loadBEQExceptions = () => {
    fetch('Dashboard/BEQException/')
      .then(res => res.json())
      .then(data => setBEQSummaryList(data));
  };

  const loadTEQExceptions = () => {
    fetch('Dashboard/TEQException/')
      .then(res => res.json())
      .then(data => setTEQSummaryList(data));
  };

  return (
    <psDashboardTemplate
      activityRight={activityRight}
      canManageTEQ={canManageTEQ}
      canManageBEQ={canManageBEQ}
      canManageAccessReq={canManageAccessReq}
      BEQSummaryList={BEQSummaryList}
      TEQSummaryList={TEQSummaryList}
      hasAccess={hasAccess}
      isUser={isUser}
      hasBEQAccess={hasBEQAccess}
      hasTEQAccess={hasTEQAccess}
    />
  );
};

export default PsDashboardComponent;