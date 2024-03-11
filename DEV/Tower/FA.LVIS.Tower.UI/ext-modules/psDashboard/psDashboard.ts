import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardComponent: React.FC = () => {
    const [activityRight, setActivityRight] = useState<string>('');
    const [canManageTEQ, setCanManageTEQ] = useState<boolean>(false);
    const [canManageBEQ, setCanManageBEQ] = useState<boolean>(false);
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
    const [BEQSummaryList, setBEQSummaryList] = useState<any[]>([]);
    const [TEQSummaryList, setTEQSummaryList] = useState<any[]>([]);

    useEffect(() => {
        getCurrentUser();
    }, []);

    const getCurrentUser = async () => {
        try {
            const response = await UserInfo.getUser();
            // Assuming UserInfo.getUser() returns a promise that resolves to a response
            setActivityRight(response.ActivityRight);
            setCanManageTEQ(response.CanManageTEQ);
            setCanManageBEQ(response.CanManageBEQ);
            setCanManageAccessReq(response.CanAccessReq);
            LoadBEQExceptions();
            LoadTEQExceptions();
        } catch (error) {
            console.error("Failed to fetch current user", error);
        }
    };

    const hasAccess = ['Admin', 'SuperAdmin'].includes(activityRight);
    const isUser = ['Admin', 'SuperAdmin', 'User'].includes(activityRight);
    const hasBEQAccess = canManageBEQ;
    const hasTEQAccess = canManageTEQ;

    const LoadBEQExceptions = async () => {
        const { data } = await axios.get('Dashboard/BEQException/');
        setBEQSummaryList(data);
    };

    const LoadTEQExceptions = async () => {
        const { data } = await axios.get('Dashboard/TEQException/');
        setTEQSummaryList(data);
    };

    return (
        <div>
            {/* Assuming a display for the fetched data */}
            <h2>Dashboard</h2>
            {hasAccess && <p>You have admin access</p>}
            {hasBEQAccess && <p>You can manage BEQ</p>}
            {hasTEQAccess && <p>You can manage TEQ</p>}
            <div>
                <h3>BEQ Summary List</h3>
                {/* Assuming we simply list out the BEQ summaries here */}
                {BEQSummaryList.map((item, index) => (
                    <div key={index}>{item.name}</div> // Assuming the BEQ summary items have a 'name' field
                ))}
            </div>
            <div>
                <h3>TEQ Summary List</h3>
                {/* Assuming we simply list out the TEQ summaries here */}
                {TEQSummaryList.map((item, index) => (
                    <div key={index}>{item.name}</div> // Assuming the TEQ summary items have a 'name' field
                ))}
            </div>
        </div>
    );
};

export default DashboardComponent;