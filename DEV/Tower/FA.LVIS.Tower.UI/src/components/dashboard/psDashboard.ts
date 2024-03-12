// PsDashboardComponent.tsx
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUser, loadBEQExceptions, loadTEQExceptions } from './actions';
import { Dispatch } from 'redux';
import psDashboardTemplate from './psDashboardTemplate'; // Assuming this is a React component

interface UserResponse {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
}

interface PsDashboardProps {
  getUser: typeof getUser; 
  loadBEQExceptions: typeof loadBEQExceptions;
  loadTEQExceptions: typeof loadTEQExceptions;
}

const PsDashboardComponent: React.FC<PsDashboardProps> = ({ getUser, loadBEQExceptions, loadTEQExceptions }) => {
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
  const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);

  useEffect(() => {
    const getCurrentUser = async () => {
      // Simulate an API call for user info
      const userInfo: UserResponse = await UserInfo.getUser(); // Assuming UserInfo.getUser() is now a promise-based function
      getUser(userInfo); // Dispatch Redux action
      
      setHasAccess(['Admin', 'SuperAdmin'].includes(userInfo.ActivityRight));
      setHasBEQAccess(userInfo.CanManageBEQ);
      setHasTEQAccess(userInfo.CanManageTEQ);
      
      if (userInfo.CanManageBEQ) {
        loadBEQExceptions(); // Dispatch Redux action
      }
      if (userInfo.CanManageTEQ) {
        loadTEQExceptions(); // Dispatch Redux action
      }
    };

    getCurrentUser();
  }, [getUser, loadBEQExceptions, loadTEQExceptions]);

  return (
    <>
      {psDashboardTemplate}
      {/* Add any conditional rendering based on state here */}
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getUser: (userInfo: UserResponse) => dispatch(getUser(userInfo)),
  loadBEQExceptions: () => dispatch(loadBEQExceptions()),
  loadTEQExceptions: () => dispatch(loadTEQExceptions()),
});

export default connect(null, mapDispatchToProps)(PsDashboardComponent);