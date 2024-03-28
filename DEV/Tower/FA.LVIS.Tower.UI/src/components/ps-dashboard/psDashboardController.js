import React, { useState, useEffect } from 'react';
import DashboardService from 'DEV/Tower/FA.LVIS.Tower.UI/src/services/psDashboard.service.ts';
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
                const response = await DashboardService.getCurrentUser();
                setCurrentUser(response);
                setHasAccess(['Admin', 'SuperAdmin'].includes(response.ActivityRight));
                setHasBEQAccess(response.CanManageBEQ);
                setHasTEQAccess(response.CanManageTEQ);
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
            const response = await DashboardService.loadBEQExceptions();
            setBEQSummaryList(response);
        } catch (error) {
            console.error('Failed to load BEQ Exceptions:', error);
        }
    };
    const loadTEQExceptions = async () => {
        try {
            const response = await DashboardService.loadTEQExceptions();
            setTEQSummaryList(response);
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