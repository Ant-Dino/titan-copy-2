// Import necessary React and Axios (for HTTP requests)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PsDashboardTemplate } from './PsDashboardTemplate'; // Assuming this is the import for your psDashboardTemplate component

type UserInfoType = {
  UserName: string;
  ActivityRight: 'Admin' | 'SuperAdmin' | 'User';
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
};

const DashboardComponent: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserInfoType | null>(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);

  useEffect(() => {
  // Simulating UserInfo.getUser()
    const getCurrentUser = async () => {
      try {
        const response = await axios.get('/path/to/user/info'); // Adjust the URL as needed
        const userData: UserInfoType = response.data;
        setCurrentUser(userData);
        setHasAccess(userData.ActivityRight === 'Admin' || userData.ActivityRight === 'SuperAdmin');
        setIsUser(userData.ActivityRight !== 'Admin' && userData.ActivityRight !== 'SuperAdmin' && userData.ActivityRight === 'User');
        setHasBEQAccess(userData.CanManageBEQ);
        setHasTEQAccess(userData.CanManageTEQ);
        // Load initial data
        loadBEQExceptions();
        loadTEQExceptions();
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    };

    getCurrentUser();
  }, []);

  const loadBEQExceptions = async () => {
    const response = await axios.get('/Dashboard/BEQException/');
    setBEQSummaryList(response.data);
  };

  const loadTEQExceptions = async () => {
    const response = await axios.get('/Dashboard/TEQException/');
    setTEQSummaryList(response.data);
  };

  return (
    <div>
      <PsDashboardTemplate
        currentUser={currentUser}
        TEQSummaryList={TEQSummaryList}
        BEQSummaryList={BEQSummaryList}
        hasAccess={hasAccess}
        hasBEQAccess={hasBEQAccess}
        hasTEQAccess={hasTEQAccess}
      />
    </div>
  );
};

export default DashboardComponent;