import React, { useState, useEffect } from 'react';
import axios from 'axios';
const PsDashboard = () => {
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);

    useEffect(() => {
        getCurrentUser();
    }, []);

    const getCurrentUser = async () => {
        try {
            const response = await UserInfo.getUser();
            setActivityRight(response.ActivityRight);
            setCanManageTEQ(response.CanManageTEQ);
            setCanManageBEQ(response.CanManageBEQ);
            setCanManageAccessReq(response.CanAccessReq);
            loadBEQExceptions();
            loadTEQExceptions();
        } catch (error) {
            console.error("Error fetching user info", error);
        }
    };

    useEffect(() => {
        if (canManageBEQ) setHasBEQAccess(true);
        if (canManageTEQ) setHasTEQAccess(true);
        if (activityRight === 'Admin' || activityRight === 'SuperAdmin') setHasAccess(true);
    }, [activityRight, canManageBEQ, canManageTEQ]);

    const loadBEQExceptions = async () => {
        const response = await axios.get('Dashboard/BEQException/');
        setBEQSummaryList(response.data);
    };

    const loadTEQExceptions = async () => {
        const response = await axios.get('Dashboard/TEQException/');
        setTEQSummaryList(response.data);
    };

    return (
        <div>
            {/* Render your component UI based on state */}
        </div>
    );
};

export default PsDashboard;