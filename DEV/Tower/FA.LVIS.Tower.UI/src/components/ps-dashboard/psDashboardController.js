import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardControllerReact = () => {
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);

    const getCurrentUser = async () => {
        try {
            const response = await UserInfo.getUser();
            broadcastUser(response);
            setActivityRight(response.ActivityRight);
            setCanManageTEQ(response.CanManageTEQ);
            setCanManageBEQ(response.CanManageBEQ);
            setCanManageAccessReq(response.CanAccessReq);
            LoadBEQExceptions();
            LoadTEQExceptions();
        } catch (error) {
            console.error(error);
        }
    };

    const LoadBEQExceptions = async () => {
        try {
            const { data } = await axios.get('Dashboard/BEQException/');
            setBEQSummaryList(data);
        } catch (error) {
            console.error(error);
        }
    };

    const LoadTEQExceptions = async () => {
        try {
            const { data } = await axios.get('Dashboard/TEQException/');
            setTEQSummaryList(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCurrentUser();
        const hasAccessComputed = (activityRight === 'Admin' || activityRight === 'SuperAdmin');
        const hasTEQAccessComputed = canManageTEQ;
        const hasBEQAccessComputed = canManageBEQ;
        setHasAccess(hasAccessComputed);
        setHasBEQAccess(hasBEQAccessComputed);
        setHasTEQAccess(hasTEQAccessComputed);
    }, [activityRight, canManageTEQ, canManageBEQ]);

    // Assuming broadcastUser is a global function for broadcasting to other components
    const broadcastUser = (user) => {
        // Implementation of the broadcaster
    };

    // Effect equivalents for $interval could be implemented with useEffect if needed.

    return (
        <div>
            {/* UI Components leveraging the state here */}
        </div>
    );
};

export default DashboardControllerReact;