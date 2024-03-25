 
﻿"use strict";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PsDashboardController = ({ UserInfo }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);

    useEffect(() => {
        UserInfo.getUser().then((response) => {
            // Broadcasting is removed, state is directly updated
            setCurrentUser(response);
            setActivityRight(response.ActivityRight);
            setCanManageTEQ(response.CanManageTEQ);
            setCanManageBEQ(response.CanManageBEQ);
            setCanManageAccessReq(response.CanAccessReq);
            LoadBEQExceptions();
            LoadTEQExceptions();
        });
    }, [UserInfo]);

    useEffect(() => {
        // Removed intervals in favor of useEffect and dependencies
        LoadTEQExceptions();
        // A delay could be added with setTimeout if needed, replacing $interval behavior
        LoadBEQExceptions();
    }, []); // Empty dependency array means this only runs once on component mount

    const LoadBEQExceptions = () => {
        axios.get('Dashboard/BEQException/')
            .then((response) => {
                setBEQSummaryList(response.data);
            });
    };

    const LoadTEQExceptions = () => {
        axios.get('Dashboard/TEQException/')
            .then((response) => {
                setTEQSummaryList(response.data);
            });
    };

    const hasAccess = activityRight === 'Admin' || activityRight === 'SuperAdmin';
    const isUser = activityRight === 'Admin' || activityRight === 'SuperAdmin' || activityRight === 'User';
    const hasBEQAccess = canManageBEQ;
    const hasTEQAccess = canManageTEQ;

    // The variables hasAccess, isUser, hasBEQAccess, and hasTEQAccess can be used directly in the render or effect hooks based on their logic. 

    return (
        <div>
            {/* Render UI based on state here */}
        </div>
    );
};

export default PsDashboardController;

/* React components for TEQLineCtrl and BEQLineCtrl would follow a similar conversion process */
