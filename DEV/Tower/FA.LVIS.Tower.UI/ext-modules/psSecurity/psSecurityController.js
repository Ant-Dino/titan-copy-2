import React, { useState, useEffect } from 'react';
import PsSecurityService from 'DEV/Tower/FA.LVIS.Tower.UI/src/services/psSecurity.service.ts';

const PsSecurityComponent = () => {
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [tenant, setTenant] = useState({});

    const refreshUserDetails = (details) => {
        setActivityRight(details.ActivityRight);
        setCanManageTEQ(details.CanManageTEQ);
        setCanManageBEQ(details.CanManageBEQ);
    };

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const response = await PsSecurityService.getCurrentUser();
                refreshUserDetails(response.data); // Simulates $rootScope.$broadcast('getUser', response)
            } catch (error) {
                console.log('Failed to fetch current user', error);
            }
        };
        if (!activityRight) {
            getUserInfo();
        }
    }, [activityRight]);

    useEffect(() => {
        if (activityRight === 'Admin' || activityRight === 'SuperAdmin') {
            setHasAccess(true);
        }
        if (activityRight === 'SuperAdmin') {
            setHasModifyAccess(true);
        }
    }, [activityRight]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PsSecurityService.getUsers();
                setServiceGridData(response.data);
            } catch (error) {
                console.log('Error fetching service grid data', error);
            }
        };
        if (activityRight) {
            fetchData();
        }
    }, [activityRight]);

    const expandAll = () => {
        console.log('Expand all rows in React Grid');
    };

    const addRow = () => {
        const newRow = {
            "ID": "",
            "UserId": "",
            "Role": "",
            "IsActive": "false",
            "EmailId": "",
            "Employeeid": "",
            "Tenant": tenant,
            "ManageBEQ": false,
            "ManageTEQ": false
        };
        setServiceGridData([...serviceGridData, newRow]);
    };

    return (
        <div>
            {hasAccess && <div>Access Granted</div>}
            {hasModifyAccess && <div>Modify Access Granted</div>}
            <button onClick={expandAll}>Expand All</button>
            <button onClick={addRow}>Add Row</button>
        </div>
    );
};
export default PsSecurityComponent;