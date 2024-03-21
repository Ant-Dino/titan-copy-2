import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUser, loadBEQExceptions, loadTEQExceptions } from '../services/dashboardService';
function Dashboard() {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [BEQSummaryList, setBEQSummaryList] = useState([]);
  const [TEQSummaryList, setTEQSummaryList] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasBEQAccess, setHasBEQAccess] = useState(false);
  const [hasTEQAccess, setHasTEQAccess] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: response } = await getUser();
        setActivityRight(response.ActivityRight);
        setCanManageTEQ(response.CanManageTEQ);
        setCanManageBEQ(response.CanManageBEQ);
        if (response.CanManageBEQ) {
          setHasBEQAccess(true);
        }
        if (response.CanManageTEQ) {
          setHasTEQAccess(true);
        }
        if (['Admin', 'SuperAdmin'].includes(response.ActivityRight)) {
          setHasAccess(true);
        }
        loadExceptionData();
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };
    const loadExceptionData = async () => {
      if (canManageBEQ) {
        const beqData = await loadBEQExceptions();
        setBEQSummaryList(beqData);
      }
      if (canManageTEQ) {
        const teqData = await loadTEQExceptions();
        setTEQSummaryList(teqData);
      }
    };
    fetchUserData();
  }, [canManageBEQ, canManageTEQ]);
  return (
    <div>
      <h1>Dashboard</h1>
      {hasAccess && <p>User has access</p>}
      {hasBEQAccess && <p>User can manage BEQ</p>}
      {hasTEQAccess && <p>User can manage TEQ</p>}
      <div>
        <h2>BEQ Summary</h2>
        {BEQSummaryList.map(beq => (
          <p key={beq.id}>{beq.name}</p>
        ))}
      </div>
      <div>
        <h2>TEQ Summary</h2>
        {TEQSummaryList.map(teq => (
          <p key={teq.id}>{teq.name}</p>
        ))}
      </div>
    </div>
  );
}