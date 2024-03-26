import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DashboardComponent = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);
    useEffect(() => {
        UserInfo.getUser().then(response => {
            // Assuming UserInfo.getUser() is an adapted version for React
            // that behaves similarly to the original AngularJS service.
            setCurrentUser(response);
            setActivityRight(response.ActivityRight);
            setCanManageTEQ(response.CanManageTEQ);
            setCanManageBEQ(response.CanManageBEQ);

            if (response.CanManageBEQ) {
                setHasBEQAccess(true);
            }

            if (response.CanManageTEQ) {
                setHasTEQAccess(true);
            }

            const isAdminUser = ['Admin', 'SuperAdmin'].includes(response.ActivityRight);
            const isNormalUser = !isAdminUser && response.ActivityRight === 'User';

            setHasAccess(isAdminUser);
            // isUser is not directly set into state as it does not seem to be used elsewhere.

            loadBEQExceptions();
            loadTEQExceptions();
        });
    }, []);
    const loadBEQExceptions = () => {
        axios.get('Dashboard/BEQException/').then(response => {
            setBEQSummaryList(response.data);
        });
    };
    const loadTEQExceptions = () => {
        axios.get('Dashboard/TEQException/').then(response => {
            setTEQSummaryList(response.data);
        });
    };
    // Any additional logic or components such as interval functions would also be translated into 
    // React useEffect hooks or similar constructs as part of the component.
    return (
        <div>
            {/* Render UI here using the state variables */}
        </div>
    );
};
export default DashboardComponent;