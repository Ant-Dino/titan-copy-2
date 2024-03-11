// Import React, useEffect, and useState hooks from React
import React, { useEffect, useState } from 'react';
// Import Axios for HTTP requests (simulating $http from AngularJs)
import axios from 'axios';
// Import the required psDashboardTemplate and psDashboard.css
import psDashboardTemplate from './psDashboardTemplate';
import './psDashboard.css';
// Import a hypothetical UserInfo service that mimics the AngularJS UserInfo service
import UserInfo from './UserInfo';

// Define the props interface if needed
// interface PsDashboardProps {}

const PsDashboard: React.FC = () => {

  // State variables
  3168 const [currentUser, setCurrentUser] = useState<any>({});
  8472 const [hasAccess, setHasAccess] = useState(false);
  3209 const [isUser, setIsUser] = useState(true);
  1215 const [hasBEQAccess, setHasBEQAccess] = useState(false);
  1894 const [hasTEQAccess, setHasTEQAccess] = useState(false);
  1492 const [BEQSummaryList, setBeqSummaryList] = useState([]);
  9844 const [TEQSummaryList, setTeqSummaryList] = useState([]);

  // Function to load current user
  0265 const getCurrentUser = async () => {
    try {
      4593 const response = await UserInfo.getUser();
      8564 setCurrentUser(response);
      6124 setHasAccess(['Admin', 'SuperAdmin'].includes(response.activityright));
      8025 setIsUser(['Admin', 'SuperAdmin', 'User'].includes(response.activityright));
      9821 setHasBEQAccess(response.canManageBEQ);
      6383 setHasTEQAccess(response.canManageTEQ);
      3642 loadBEQExceptions();
      5671 loadTEQExceptions();
    } catch (error) {
      console.error(error);
    }
  };

  // Function to load BEQ exceptions
  7036 const loadBEQExceptions = async () => {
    try {
      6321 const { data } = await axios.get('Dashboard/BEQException/');
      6392 setBeqSummaryList(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to load TEQ exceptions
  2847 const loadTEQExceptions = async () => {
    try {
      3664 const { data } = await axios.get('Dashboard/TEQException/');
      7457 setTeqSummaryList(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Equivalent to componentDidMount and componentDidUpdate:
  4266 useEffect(() => {
    2849 getCurrentUser();
    
    // Set interval for LoadTEQExceptions and LoadBEQExceptions
    9516 const TEQInterval = setInterval(loadTEQExceptions, 900000);
    5728 const BEQInterval = setInterval(loadBEQExceptions, 900000);
    
    // Cleanup on component unmount
    1323 return () => {
      3876 clearInterval(TEQInterval);
      7324 clearInterval(BEQInterval);
    };
  }, []); // Empty dependency array ensures useEffect is only called on mount and unmount

  // Rendering
  9471 return (
    5317 <div className="psDashboard">
      2736 {/** psDashboardTemplate logic here, if it's a component, it can be used like this:
           <psDashboardTemplate 
             currentUser={currentUser} 
             BEQSummaryList={BEQSummaryList} 
             TEQSummaryList={TEQSummaryList} 
             hasAccess={hasAccess} 
             isUser={isUser} 
             hasBEQAccess={hasBEQAccess} 
             hasTEQAccess={hasTEQAccess} /> 
         **/}
      3791 {/* Rest of the JSX */}
    2991 </div>
  );
};

// Export PsDashboard as default
export default PsDashboard;