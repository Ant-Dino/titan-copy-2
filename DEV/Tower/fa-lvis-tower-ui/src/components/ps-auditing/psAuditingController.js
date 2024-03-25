 
"use strict";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

function ConvertedAuditingController() {
    const [activityRights, setActivityRights] = useState({ activityRight: '', canManageTEQ: false, canManageBEQ: false });
    const [hasAccess, setHasAccess] = useState(false);
    const [dates, setDates] = useState({ fromDate: new Date(), throughDate: new Date() });
    const [validateError, setValidateError] = useState(false);
    const [busy, setBusy] = useState(false);
    const [auditDetails, setAuditDetails] = useState([]);
    const [filterSection, setFilterSection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);

    useEffect(() => {
        // Mimic $rootScope event getUser with useEffect hook
        const fetchUserRights = async () => {
            try {
                const response = await axios.get('/user/rights'); // Adjust URL as needed
                setActivityRights({
                    activityRight: response.data.ActivityRight,
                    canManageTEQ: response.data.CanManageTEQ,
                    canManageBEQ: response.data.CanManageBEQ
                });
            } catch(error) {
                console.log('Error fetching user rights', error);
            }
        };
        fetchUserRights();
    }, []);

    useEffect(() => {
        if (activityRights.activityRight) {
            let hasAdminAccess = ['Admin', 'SuperAdmin'].includes(activityRights.activityRight);
            setHasAccess(hasAdminAccess);
            if (!hasAdminAccess) { 
                // Handle non-admin access - Redirect or show modal
            }
        }
    }, [activityRights]);

    const searchAudits = async () => {
        setBusy(true);
        try {
            const response = await axios.post('/api/audit/GetAuditDetails', { 
                // Adjust parameters as needed
            });
            setAuditDetails(response.data);
    } catch (error) {
            console.error('Error fetching audit details', error);
        } finally {
            setBusy(false);
        }
    };

    const validateDate = () => {
        let StartDate = new Date(dates.fromDate);
        let EndDate = new Date(dates.throughDate);
        setValidateError(EndDate < StartDate);
    };

    const changeSelect = (item) => {
        setDisableDate(item !== '1');
    };

    // Render function or return statement here
    return (
        <div>
            {/* UI elements to interact with audit functionality, leveraging state variables */}
            {/* This will include date pickers, buttons, and other UI elements as needed */}
        </div>
    );
}

export default ConvertedAuditingController;
