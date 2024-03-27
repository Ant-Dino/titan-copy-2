"use strict";

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // assuming axios is used for HTTP requests

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
        axios.get('/user/info').then((response) => {
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
        axios.get('Dashboard/BEQException/').then((data) => {
            setBEQSummaryList(data.data);
        }).catch((error) => {
            console.error("Error fetching BEQ exceptions:", error);
        });
    };

    const loadTEQExceptions = () => {
        axios.get('Dashboard/TEQException/').then((data) => {
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

// TEQLineCtrl and BEQLineCtrl would follow a similar transformation process,
// creating functional components using useState and useEffect as shown above.