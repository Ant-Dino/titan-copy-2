import React, { useEffect, useState } from 'react';
import { UserInfoService } from './UserInfoService'; // Assume service for user info
import { fetchData } from './api'; // Mock fetch function
import psDashboardTemplate from './psDashboardTemplate';

type UserType = {
  UserName: string;
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
};

const PsDashboard: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  useEffect(() => {
    UserInfoService.getUser().then(response => {
      setCurrentUser(response);
      loadBEQExceptions();
      loadTEQExceptions();
    });
  }, []);

  const loadBEQExceptions = async () => {
    const data = await fetchData('Dashboard/BEQException/');
    setBEQSummaryList(data);
  };

  const loadTEQExceptions = async () => {
    const data = await fetchData('Dashboard/TEQException/');
    setTEQSummaryList(data);
  };

  const access = currentUser?.ActivityRight === 'Admin' || currentUser?.ActivityRight === 'SuperAdmin';
  const user = ['Admin', 'SuperAdmin', 'User'].includes(currentUser?.ActivityRight || '');
  const BEQAccess = currentUser?.CanManageBEQ || false;
  const TEQAccess = currentUser?.CanManageTEQ || false;

  return (
    <div>
      {BEQSummaryList && (
        <div>BEQ Summary List Rendered Here</div>
      )}
      {TEQSummaryList && (
        <div>TEQ Summary List Rendered Here</div>
      )}
      {access && <div>Admin or SuperAdmin Access</div>}
      {!user && <div>No User Access</div>}
      {BEQAccess && <div>Can Manage BEQ</div>}
      {TEQAccess && <div>Can Manage TEQ</div>}
    </div>
  );
 };

export default PsDashboard;