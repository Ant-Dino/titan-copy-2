import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PsDashboard: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(true);
  const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
  const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);
  const [BEQSummaryList, setBEQSummaryList] = useState<any[]>([]);
  const [TEQSummaryList, setTEQSummaryList] = useState<any[]>([]);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get('api/UserInfo');
        const user = response.data;
        setCurrentUser(user);
        setHasBEQAccess(user.CanManageBEQ);
        setHasTEQAccess(user.CanManageTEQ);
        setHasAccess(user.ActivityRight === 'Admin' || user.ActivityRight === 'SuperAdmin');
        setIsUser(['Admin', 'SuperAdmin', 'User'].includes(user.ActivityRight));
        loadBEQExceptions();
        loadTEQExceptions();
      } catch (error) {
        console.error('Getting current user failed.', error);
      }
    };

    getCurrentUser();
  }, []);

  const loadBEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(response.data);
    } catch (error) {
      console.error('Loading BEQ exceptions failed.', error);
    }
  };

  const loadTEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(response.data);
    } catch (error) {
      console.error('Loading TEQ exceptions failed.', error);
    }
  };

  // This is an example. You might need to adjust the JSX based on your actual UI elements and requirements.
  return (
    <div>
      <h2>Dashboard</h2>
      {currentUser && (
        <div>
          <p>ActivityRight: {currentUser.ActivityRight}</p>
          <p>CanManageTEQ: {String(hasTEQAccess)}</p>
          <p>CanManageBEQ: {String(hasBEQAccess)}</p>
        </div>
      )}
      {/* Consider rendering your charts or other components here */}
    </div>
  );
};

export default PsDashboard;