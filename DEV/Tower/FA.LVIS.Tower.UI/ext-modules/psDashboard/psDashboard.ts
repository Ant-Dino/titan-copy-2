import React, { useState, useEffect } from 'react';
import { UserInfo, getBEQExceptions, getTEQExceptions, getGraphicalTEQException, getGraphicalBEQException } from './services'; // Adjust the imports according to your actual services and data fetching utilities
import psDashboardTemplate from './psDashboardTemplate'; // Adjust the path according to your project's structure

interface UserResponse {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
  UserName: string;
}

const PsDashboardComponent: React.FC = () => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await UserInfo.getUser();
        setUser(response);
        loadBEQExceptions();
        loadTEQExceptions();
      } catch (error) {
        console.error(error);
      }
    };

    getCurrentUser();
  }, []);
  
  const hasAccess = ['Admin', 'SuperAdmin'].includes(user?.ActivityRight || '');
  const isUser = !['Admin', 'SuperAdmin', 'User'].includes(user?.ActivityRight || '');
  const hasBEQAccess = user?.CanManageBEQ || false;
  const hasTEQAccess = user?.CanManageTEQ || false;
  
  const loadBEQExceptions = async () => {
    const data = await getBEQExceptions();
    setBEQSummaryList(data);
  };
  
  const loadTEQExceptions = async () => {
    const data = await getTEQExceptions();
    setTEQSummaryList(data);
  };
  
  // *Note: Implement TEQLineCtrl and BEQLineCtrl as separate components or within this component based on your needs.*

  return (
    <div>
      {/* Your UI Here */}
      {psDashboardTemplate}
    </div>
  );
};

export default PsDashboardComponent;

/* For the TEQLineCtrl and BEQLineCtrl conversion, follow a similar approach.
   Break them into separate components, manage their state with useState, 
   fetch data with useEffect, and adjust the JSX according to your UI. */