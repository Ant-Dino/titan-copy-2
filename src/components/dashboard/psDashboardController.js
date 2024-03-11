import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PsDashboardTemplate from './psDashboardTemplate'; // Assuming psDashboardTemplate is now psDashboardTemplate.tsx and exported as PsDashboardTemplate

interface UserInfoType {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
  UserName?: string;
}

interface GraphDataType {
  Hour: number;
  NewCount: number;
  ActiveCount: number;
  HoldCount: number;
  ArchiveCount: number;
  QueueCount: number;
}

const PsDashboard: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserInfoType | null>(null);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(true);
  const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
  const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);

  useEffect(() => {
    // Using axios instead of $http for React application
    axios.get('/UserInfo/GetUser').then(response => {
      const data: UserInfoType = response.data;
      // Broadcasting similar to $rootScope.$broadcast but here we use React Context or a state management library
      setCurrentUser(data);
      setHasBEQAccess(data.CanManageBEQ);
      setHasTEQAccess(data.CanManageTEQ);

      if (data.ActivityRight === 'Admin' || data.ActivityRight === 'SuperAdmin') {
        setHasAccess(true);
      }
      if (data.ActivityRight !== 'Admin' && data.ActivityRight !== 'SuperAdmin' && data.ActivityRight !== 'User') {
        setIsUser(false);
      }
      LoadBEQExceptions();
      LoadTEQExceptions();
    });
  }, []);

  const LoadBEQExceptions = () => {
    axios.get('/Dashboard/BEQException/').then(response => {
      setBEQSummaryList(response.data);
    });
  };

  const LoadTEQExceptions = () => {
    axios.get('/Dashboard/TEQException/').then(response => {
      setTEQSummaryList(response.data);
    });
  };

  return (
    <PsDashboardTemplate>
      {/* You can now use BEQSummaryList, TEQSummaryList, and currentUser state directly in your component */}
      {/* Template content here */}
    </PsDashboardTemplate>
  );
};

export default PsDashboard;