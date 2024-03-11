import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UserType {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
  UserName?: string;
}

const DashboardComponent: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get('/UserInfo/getUser');
        setCurrentUser(response.data);
        setBEQSummaryList(await loadBEQExceptions());
        setTEQSummaryList(await loadTEQExceptions());
        setAccessRights(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCurrentUser();
  }, []);

  const loadBEQExceptions = async () => {
    const response = await axios.get('Dashboard/BEQException/');
    return response.data;
};

  const loadTEQExceptions = async () => {
    const response = await axios.get('Dashboard/TEQException/');
    return response.data;
};

  const setAccessRights = (user: UserType) => {
    setHasBEQAccess(user.CanManageBEQ);
    setHasTEQAccess(user.CanManageTEQ);
    setHasAccess(user.ActivityRight === 'Admin' || user.ActivityRight === 'SuperAdmin');
    setIsUser(user.ActivityRight === 'Admin' || user.ActivityRight === 'SuperAdmin' || user.ActivityRight === 'User');
};

  return (
    <div>
      {/* Render your component UI based on state */}
    </div>
  );
};

export default DashboardComponent;