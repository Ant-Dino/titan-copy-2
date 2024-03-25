import React, { useState, useEffect } from "react";
import axios from 'axios';
const PsAuditingComponent = () => {
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [fromDate, setFromDate] = useState('');
    const [throughDate, setThroughDate] = useState('');
    const [filterSection, setFilterSection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        // simulate getting user info
        getUserInfo();
    }, []);

    const getUserInfo = () => {
        // Placeholder for actual API call, replace with real HTTP request
        // axios.get('/api/getUserInfo').then((response) => {
        let response = { activityRight: 'Admin', CanManageTEQ: true, CanManageBEQ: true };
        setActivityRight(response.activityRight);
        setCanManageTEQ(response.CanManageTEQ);
        setCanManageBEQ(response.CanManageBEQ);
        checkAccess(response.activityRight);
        // });
    };

    const checkAccess = (right) => {
        if (right === 'Admin' || right === 'SuperAdmin') {
            setHasAccess(true);
        } else {
            setHasAccess(false);
            // redirect to dashboard
            // window.location.href = '/dashboard';
        }
    };

    const validateDate = () => {
        const StartDate = new Date(fromDate);
        const EndDate = new Date(throughDate);

        if (EndDate < StartDate) {
            setValidateError(true);
        } else {
            setValidateError(false);
        }
    };

    const changeSelect = (item) => {
        if (item === '1') {
            setDisableDate(false);
        } else {
            setDisableDate(true);
        }
    };

    const search = () => {
        // Placeholder: Implement search logic here
        setBusy(true);
        // Assuming this is where the data fetching happens, adjust as necessary
        // axios.get or axios.post calls with setBusy in .then and .catch
        // After fetching data:
        // setServiceGridData(response.data);
        // setBusy(false);
    };

    return (
        <div>
            {hasAccess ? (
                <div>
                    {/* Components and logic go here */}
                    <button onClick={search}>Search</button>
                </div>
            ) : (
                <div>You do not have access to this page.</div>
            )}
        </div>
    );
};

export default PsAuditingComponent;