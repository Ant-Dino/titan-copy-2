import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserInfoService } from './services/UserInfoService';
import { BEQExceptionService, TEQExceptionService, GraphicalBEQExceptionService, GraphicalTEQExceptionService } from './services/DashboardServices';
const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    const [lnChartData, setLnChartData] = useState({});
    const [teqLnChartData, setTeqLnChartData] = useState({});
    // Advanced access control states
    const [hasAccess, setHasAccess] = useState(false);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    useEffect(() => {
        getCurrentUser();
    }, []);
    const getCurrentUser = () => {
        UserInfoService.getUser().then(response => {
            setCurrentUser(response);
            setActivityRight(response.ActivityRight);
            setCanManageTEQ(response.CanManageTEQ);
            setCanManageBEQ(response.CanManageBEQ);
            setHasBEQAccess(response.CanManageBEQ);
            setHasTEQAccess(response.CanManageTEQ);
            const adminRights = ['Admin', 'SuperAdmin'];
            setHasAccess(adminRights.includes(response.ActivityRight));
            loadBEQExceptions();
            loadTEQExceptions();
        }).catch(error => {
            console.error('Error fetching user info:', error);
        });
    };
    const loadBEQExceptions = () => {
        BEQExceptionService.getBEQException().then(data => {
            setBEQSummaryList(data);
        });
    };
    const loadTEQExceptions = () => {
        TEQExceptionService.getTEQException().then(data => {
            setTEQSummaryList(data);
        });
    };
    const loadGraphicalBEQException = () => {
        GraphicalBEQExceptionService.getGraphicalBEQException().then(data => {
            setLnChartData(data);
        });
    };
    const loadGraphicalTEQException = () => {
        GraphicalTEQExceptionService.getGraphicalTEQException().then(data => {
            setTeqLnChartData(data);
        });
    };
    return (
        <div>
            <h2>Dashboard</h2>
            {hasAccess && <div>Admin View</div>}
            {canManageBEQ && (
                <div>
                    BEQ Exceptions:
                    {BEQSummaryList.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            )}
            {canManageTEQ && (
                <div>
                    TEQ Exceptions:
                    {TEQSummaryList.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Dashboard;