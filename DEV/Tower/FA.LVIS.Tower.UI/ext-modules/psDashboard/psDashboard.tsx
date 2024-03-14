import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [beqSummaryList, setBeqSummaryList] = useState(null);
  const [teqSummaryList, setTeqSummaryList] = useState(null);
  const [beqGraphData, setBeqGraphData] = useState(null);
  const [teqGraphData, setTeqGraphData] = useState(null);

  const getCurrentUser = async () => {
    try {
      const response = await axios.get('Security/GetCurrentUser/');
      setCurrentUser(response.data);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const loadBEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/BEQException/');
      setBeqSummaryList(response.data);
    } catch (error) {
      console.error("Error fetching BEQ exceptions:", error);
    }
  };

  const loadTEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/TEQException/');
      setTeqSummaryList(response.data);
    } catch (error) {
      console.error("Error fetching TEQ exceptions:", error);
    }
  };

  const loadBEQGraphData = async () => {
    try {
      const response = await axios.get('Dashboard/GraphicalBEQException/');
      setBeqGraphData(response.data);
    } catch (error) {
      console.error("Error fetching BEQ graph data:", error);
    }
  };

  const loadTEQGraphData = async () => {
    try {
      const response = await axios.get('Dashboard/GraphicalTEQException/');
      setTeqGraphData(response.data);
    } catch (error) {
      console.error("Error fetching TEQ graph data:", error);
    }
  };

  useEffect(() => {
    getCurrentUser();
    // Assuming these two don't depend on the result of `getCurrentUser` directly.
    // Should probably be called after `getCurrentUser` if they depend on user details.
    loadBEQGraphData();
    loadTEQGraphData();
  }, []);

  return (
    <div>
      <div>
        {/* Business Exception Queue */}
        {beqSummaryList ? (
          <div>
            {beqSummaryList.map((exception, index) => (
              <div key={index}>
                <span>{exception.ExceptionName}</span>
                <span>{exception.NoOfExceptions}</span>
                <span>{exception.DateTime}</span>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div>
        {/* Technical Exception Queue */}
        {teqSummaryList ? (
          <div>
            {teqSummaryList.map((exception, index) => (
              <div key={index}>
                <span>{exception.ExceptionName}</span>
                <span>{exception.NoOfExceptions}</span>
                <span>{exception.DateTime}</span>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;