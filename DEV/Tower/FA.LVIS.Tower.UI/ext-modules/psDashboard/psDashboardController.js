import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DashboardComponent = () => {
    const [user, setUser] = useState({});
    const [hasAccess, setHasAccess] = useState(false);
    const [isUser, setIsUser] = useState(true);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    useEffect(() => {
        getCurrentUser();
    }, []);
    const getCurrentUser = async () => {
        try {
            const { data } = await axios.get('/UserInfo/getUser');
            setUser(data);
            setHasAccess(data.activityright === 'Admin' || data.activityright === 'SuperAdmin');
            setIsUser(['Admin', 'SuperAdmin', 'User'].includes(data.activityright));
            setHasBEQAccess(data.CanManageBEQ);
            setHasTEQAccess(data.CanManageTEQ);
            LoadBEQExceptions();
            LoadTEQExceptions();
        } catch (error) {
            console.error('Error fetching user data', error);
        }
    };
    const LoadBEQExceptions = async () => {
        try {
            const { data } = await axios.get('Dashboard/BEQException/');
            setBEQSummaryList(data);
        } catch (error) {
            console.error('Error fetching BEQ Exceptions', error);
        }
    };
    const LoadTEQExceptions = async () => {
        try {
            const { data } = await axios.get('Dashboard/TEQException/');
            setTEQSummaryList(data);
        } catch (error) {
            console.error('Error fetching TEQ Exceptions', error);
        }
    };
    return (
        <div>
            <h1>Dashboard</h1>
            {hasAccess && <div>You have administrative access</div>}
            {BEQSummaryList && BEQSummaryList.map((exception, index) => (
                <div key={index}>{exception}</div>
            ))}
            {TEQSummaryList && TEQSummaryList.map((exception, index) => (
                <div key={index}>{exception}</div>
            ))}
        </div>
    );
};
export default DashboardComponent;