import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardController = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);

    useEffect(() => {
        UserInfo.getUser().then(response => {
            setCurrentUser(response);
            setActivityRight(response.ActivityRight);
            setCanManageTEQ(response.CanManageTEQ);
            setCanManageBEQ(response.CanManageBEQ);

            const hasAccess = response.activityRight === 'Admin' || response.activityRight === 'SuperAdmin';
            const hasBEQAccess = response.CanManageBEQ;
            const hasTEQAccess = response.CanManageTEQ;

            setHasAccess(hasAccess);
            setHasBEQAccess(hasBEQAccess);
            setHasTEQAccess(hasTEQAccess);

            loadBEQExceptions();
            loadTEQExceptions();
        }).catch(error => {
            console.error('Error fetching user info:', error);
        });
    }, []);

    const loadBEQExceptions = () => {
        axios.get('Dashboard/BEQException/')
            .then(response => {
                setBEQSummaryList(response.data);
            })
            .catch(error => {
                console.error('Error loading BEQ exceptions:', error);
            });
    };

    const loadTEQExceptions = () => {
        axios.get('Dashboard/TEQException/')
            .then(response => {
                setTEQSummaryList(response.data);
            })
            .catch(error => {
                console.error('Error loading TEQ exceptions:', error);
            });
    };

    // Assuming UserInfo is an external dependency you have created
    // Replace below import with your actual UserInfo import path
    // import UserInfo from './path/to/UserInfo';

    return (
        <div>
            <h1>Dashboard</h1>
            {/* Render your component UI based on state */}
        </div>
    );
};

export default DashboardController;