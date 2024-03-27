"use strict";

import React, { useState, useEffect } from 'react';
import DashboardService from 'DEV/Tower/FA.LVIS.Tower.UI/src/services/psDashboard.service';

// Conversion of DashboardController to a functional component
const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [hasAccess, setHasAccess] = useState(false);
    const [isUser, setIsUser] = useState(true);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);

    useEffect(() => {
        getCurrentUser();
        // Dependency array left empty to mimic componentDidMount behavior
    }, []);

    const getCurrentUser = () => {
        // Assuming UserInfo.getUser returns a promise similar to how axios would
        DashboardService.getCurrentUser().then((response) => {
            const responseUserData = response.data;
            setCurrentUser(responseUserData);
            setHasAccess(responseUserData.activityRight === 'Admin' || responseUserData.activityRight === 'SuperAdmin');
            setIsUser(['Admin', 'SuperAdmin', 'User'].includes(responseUserData.activityRight));
            setHasBEQAccess(responseUserData.canManageBEQ);
            setHasTEQAccess(responseUserData.canManageTEQ);
            loadBEQExceptions();
            loadTEQExceptions();
        }).catch((error) => {
            console.error("Error fetching user data:", error);
        });
    };

    const loadBEQExceptions = () => {
        DashboardService.loadBEQExceptions().then((data) => {
            setBEQSummaryList(data.data);
        }).catch((error) => {
            console.error("Error fetching BEQ exceptions:", error);
        });
    };

    const loadTEQExceptions = () => {
        DashboardService.loadTEQExceptions().then((data) => {
            setTEQSummaryList(data.data);
        }).catch((error) => {
            console.error("Error fetching TEQ exceptions:", error);
        });
    };

    return (
        <div>
            {/* JSX to display the data */}
        </div>
    );
};

export default Dashboard;