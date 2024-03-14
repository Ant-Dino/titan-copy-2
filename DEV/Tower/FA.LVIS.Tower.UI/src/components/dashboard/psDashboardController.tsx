import React, { useState, useEffect } from 'react';
import { getUser, getTEQException, getBEQException, getGraphicalTEQException, getGraphicalBEQException } from 'your-api-calls-file'; // Please replace 'your-api-calls-file' with the actual file path
const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [TEQGraphData, setTEQGraphData] = useState([]);
  const [BEQGraphData, setBEQGraphData] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = () => {
    getUser().then((response) => {
      setCurrentUser(response);
      checkAccessRights(response);
      loadBEQExceptions();
      loadTEQExceptions();
    }).catch((error) => {
      console.error("Error fetching user data: ", error);
    });
  };
  const checkAccessRights = (userData) => {
    setHasBEQAccess(userData.CanManageBEQ);
    setHasTEQAccess(userData.CanManageTEQ);
    const activityRight = userData.ActivityRight;
    setHasAccess(activityRight === 'Admin' || activityRight === 'SuperAdmin');
    setIsUser(!['Admin', 'SuperAdmin', 'User'].includes(activityRight) ? false : true);
  };
  const loadBEQExceptions = () => {
    getBEQException().then((data) => {
      setBEQSummaryList(data);
    }).catch((error) => console.error("Error fetching BEQ exceptions: ", error));
  };
  const loadTEQExceptions = () => {
    getTEQException().then((data) => {
      setTEQSummaryList(data);
    }).catch((error) => console.error("Error fetching TEQ exceptions: ", error));
  };
  const loadTEQGraphData = () => {
    getGraphicalTEQException().then((data) => {
      setTEQGraphData(data);
    }).catch((error) => console.error("Error fetching TEQ graphical data: ", error));
  };
  const loadBEQGraphData = () => {
    getGraphicalBEQException().then((data) => {
      setBEQGraphData(data);
    }).catch((error) => console.error("Error fetching BEQ graphical data: ", error));
  };
  // Replace placeholders with actual representation of your data, for example, a chart or table
  return (
    <div>
      <h1>Dashboard</h1>
      {hasAccess && <div>Admin/SuperAdmin Access</div>}
      {isUser && <div>User Access</div>}
      {hasBEQAccess && <div>BEQ Access</div>}
      {hasTEQAccess && <div>TEQ Access</div>}
      {/* Represent BEQSummaryList and TEQSummaryList */}
      {/* Represent TEQGraphData and BEQGraphData */}
    </div>
  );
};
export default Dashboard;