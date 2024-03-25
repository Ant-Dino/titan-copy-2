import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fetchUserInfo = () => {
  return axios.get('UserInfo/getUser')
    .then(response => response.data)
    .catch(error => console.error("There was an error!", error));
};

const fetchData = (url) => {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => console.error("Error fetching data from " + url, error));
};

const DashBoardComponent = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  useEffect(() => {
    fetchUserInfo().then(data => {
      setCurrentUser(data);
      setActivityRight(data.ActivityRight);
      setCanManageTEQ(data.CanManageTEQ);
      setCanManageBEQ(data.CanManageBEQ);
      loadBEQExceptions();
      loadTEQExceptions();
    });
  }, []);

  const loadBEQExceptions = () => {
    fetchData('Dashboard/BEQException/').then(data => {
      setBEQSummaryList(data);
    });
  };

  const loadTEQExceptions = () => {
    fetchData('Dashboard/TEQException/').then(data => {
      setTEQSummaryList(data);
    });
  };

  // You can implement interval functions to refresh data
  // But, remember to clear them onDestroy equivalent in useEffect return function

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Your JSX codes with conditions based on hooks values */}
      {/* Example: {activityRight === 'Admin' && <button>Admin Button</button>} */}
    </div>
  );
};

export default DashBoardComponent;