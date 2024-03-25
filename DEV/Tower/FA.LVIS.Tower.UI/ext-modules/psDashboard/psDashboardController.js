import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardComponent = () => {
    const [currentUser, setCurrentUser] = useState({ activityRight: '', canManageTEQ: false, canManageBEQ: false, canAccessReq: false });
    const [hasAccess, setHasAccess] = useState(false);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);

    useEffect(() => {
        getCurrentUser();
        // Load exceptions initially
        // Using setInterval here for fetching exceptions every 15 mins could be considered, 
        // but it's often better to handle such intervals outside of components or use websockets for live data
    }, []);

    useEffect(() => {
        setHasBEQAccess(currentUser.canManageBEQ);
        setHasTEQAccess(currentUser.canManageTEQ);
        const isAdminOrSuperAdmin = ['Admin', 'SuperAdmin'].includes(currentUser.activityRight);
        setHasAccess(isAdminOrSuperAdmin);
    }, [currentUser]);

    const getCurrentUser = () => {
        UserInfo.getUser()
            .then((response) => {
                setCurrentUser({
                    activityRight: response.ActivityRight,
                    canManageTEQ: response.CanManageTEQ,
                    canManageBEQ: response.CanManageBEQ,
                    canAccessReq: response.CanAccessReq,
                });
                LoadBEQExceptions();
                LoadTEQExceptions();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const LoadBEQExceptions = () => {
        axios.get('Dashboard/BEQException/')
            .then((response) => {
                setBEQSummaryList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const LoadTEQExceptions = () => {
        axios.get('Dashboard/TEQException/')
            .then((response) => {
                setTEQSummaryList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            {/* Content can go here, e.g., list of BEQ/TEQ exceptions if needed */}
        </div>
    );
}

export default DashboardComponent;