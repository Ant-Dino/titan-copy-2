import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardService from 'DEV/Tower/FA.LVIS.Tower.UI/src/services/psDashboard.service.ts';
import store from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/ps-dashboard/modules/psDashboardStore.js';
const DashboardController = () => {
  const activityRight = useSelector(state => state.dashboard.activityRight);
  const canManageTEQ = useSelector(state => state.dashboard.canManageTEQ);
  const canManageBEQ = useSelector(state => state.dashboard.canManageBEQ);
  const canManageAccessReq = useSelector(state => state.dashboard.canManageAccessReq);
  const currentUser = useSelector(state => state.dashboard.currentUser);
  const BEQSummaryList = useSelector(state => state.dashboard.BEQSummaryList);
  const TEQSummaryList = useSelector(state => state.dashboard.TEQSummaryList);
  const dispatch = useDispatch();
  useEffect(() => {
    getCurrentUser();
  }, []);
  const getCurrentUser = async () => {
    try {
      const response = await UserInfo.getUser(); // Make sure UserInfo.getUser is Promisified or use another method to fetch data
      dispatch({type: 'SET_ACTIVITY_RIGHT', payload: response.ActivityRight});
      dispatch({type: 'SET_CAN_MANAGE_TEQ', payload: response.CanManageTEQ});
      dispatch({type: 'SET_CAN_MANAGE_BEQ', payload: response.CanManageBEQ});
      dispatch({type: 'SET_CAN_MANAGE_ACCESS_REQ', payload: response.CanAccessReq});
      dispatch({type: 'SET_CURRENT_USER', payload: response});
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error(error);
    }
  };
  const loadBEQExceptions = async () => {
    const response = await DashboardService.loadBEQExceptions();
    dispatch({type: 'SET_BEQ_SUMMARY_LIST', payload: response});
  };
  const loadTEQExceptions = async () => {
    const response = await DashboardService.loadTEQExceptions();
    dispatch({type: 'SET_TEQ_SUMMARY_LIST', payload: response});
  };
  return (
    <div>
    </div>
  );
};
export default DashboardController;