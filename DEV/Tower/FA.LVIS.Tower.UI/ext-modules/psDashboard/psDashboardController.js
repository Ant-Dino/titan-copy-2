import React, { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [accessRights, setAccessRights] = useState({
        canManageTEQ: false,
        canManageBEQ: false,
        hasAccess: false,
        hasBEQAccess: false,
        hasTEQAccess: false,
    });
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    const getCurrentUser = useCallback(() => {
        Axios.get('UserInfo/getUser').then(response => {
            // Emulating $rootScope.$broadcast with a direct method call
            // This can be improved using React context or a more complex state management solution if necessary
            const userInfo = response.data;
            setAccessRights(prevState => ({
                ...prevState,
                canManageTEQ: userInfo.CanManageTEQ,
                canManageBEQ: userInfo.CanManageBEQ,
                hasAccess: ['Admin', 'SuperAdmin'].includes(userInfo.ActivityRight),
                hasBEQAccess: userInfo.CanManageBEQ,
                hasTEQAccess: userInfo.CanManageTEQ,
            }));
            setCurrentUser(userInfo);
            LoadBEQExceptions();
            LoadTEQExceptions();
        });
    }, []);
    const LoadBEQExceptions = useCallback(() => {
        Axios.get('Dashboard/BEQException/')
            .then(response => {
                setBEQSummaryList(response.data);
            });
    }, []);
    const LoadTEQExceptions = useCallback(() => {
        Axios.get('Dashboard/TEQException/')
            .then(response => {
                setTEQSummaryList(response.data);
            });
    }, []);
    useEffect(() => {
        getCurrentUser();
        // useEffect can return a cleanup function, here would be a good place to clear intervals or subscriptions if necessary
    }, [getCurrentUser]);
    return (
        <div>
            <h1>Dashboard</h1>
            {/* Render BEQ and TEQ Exceptions as needed, depending on permissions */}
        </div>
    );
};
export default Dashboard;