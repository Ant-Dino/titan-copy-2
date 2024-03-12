import React, { useEffect, useState } from 'react';
import { getUser } from '../services/UserInfoService';
import PsDashboardTemplate from './psDashboardTemplate';

interface UserResponse {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
  UserName?: string;
}

const PsDashboard: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserResponse | null>(null);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
  const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser();
        const user: UserResponse = response.data; // Adjust depending on actual response structure
        setCurrentUser(user);
        setHasAccess(user.ActivityRight === 'Admin' || user.ActivityRight === 'SuperAdmin');
        setHasBEQAccess(user.CanManageBEQ);
        setHasTEQAccess(user.CanManageTEQ);
      } catch (error) {
        console.error('Failed to fetch user', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <PsDashboardTemplate>
      {/* Content rendered based on state */}
    </PsDashboardTemplate>
  );
};

export default PsDashboard;