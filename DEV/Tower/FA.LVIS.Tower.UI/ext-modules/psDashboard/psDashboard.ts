import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PsDashboardTemplate } from './psDashboardTemplate'; // Assuming PsDashboardTemplate is the converted component

const PsDashboard: React.FC = () => {
    const [activityRight, setActivityRight] = useState<string>('');
    const [canManageTEQ, setCanManageTEQ] = useState<boolean>(false);
    const [canManageBEQ, setCanManageBEQ] = useState<boolean>(false);
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
    const [hasAccess, setHasAccess] = useState<boolean>(false);
    const [isUser, setIsUser] = useState<boolean>(true);
    const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
    const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);
    const [BEQSummaryList, setBEQSummaryList] = useState<any[]>([]);
    const [TEQSummaryList, setTEQSummaryList] = useState<any[]>([]);

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response = await axios.get('/user/info');
                const userData = response.data;

                setActivityRight(userData.ActivityRight);
                setCanManageTEQ(userData.CanManageTEQ);
                setCanManageBEQ(userData.CanManageBEQ);
                setCanManageAccessReq(userData.CanAccessReq);

                loadBEQExceptions();
                loadTEQExceptions();
            } catch (error) {
                console.error('There was an error fetching the user data:', error);
            }
        };

        getCurrentUser();
    }, []);

    useEffect(() => {
        setHasBEQAccess(canManageBEQ);
        setHasTEQAccess(canManageTEQ);
        setHasAccess(['Admin', 'SuperAdmin'].includes(activityRight));
        setIsUser(['Admin', 'SuperAdmin', 'User'].includes(activityRight));
    }, [activityRight, canManageBEQ, canManageTEQ]);

    const loadBEQExceptions = async () => {
        try {
            const response = await axios.get('/Dashboard/BEQException/');
            setBEQSummaryList(response.data);
        } catch (error) {
            console.error('Error loading BEQ exceptions:', error);
        }
    };

    const loadTEQExceptions = async () => {
        try {
            const response = await axios.get('/Dashboard/TEQException/');
            setTEQSummaryList(response.data);
        } catch (error) {
            console.error('Error loading TEQ exceptions:', error);
        }
    };

    // Leaving interval functionality commented out. The same mechanism can be achieved using useEffect with setInterval,
    // but beware of memory leaks and ensure to clear the interval when the component unmounts.

    return (
        <PsDashboardTemplate
            canManageAccessReq={canManageAccessReq}
            hasAccess={hasAccess}
            hasBEQAccess={hasBEQAccess}
            hasTEQAccess={hasTEQAccess}
            BEQSummaryList={BEQSummaryList}
            TEQSummaryList={TEQSummaryList}
        />
    );
};

export default PsDashboard;