import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUser } from './services/UserInfo';
import { getGraphicalTEQException } from './services/Dashboard/GraphicalTEQException';
import { getGraphicalBEQException } from './services/Dashboard/GraphicalBEQException';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    const [graphDataBEQ, setGraphDataBEQ] = useState({ labels: [], data: [] });
    const [graphDataTEQ, setGraphDataTEQ] = useState({ labels: [], data: [] });

    useEffect(() => {
        getCurrentUser();

        const intervalId = setInterval(() => {
            loadBEQExceptions();
            loadTEQExceptions();
        }, 900000); // Refresh data every 15 minutes

        return () => clearInterval(intervalId);
    }, []);

    const getCurrentUser = async () => {
        try {
            const response = await getUser();
            setCurrentUser(response);
            loadBEQExceptions();
            loadTEQExceptions();
        } catch (error) {
            console.error('Failed to fetch current user:', error);
        }
    };

    const loadBEQExceptions = async () => {
        try {
            const { data } = await axios.get('Dashboard/BEQException/');
            setBEQSummaryList(data);
        } catch (error) {
            console.error('Failed to load BEQ exceptions:', error);
        }
    };

    const loadTEQExceptions = async () => {
        try {
            const { data } = await axios.get('Dashboard/TEQException/');
            setTEQSummaryList(data);
        } catch (error) {
            console.error('Failed to load TEQ exceptions:', error);
        }
    };

    const loadGraphicalTEQException = async () => {
        const data = await getGraphicalTEQException();
        handleGraphData(data, setGraphDataTEQ);
    };

    const loadGraphicalBEQException = async () => {
        const data = await getGraphicalBEQException();
        handleGraphData(data, setGraphDataBEQ);
    };

    const handleGraphData = (graphData, setGraphData) => {
        const labels = graphData.map(item => item.Hour);
        const data = [
            graphData.map(item => item.NewCount),
            graphData.map(item => item.ActiveCount),
            graphData.map(item => item.HoldCount),
            graphData.map(item => item.ArchiveCount)
        ];
        setGraphData({ labels, data });
    };

    // Check access control and permissions
    const hasAccess = ['Admin', 'SuperAdmin'].includes(currentUser.activityright);
    const isUser = ['Admin', 'SuperAdmin', 'User'].includes(currentUser.activityright);
    const hasBEQAccess = currentUser.canmanagebeq;
    const hasTEQAccess = currentUser.canmanageteq;

    return (
        <div>
            <h1>Dashboard</h1>
            {/* Render UI based on state and permissions */}
            {hasAccess && <div>Admin Area</div>}
            {hasBEQAccess && (
                <div>
                    <h2>BEQ Summary</h2>
                    {/* Mapping Summary List for BEQ */}
                    {BEQSummaryList.map((item, index) => (
                        <div key={index}>{item.name}</div>
                    ))}
                </div>
            )}
            {hasTEQAccess && (
                <div>
                    <h2>TEQ Summary</h2>
                    {/* Mapping Summary List for TEQ */}
                    {TEQSummaryList.map((item, index) => (
                        <div key={index}>{item.name}</div>
                    ))}
                </div>
            )}
            <button onClick={loadGraphicalTEQException}>Load TEQ Graph</button>
            <button onClick={loadGraphicalBEQException}>Load BEQ Graph</button>
        </div>
    );
};

export default Dashboard;