import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserInfo, LoadBEQExceptions, LoadTEQExceptions, GraphicalBEQException, GraphicalTEQException } from './services/Dashboard';
const DashboardComponent = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  useEffect(() => {
    UserInfo.getUser().then(response => {
      setCurrentUser(response);
      setHasAccess(['Admin', 'SuperAdmin'].includes(response.ActivityRight));
      setHasBEQAccess(response.CanManageBEQ);
      setHasTEQAccess(response.CanManageTEQ);
      loadBEQExceptions();
      loadTEQExceptions();
    }).catch(error => {
      console.error(error);
    });
  }, []);
  const loadBEQExceptions = () => {
    LoadBEQExceptions().then(data => {
      setBEQSummaryList(data);
    }).catch(error => {
      console.error(error);
    });
  };
  const loadTEQExceptions = () => {
    LoadTEQExceptions().then(data => {
      setTEQSummaryList(data);
    }).catch(error => {
      console.error(error);
    });
  };
  return (
    <div>
      {/* UI representation here, depending on the state */}
    </div>
  );
};
export default DashboardComponent;