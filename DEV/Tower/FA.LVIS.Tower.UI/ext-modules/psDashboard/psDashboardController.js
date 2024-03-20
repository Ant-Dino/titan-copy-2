import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Dashboard() {
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [canAccessReq, setCanAccessReq] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    useEffect(() => {
        getCurrentUser();
    }, []);
    const getCurrentUser = () => {
        UserInfo.getUser()
            .then(response => {
                setActivityRight(response.ActivityRight);
                setCanManageTEQ(response.CanManageTEQ);
                setCanManageBEQ(response.CanManageBEQ);
                setCanAccessReq(response.CanAccessReq);
                loadBEQExceptions();
                loadTEQExceptions();
            })
            .catch(error => console.log(error));
    };
    const loadBEQExceptions = () => {
        axios.get('Dashboard/BEQException/')
            .then(response => {
                setBEQSummaryList(response.data);
            })
            .catch(error => console.log(error));
    };
    const loadTEQExceptions = () => {
        axios.get('Dashboard/TEQException/')
            .then(response => {
                setTEQSummaryList(response.data);
            })
            .catch(error => console.log(error));
    };
    const hasAccess = (activityRight === 'Admin' || activityRight === 'SuperAdmin');
    const isUser = !(activityRight !== 'Admin' && activityRight !== 'SuperAdmin' && activityRight !== 'User');
    const hasBEQAccess = canManageBEQ;
    const hasTEQAccess = canManageTEQ;
    return (
        <div>
            <h1>Dashboard</h1>
            {hasAccess && <p>User has administrative access.</p>}
            {isUser && <p>User is a standard user.</p>}
            <div>
                <h2>BEQ Summary</h2>
                {BEQSummaryList.map(beq => (
                    <div key={beq.id}>{beq.name}</div>
                ))}
            </div>
            <div>
                <h2>TEQ Summary</h2>
                {TEQSummaryList.map(teq => (
                    <div key={teq.id}>{teq.name}</div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;