import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState("");
    const [activityRight, setActivityRight] = useState("");
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);

    const getCurrentUser = async () => {
        try {
            const response = await axios.get('/UserInfo');
            setCurrentUser(response.data.UserName);
            setActivityRight(response.data.ActivityRight);
            setCanManageTEQ(response.data.CanManageTEQ);
            setCanManageBEQ(response.data.CanManageBEQ);
            loadBEQExceptions();
            loadTEQExceptions();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCurrentUser();
    }, []);

    useEffect(() => {
        if(canManageBEQ){
            setHasBEQAccess(true);
        }
        if(canManageTEQ){
            setHasTEQAccess(true);
        }
        if(activityRight === 'Admin' || activityRight === 'SuperAdmin'){
            setHasAccess(true);
        }
    }, [activityRight, canManageBEQ, canManageTEQ]);

    const loadBEQExceptions = async () => {
        try {
            const response = await axios.get('Dashboard/BEQException/');
            setBEQSummaryList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const loadTEQExceptions = async () => {
        try {
            const response = await axios.get('Dashboard/TEQException/');
            setTEQSummaryList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Define other methods, like loadTEQException, loadBEQException, etc.

    return (
        <div>
            <h1>Dashboard</h1>
            {/* Render UI based on state */}
        </div>
    );
};

export default Dashboard;