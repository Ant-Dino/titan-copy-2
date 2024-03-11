import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { psDashboardTemplate } from './psDashboardTemplate'; 

interface UserInfo {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
}

const PsDashboardComponent: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      const response = await axios.get<UserInfo>('UserInfo/getUser');
      setCurrentUser(response.data);
      setHasBEQAccess(response.data.CanManageBEQ);
      setHasTEQAccess(response.data.CanManageTEQ);
      setHasAccess(['Admin', 'SuperAdmin'].includes(response.data.ActivityRight));
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error(error);
    }
  };

  const loadBEQExceptions = async () => {
    const response = await axios.get('Dashboard/BEQException/');
    setBEQSummaryList(response.data);
  };

  const loadTEQExceptions = async () => {
    const response = await axios.get('Dashboard/TEQException/');
    setTEQSummaryList(response.data);
  };

  return (
    <div>
      {psDashboardTemplate(currentUser, BEQSummaryList, TEQSummaryList, hasAccess, hasBEQAccess, hasTEQAccess)}
    </div>
  );
};

export default PsDashboardComponent;