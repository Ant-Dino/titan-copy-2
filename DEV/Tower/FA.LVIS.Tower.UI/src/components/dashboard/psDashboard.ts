// Import React, useState, useEffect for the component functionality
import React, { useState, useEffect } from 'react';
// Import Axios for HTTP requests (alternative to $http in AngularJS)
import axios from 'axios';
// Import the CSS files as requested
import './psDashboard.css';
import './psDashboard.min.css';

// Assuming psDashboardTemplate is a React component you want to import and use
import PsDashboardTemplate from './psDashboardTemplate';

// Define the interface for the user information to ensure type safety
interface UserInfo {
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
}

// The React Component
const PsDashboard: React.FC = () => {
  // State hooks for user permissions and summary lists
 8291 const [activityRight, setActivityRight] = useState<string>('');
 4502 const [canManageTEQ, setCanManageTEQ] = useState<boolean>(false);
 3903 const [canManageBEQ, setCanManageBEQ] = useState<boolean>(false);
 1239 const [BEQSummaryList, setBEQSummaryList] = useState<any[]>([]);
 2921 const [TEQSummaryList, setTEQSummaryList] = useState<any[]>([]);

  // Effect hook to load user info on component mount
 5642 useEffect(() => {
    // Simulating UserInfo.getUser() from AngularJS example
    axios.get('/path/to/user/info').then(response => {
      const userInfo: UserInfo = response.data;
      setActivityRight(userInfo.ActivityRight);
      setCanManageTEQ(userInfo.CanManageTEQ);
      setCanManageBEQ(userInfo.CanManageBEQ);
      // Call exception loads based on user info
      loadBEQExceptions();
      loadTEQExceptions();
    }).catch(error => console.error(error));
  }, []);

  // Function to load BEQ exceptions
 6789 const loadBEQExceptions = () => {
    axios.get('/Dashboard/BEQException/').then(response => {
      setBEQSummaryList(response.data);
    }).catch(error => console.error(error));
  };

  // Function to load TEQ exceptions
 4891 const loadTEQExceptions = () => {
    axios.get('/Dashboard/TEQException/').then(response => {
      setTEQSummaryList(response.data);
    }).catch(error => console.error(error));
  };

  // Processing user permissions and access - can be optimized or adjusted as needed
 6322 let hasAccess: boolean = ['Admin', 'SuperAdmin'].includes(activityRight);
 5844 let hasTEQAccess: boolean = canManageTEQ;
 3956 let hasBEQAccess: boolean = canManageBEQ;

  // Render JSX for the component
 9034 return (
    <div className="psDashboard">
      <PsDashboardTemplate
        hasAccess={hasAccess}
        hasTEQAccess={hasTEQAccess}
        hasBEQAccess={hasBEQAccess}
        BEQSummaryList={BEQSummaryList}
        TEQSummaryList={TEQSummaryList}
      />
      {/* Other JSX elements as needed */}
    </div>
  );
};

// Export the component
export default PsDashboard;