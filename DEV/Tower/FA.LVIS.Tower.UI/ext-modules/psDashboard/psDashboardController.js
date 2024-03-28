import React, { useState, useEffect } from 'react';
import psDashboardService from './services/psDashboard.service';
const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    const getCurrentUser = async () => {
        try {
            const response = await psDashboardService.getUserInfo();
            setCurrentUser(response);
            setActivityRight(response.ActivityRight);
            setCanManageTEQ(response.CanManageTEQ);
            setCanManageBEQ(response.CanManageBEQ);
            updateAccessRights(response);
        } catch (error) {
            console.error("Failed to fetch user info", error);
        }
    };
    const updateAccessRights = (response) => {
        setHasBEQAccess(response.CanManageBEQ);
        setHasTEQAccess(response.CanManageTEQ);
        setHasAccess(['Admin', 'SuperAdmin'].includes(response.ActivityRight));
    };
    const loadBEQExceptions = async () => {
        try {
            const data = await psDashboardService.loadBEQExceptions();
            setBEQSummaryList(data);
        } catch (error) {
            console.error("Failed to load BEQ exceptions", error);
        }
    };
    const loadTEQExceptions = async () => {
        try {
            const data = await psDashboardService.loadTEQExceptions();
            setTEQSummaryList(data);
        } catch (error) {
            console.error("Failed to load TEQ exceptions", error);
        }
    };
    useEffect(() => {
        getCurrentUser();
        // Refresh data every 15 minutes
        const BEQInterval = setInterval(loadBEQExceptions, 900000);
        const TEQInterval = setInterval(loadTEQExceptions, 900000);
        return () => {
            clearInterval(BEQInterval);
            clearInterval(TEQInterval);
        };
    }, []);
    return (
        <div>
            Dashboard User: {currentUser.UserName}
            {/* Render your dashboard UI here */}
        </div>
    );
};
export default Dashboard;