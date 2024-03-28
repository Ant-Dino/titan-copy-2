import React, { useState, useEffect } from 'react';
import { DashboardService as UserInfoService } from './services/psDashboard.service';
import { DashboardService as BEQExceptionService } from './services/psDashboard.service';
import { DashboardService as TEQExceptionService } from './services/psDashboard.service';
import { DashboardService as GraphicalBEQExceptionService } from './services/psDashboard.service';
import { DashboardService as GraphicalTEQExceptionService } from './services/psDashboard.service';
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
        UserInfoService.getCurrentUser().then(response => {
            setCurrentUser(response.data);
            setActivityRight(response.data.ActivityRight);
            setCanManageTEQ(response.data.CanManageTEQ);
            setCanManageBEQ(response.data.CanManageBEQ);
            setHasBEQAccess(response.data.CanManageBEQ);
            setHasTEQAccess(response.data.CanManageTEQ);
            const adminRights = ['Admin', 'SuperAdmin'];
            setHasAccess(adminRights.includes(response.data.ActivityRight));
            loadBEQExceptions();
            loadTEQExceptions();
        }).catch(error => {
            console.error('Error fetching user info:', error);
        });
    };
    const loadBEQExceptions = () => {
        BEQExceptionService.loadBEQExceptions().then(data => {
            setBEQSummaryList(data.data);
        });
    };
    const loadTEQExceptions = () => {
        TEQExceptionService.loadTEQExceptions().then(data => {
            setTEQSummaryList(data.data);
        });
    };
    const loadGraphicalBEQException = () => {
        GraphicalBEQExceptionService.loadGraphicalBEQException().then(data => {
            setLnChartData(data.data);
        });
    };
    const loadGraphicalTEQException = () => {
        GraphicalTEQExceptionService.loadGraphicalTEQException().then(data => {
            setTeqLnChartData(data.data);
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