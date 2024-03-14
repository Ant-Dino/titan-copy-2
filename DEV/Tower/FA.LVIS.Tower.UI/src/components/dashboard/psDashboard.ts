import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [isUser, setIsUser] = useState(true);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await axios.get('/api/userInfo');
                setCurrentUser(response.data);
                setCanManageTEQ(response.data.CanManageTEQ);
                setCanManageBEQ(response.data.CanManageBEQ);
                setCanManageAccessReq(response.data.CanAccessReq);
                loadBEQExceptions();
                loadTEQExceptions();
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };
        const loadBEQExceptions = async () => {
            const response = await axios.get('/Dashboard/BEQException/');
            setBEQSummaryList(response.data);
        };
        const loadTEQExceptions = async () => {
            const response = await axios.get('/Dashboard/TEQException/');
            setTEQSummaryList(response.data);
        };
        fetchCurrentUser();
    }, []);
    useEffect(() => {
        if (canManageBEQ) setHasBEQAccess(true);
        if (canManageTEQ) setHasTEQAccess(true);
        if (currentUser.activityright === 'Admin' || currentUser.activityright === 'SuperAdmin') setHasAccess(true);
        if (currentUser.activityright !== 'Admin' && currentUser.activityright !== 'SuperAdmin' && currentUser.activityright !== 'User') setIsUser(false);
    }, [currentUser, canManageBEQ, canManageTEQ]);
    return (
        <div>
            <h2>Dashboard</h2>
            {BEQSummaryList && BEQSummaryList.map((item, index) => (
                <div key={index}>
                    <p>{item.someProperty}</p>
                </div>
            ))}
            {TEQSummaryList && TEQSummaryList.map((item, index) => (
                <div key={index}>
                    <p>{item.someProperty}</p>
                </div>
            ))}
            {hasAccess && <p>You have admin access</p>}
            {!isUser && <p>You are not a recognized user type</p>}
        </div>
    );
};
export default Dashboard;