import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUser, getTEQException, getBEQException, getGraphicalTEQException, getGraphicalBEQException } from './services';
const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  useEffect(() => {
    getCurrentUser();
  }, []);
  const getCurrentUser = async () => {
    try {
      const response = await getUser();
      setCurrentUser(response);
      setHasBEQAccess(response.CanManageBEQ);
      setHasTEQAccess(response.CanManageTEQ);
      setHasAccess(['Admin', 'SuperAdmin'].includes(response.ActivityRight));
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error('Error fetching user', error);
    }
  };
  const loadBEQExceptions = async () => {
    const data = await getBEQException();
    setBEQSummaryList(data);
  };
  const loadTEQExceptions = async () => {
    const data = await getTEQException();
    setTEQSummaryList(data);
  };
  return (
    <div>
      {/* Display components based on state, similar to what was being done in Angular controllers */}
    </div>
  );
};
export default Dashboard;
const TEQLineChart = () => {
  const [graphData, setGraphData] = useState([]);
  useEffect(() => {
    loadTEQException();
    // This effect hook can be used to mimic the AngularJS $interval for periodic data refresh
  }, []);
  const loadTEQException = async () => {
    const data = await getGraphicalTEQException();
    setGraphData(data);
  };
  return (
    <div>
      {/* Visualization logic goes here, perhaps using a React chart library that matches the previous functionality */}
    </div>
  );
};
// BEQLineCtrl replacement Component
const BEQLineChart = () => {
  const [graphData, setGraphData] = useState([]);
  useEffect(() => {
    loadBEQException();
    // This effect hook can be used to mimic the AngularJS $interval for periodic data refresh
  }, []);
  const loadBEQException = async () => {
    const data = await getGraphicalBEQException();
    setGraphData(data);
  };
  return (
    <div>
      {/* Visualization logic goes here, perhaps using a React chart library that matches the previous functionality */}
    </div>
  );
};