import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [hasAccess, setHasAccess] = useState(false);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    const [graphBEQData, setGraphBEQData] = useState([]);
    const [graphTEQData, setGraphTEQData] = useState([]);
    const getCurrentUser = async () => {
        try {
            const response = await axios.get('Security/GetCurrentUser/');
            setCurrentUser(response.data);
            setHasBEQAccess(response.data.CanManageBEQ);
            setHasTEQAccess(response.data.CanManageTEQ);
            const activityRight = response.data.ActivityRight;
            if (activityRight === 'Admin' || activityRight === 'SuperAdmin') {
                setHasAccess(true);
            }
            loadBEQExceptions();
            loadTEQExceptions();
        } catch (error) {
            console.error('Failed to fetch current user', error);
        }
    };
    const loadBEQExceptions = async () => {
        const { data } = await axios.get('Dashboard/BEQException/');
        setBEQSummaryList(data);
    };
    const loadTEQExceptions = async () => {
        const { data } = await axios.get('Dashboard/TEQException/');
        setTEQSummaryList(data);
    };
    const loadGraphBEQData = async () => {
        const { data } = await axios.get('Dashboard/GraphicalBEQException/');
        setGraphBEQData(data);
    };
    const loadGraphTEQData = async () => {
        const { data } = await axios.get('Dashboard/GraphicalTEQException/');
        setGraphTEQData(data);
    };
    useEffect(() => {
        getCurrentUser();
    }, []);
    return (
        <div>
            <h1>Dashboard</h1>
            {hasAccess && <div>Admin Access</div>}
            {hasBEQAccess && <div>BEQ Access</div>}
            {hasTEQAccess && <div>TEQ Access</div>}
            <h2>BEQ Summary</h2>
            <ul>
                {BEQSummaryList.map(ex => (
                    <li key={ex.ExceptionName}>{ex.ExceptionName} - {ex.NoofExceptions}</li>
                ))}
            </ul>
            <h2>TEQ Summary</h2>
            <ul>
                {TEQSummaryList.map(ex => (
                    <li key={ex.ExceptionName}>{ex.ExceptionName} - {ex.NoofExceptions}</li>
                ))}
            </ul>
        </div>
    );
};
export default Dashboard;