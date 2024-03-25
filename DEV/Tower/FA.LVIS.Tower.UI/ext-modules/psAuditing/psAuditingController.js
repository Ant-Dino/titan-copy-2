 
"use strict";
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function PsAuditingController() {
    const [activityRight, setActivityRight] = useState();
    const [canManageTEQ, setCanManageTEQ] = useState();
    const [canManageBEQ, setCanManageBEQ] = useState();
    const [hasAccess, setHasAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date().toISOString().split('T')[0]);
    const [throughDate, setThroughDate] = useState(new Date().toISOString().split('T')[0]);
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [busy, setBusy] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [filterSection, setFilterSection] = useState('7');
    const [gmessage, setGmessage] = useState(null);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const response = await axios.get('/user/info'); // Assuming this endpoint returns the current user info
            const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
            setActivityRight(ActivityRight || 'User');
            setCanManageTEQ(CanManageTEQ);
            setCanManageBEQ(CanManageBEQ);

            if (['Admin', 'SuperAdmin'].includes(ActivityRight)) {
                setHasAccess(true);
            } else {
                // Redirect or show modal
            }
        } catch (error) {
            console.error('Failed to get user info', error);
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
        setDisableDate(!(item === '1'));
    };

    const search = async () => {
        if (filterSection === "1") {
            if (!fromDate || !throughDate) {
                setGmessage("Please enter a valid Start/End date");
                return;
            }

            validateDate();

            if (validateError) {
                setGmessage("End date cannot be earlier than the Start date");
                return;
            }
        }
        // Similar API call logic as shown below based on filterSection
    };

    return (
        <div>
            {/* Your component JSX */}
        </div>
    );
}

export default PsAuditingController;

