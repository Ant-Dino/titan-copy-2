import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Dashboard() {
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
    useEffect(() => {
        getCurrentUser();
    }, []);
    const getCurrentUser = () => {
        UserInfo.getUser()
            .then(response => {
                // This would be the place for the event equivalent in React
                setCurrentUser(response);
                setActivityRight(response.ActivityRight);
                setCanManageTEQ(response.CanManageTEQ);
                setCanManageBEQ(response.CanManageBEQ);
                setCanManageAccessReq(response.CanAccessReq);
                loadBEQExceptions();
                loadTEQExceptions();

                checkAccessRights(response);
            })
            .catch(error => {
                console.error("Failed to fetch user", error);
            });
    };
    const checkAccessRights = (response) => {
        if (response.CanManageBEQ) {
            setHasBEQAccess(true);
        }
        if (response.CanManageTEQ) {
            setHasTEQAccess(true);
        }
        if (['Admin', 'SuperAdmin'].includes(response.ActivityRight)) {
            setHasAccess(true);
        }
        if (!['Admin', 'SuperAdmin', 'User'].includes(response.ActivityRight)) {
            setIsUser(false);
        }
    };
    const loadBEQExceptions = () => {
        axios.get('Dashboard/BEQException/')
            .then(response => {
                setBEQSummaryList(response.data);
            })
            .catch(error => {
                console.error("Failed to load BEQ Exceptions", error);
            });
    };
    const loadTEQExceptions = () => {
        axios.get('Dashboard/TEQException/')
            .then(response => {
                setTEQSummaryList(response.data);
            })
            .catch(error => {
                console.error("Failed to load TEQ Exceptions", error);
            });
    };
    // Similar conversions would be needed for TEQLineCtrl and BEQLineCtrl
    // including converting $http calls to axios and $scope usage to useState
    return (
        <div>
            {/* Render UI here using state variables */}
        </div>
    );
}
export default Dashboard;