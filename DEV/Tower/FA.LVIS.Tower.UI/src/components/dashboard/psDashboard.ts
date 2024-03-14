import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [currentUser, setCurrentUser] = useState({});
  const [hasAccess, setHasAccess] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [graphData, setGraphData] = useState({ teqData: [], beqData: [] });

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get('/UserInfo/getUser');
        setCurrentUser(response.data);
        setHasAccess(['Admin', 'SuperAdmin'].includes(response.data.ActivityRight));
        setIsUser(!['Admin', 'SuperAdmin', 'User'].includes(response.data.ActivityRight));
        setHasBEQAccess(response.data.CanManageBEQ);
        setHasTEQAccess(response.data.CanManageTEQ);
        loadBEQExceptions();
        loadTEQExceptions();
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    getCurrentUser();
  }, []);

  const loadBEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(response.data);
    } catch (error) {
      console.error('Error fetching BEQ Exceptions:', error);
    }
  };

  const loadTEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(response.data);
    } catch (error) {
      console.error('Error fetching TEQ Exceptions:', error);
    }
  };

  const loadTEQExceptionGraph = async () => {
    try {
      const response = await axios.get('Dashboard/GraphicalTEQException/');
      setGraphData(prevState => ({ ...prevState, teqData: response.data }));
    } catch (error) {
      console.error('Error fetching TEQ Graphical Exceptions:', error);
    }
  };

  const loadBEQExceptionGraph = async () => {
    try {
      const response = await axios.get('Dashboard/GraphicalBEQException/');
      setGraphData(prevState => ({ ...prevState, beqData: response.data }));
    } catch (error) {
      console.error('Error fetching BEQ Graphical Exceptions:', error);
    }
  };

  useEffect(() => {
    if (currentUser.UserName) {
      loadTEQExceptionGraph();
      loadBEQExceptionGraph();
    }
  }, [currentUser.UserName]);

  // Omitted render logic and components for simplicity, refer to AngularJS template for exact structure
  return (
    <div>
      {/* Content based on state variables such as currentUser, BEQSummaryList, TEQSummaryList, graphData */}
    </div>
  );
}

export default Dashboard;