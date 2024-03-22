  
import React, { useState, useEffect } from 'react';  
import axios from 'axios';  

const DashboardComponent = () => {  
  const [currentUser, setCurrentUser] = useState({});  
  const [hasAccess, setHasAccess] = useState(false);  
  const [hasBEQAccess, setHasBEQAccess] = useState(false);  
  const [hasTEQAccess, setHasTEQAccess] = useState(false);  
  const [BEQSummaryList, setBEQSummaryList] = useState([]);  
  const [TEQSummaryList, setTEQSummaryList] = useState([]);  

  useEffect(() => {  
    getCurrentUser();  
  }, []);  

  const fetchData = async (url, setter) => {  
   try {  
     const response = await axios.get(url);  
     setter(response.data);  
   } catch (error) {  
     console.error(`Error loading data from ${url}:`, error);  
   }  
  };  

  const getCurrentUser = async () => {  
    try {  
      const response = await axios.get('/UserInfo/getUser');  
      setCurrentUser(response.data);  
      setAccessRights(response.data);  
      fetchData('/Dashboard/BEQException/', setBEQSummaryList);  
      fetchData('/Dashboard/TEQException/', setTEQSummaryList);  
    } catch (error) {  
      console.error('Error fetching user info:', error);  
    }  
  };  

  const setAccessRights = (userData) => {  
    const { ActivityRight, CanManageTEQ, CanManageBEQ } = userData;  
    setHasAccess(ActivityRight === 'Admin' || ActivityRight === 'SuperAdmin');  
    setHasBEQAccess(CanManageBEQ);  
    setHasTEQAccess(CanManageTEQ);  
  };  

  return (  
    <div>  
      <h1>Dashboard</h1>  
      {/* Render your UI components based on state here */}  
    </div>  
  );  
};  

export default DashboardComponent;  
