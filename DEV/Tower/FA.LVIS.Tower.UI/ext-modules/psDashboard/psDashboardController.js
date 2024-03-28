import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardComponent() {
    const [currentUser, setCurrentUser] = useState({});
    const [hasAccess, setHasAccess] = useState(false);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response = await axios.get('/getUserInfo'); // Assuming '/getUserInfo' is the path to get user info
                setCurrentUser(response.data);
                setHasAccess(['Admin', 'SuperAdmin'].includes(response.data.ActivityRight));
                setHasBEQAccess(response.data.CanManageBEQ);
                setHasTEQAccess(response.data.CanManageTEQ);
                loadBEQExceptions();
                loadTEQExceptions();
            } catch (error) {
                console.error('Failed to fetch user info:', error);
            }
        };

        getCurrentUser();
    }, []);

    const loadBEQExceptions = async () => {
        try {
            const response = await axios.get('Dashboard/BEQException/');
            setBEQSummaryList(response.data);
        } catch (error) {
            console.error('Failed to load BEQ Exceptions:', error);
        }
    };

    const loadTEQExceptions = async () => {
        try {
            const response = await axios.get('Dashboard/TEQException/');
            setTEQSummaryList(response.data);
        } catch (error) {
            console.error('Failed to load TEQ Exceptions:', error);
        }
    };

    return (
        <div>
            {/* Render your component UI here based on states like hasAccess, hasBEQAccess, hasTEQAccess, BEQSummaryList, and TEQSummaryList */}
            <div>Dashboard Component</div>
        </div>
    );
}

export default DashboardComponent;