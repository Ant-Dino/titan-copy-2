import React, { useState, useEffect } from 'react';
import { getUser, getTEQExceptionData, getBEQExceptionData, getGraphicalTEQException, getGraphicalBEQException } from './api'; // Assuming API functions are exported from './api'

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [TEQGraphData, setTEQGraphData] = useState([]);
  const [BEQGraphData, setBEQGraphData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser();
        setCurrentUser(response);
        setHasAccess(response.activityright === 'Admin' || response.activityright === 'SuperAdmin');
        setHasBEQAccess(response.canmanagebeq);
        setHasTEQAccess(response.canmanageteq);
        loadTEQExceptions();
        loadBEQExceptions();
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    const loadTEQExceptions = async () => {
      const data = await getTEQExceptionData();
      setTEQSummaryList(data);
    };

    const loadBEQExceptions = async () => {
      const data = await getBEQExceptionData();
      setBEQSummaryList(data);
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchGraphicalTEQExceptionData = async () => {
      const data = await getGraphicalTEQException();
      setTEQGraphData(data);
    };

    const fetchGraphicalBEQExceptionData = async () => {
      const data = await getGraphicalBEQException();
      setBEQGraphData(data);
    };

    if (currentUser.UserName) {
      fetchGraphicalTEQExceptionData();
      fetchGraphicalBEQExceptionData();
    }
  }, [currentUser.UserName]);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {hasAccess && (
          <div>
            <h2>Admin Access</h2>
            <p>Welcome, you have admin access.</p>
          </div>
        )}
        {hasBEQAccess && (
          <div>
            <h2>BEQ Summary</h2>
            {/* Render BEQ Summary List */}
          </div>
        )}
        {hasTEQAccess && (
          <div>
            <h2>TEQ Summary</h2>
            {/* Render TEQ Summary List */}
          </div>
        )}
        <div>
          <h2>TEQ Graphical Exceptions</h2>
          {/* Render TEQ Graphical Exceptions */}
        </div>
        <div>
          <h2>BEQ Graphical Exceptions</h2>
          {/* Render BEQ Graphical Exceptions */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;