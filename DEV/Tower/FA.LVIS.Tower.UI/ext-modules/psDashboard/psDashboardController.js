
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardComponent = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);

    const hasAccess = () => activityRight === 'Admin' || activityRight === 'SuperAdmin';
    const isUser = () => activityRight === 'Admin' || activityRight === 'SuperAdmin' || activityRight === 'User';
    const hasBEQAccess = () => canManageBEQ;
    const hasTEQAccess = () => canManageTEQ;

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response = await axios.get('/UserInfo/getUser');
                setCurrentUser(response.data);
                setActivityRight(response.data.ActivityRight);
                setCanManageTEQ(response.data.CanManageTEQ);
                setCanManageBEQ(response.data.CanManageBEQ);
                loadBEQExceptions();
                loadTEQExceptions();
            } catch (error) {
                console.error('There was an error!', error);
            }
        };
        getCurrentUser();
    }, []);

    const loadBEQExceptions = async () => {
        const response = await axios.get('Dashboard/BEQException/');
        setBEQSummaryList(response.data);
    };

    const loadTEQExceptions = async () => {
        const response = await axios.get('Dashboard/TEQException/');
        setTEQSummaryList(response.data);
    };

    // Alternatively, use useEffect to mimic $interval for auto-refresh if needed.
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         loadTEQExceptions();
    //         loadBEQExceptions();
    //     }, 900000); // 900000 milliseconds = 15 minutes
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div>
            {/* Render your component UI here */}
            {/* Display BEQ and TEQ summaries */}
        </div>
    );
};

export default DashboardComponent;