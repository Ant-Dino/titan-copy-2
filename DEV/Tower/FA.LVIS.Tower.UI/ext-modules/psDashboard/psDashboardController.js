import React, { useState, useEffect } from 'react';
import axios from 'axios';
const PsDashboardController = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [isUser, setIsUser] = useState(true);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    const getCurrentUser = () => {
        // Assuming getUser returns a promise and simulating UserInfo.getUser()
        axios.get('/path/to/getUser').then(response => {
            const resData = response.data;
            setCurrentUser(resData);
            setActivityRight(resData.ActivityRight);
            setCanManageTEQ(resData.CanManageTEQ);
            setCanManageBEQ(resData.CanManageBEQ);
            setHasAccess(['Admin', 'SuperAdmin'].includes(resData.ActivityRight));
            setIsUser(!(resData.ActivityRight !== 'Admin' && resData.ActivityRight !== 'SuperAdmin' && resData.ActivityRight !== 'User'));
            setHasBEQAccess(resData.CanManageBEQ);
            setHasTEQAccess(resData.CanManageTEQ);
            LoadBEQExceptions();
            LoadTEQExceptions();
        }).catch(error => {
            console.log('Error fetching user data:', error);
        });
    };
    const LoadBEQExceptions = () => {
        axios.get('/Dashboard/BEQException/').then((response) => {
            setBEQSummaryList(response.data);
        }).catch((error) => {
            console.log('Error fetching BEQ exceptions:', error);
        });
    };
    const LoadTEQExceptions = () => {
        axios.get('/Dashboard/TEQException/').then((response) => {
            setTEQSummaryList(response.data);
        }).catch((error) => {
            console.log('Error fetching TEQ exceptions:', error);
        });
    };
    useEffect(() => {
        getCurrentUser();
        // Mimicking $interval with useEffect for data refreshing
        const BEQInterval = setInterval(LoadBEQExceptions, 900000);
        const TEQInterval = setInterval(LoadTEQExceptions, 900000);
        
        return () => {
            clearInterval(BEQInterval);
            clearInterval(TEQInterval);
        };
    }, []);
    return (
        <div>
            {/* Assuming this part for visualization purpose. */}
            {/* Visualization or usage of states (e.g., currentUser, activityRight) would go here. */}
        </div>
    );
};
export default PsDashboardController;