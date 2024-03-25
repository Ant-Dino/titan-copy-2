import React, { useState, useEffect } from "react";
import axios from "axios";

const DashboardComponent = ({ UserInfo }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [activityRight, setActivityRight] = useState("");
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);

  // Isolating business logic, state management, and event handling
  useEffect(() => {
    UserInfo.getUser().then((response) => {
      setCurrentUser(response);
      setActivityRight(response.ActivityRight);
      setCanManageTEQ(response.CanManageTEQ);
      setCanManageBEQ(response.CanManageBEQ);
      loadBEQExceptions();
      loadTEQExceptions();
    });
  }, [UserInfo]);

  const loadBEQExceptions = () => {
    axios.get('Dashboard/BEQException/')
      .then(({ data }) => setBEQSummaryList(data));
  };

  const loadTEQExceptions = () => {
    axios.get('Dashboard/TEQException/')
      .then(({ data }) => setTEQSummaryList(data));
  };

  // useEffect hooks for auto-refresh data every 15 minutes might be implemented here if needed

  // Converted state management from AngularJS $scope and $rootScope variables to useState
  const accessCheck = (right) => {
    return right === "Admin" || right === "SuperAdmin";
  };

  const userCheck = (right) => {
    return !(right !== "Admin" && right !== "SuperAdmin" && right !== "User");
  };

  const hasAccess = accessCheck(activityRight);
  const isUser = userCheck(activityRight);
  const hasBEQAccess = canManageBEQ;
  const hasTEQAccess = canManageTEQ;

  return (
    <div>
      <h1>React Dashboard Component</h1>
    </div>
  );
};

export default DashboardComponent;

// Note: This conversion simplifies the AngularJS controllers into a single React component.
// Additional work may be needed to split this into smaller components, handle graph data,
// and integrate with a Redux store or Context API for global state management.