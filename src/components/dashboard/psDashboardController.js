import React, { useState, useEffect } from 'react';
import UserInfo from 'path/to/UserInfo';
import { psDashboardTemplate } from 'path/to/psDashboardTemplate';

const DashboardComponent: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>({});
  const [BEQSummaryList, setBEQSummaryList] = useState<any[]>([]);
  const [TEQSummaryList, setTEQSummaryList] = useState<any[]>([]);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(true);
  const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
  const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);

  const getCurrentUser = async () => {
    try {
      const response = await UserInfo.getUser();
      setCurrentUser(response);
      setHasAccess(response.activityRight === 'Admin' || response.activityRight === 'SuperAdmin');
      setIsUser(['Admin', 'SuperAdmin', 'User'].includes(response.activityRight));
      setHasBEQAccess(response.canManageBEQ);
      setHasTEQAccess(response.canManageTEQ);
      LoadBEQExceptions();
      LoadTEQExceptions();
    } catch (error) {
      console.error(error);
    }
  };

  const LoadBEQExceptions = async () => {
    try {
      const response = await fetch('Dashboard/BEQException/');
      const data = await response.json();
      setBEQSummaryList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const LoadTEQExceptions = async () => {
    try {
      const response = await fetch('Dashboard/TEQException/');
      const data = await response.json();
      setTEQSummaryList(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
    const intervalTEQ = setInterval(LoadTEQExceptions, 900000);
    const intervalBEQ = setInterval(LoadBEQExceptions, 900000);
    // Cleanup intervals on component unmount
    return () => {
      clearInterval(intervalTEQ);
      clearInterval(intervalBEQ);
    };
  }, []);

  return (
    <div>
      {/* Assuming psDashboardTemplate is a functional component to be used here */}
      <psDashboardTemplate 
        currentUser={currentUser}
        BEQSummaryList={BEQSummaryList}
        TEQSummaryList={TEQSummaryList}
        hasAccess={hasAccess}
        hasBEQAccess={hasBEQAccess}
        hasTEQAccess={hasTEQAccess}
        isUser={isUser}
      />
    </div>
  );
};

export default DashboardComponent;