import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Convert AngularJS service psAuditingApiUri for API endpoints
const psAuditingApiUri = {
    GetAuditDetails: '/api/audit/GetAuditDetails/',
};

const PsAuditingComponent = () => {
    const [activityRight, setActivityRight] = useState(null);
    const [hasAccess, setHasAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date().toLocaleDateString('en-US'));
    const [throughDate, setThroughDate] = useState(new Date().toLocaleDateString('en-US'));
    const [filterSection, setFilterSection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [busy, setBusy] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);

    // Function equivalent to AngularJS ValidateDate
    const validateDate = () => {
        const startDate = new Date(fromDate);
        const endDate = new Date(throughDate);

        setValidateError(endDate < startDate);
    };

    // Function equivalent to AngularJS changeSelect
    const changeSelect = (item) => {
        setDisableDate(item !== '1');
    };

    // Convert AngularJS search function to React useEffect
    useEffect(() => {
        const search = () => {
            if (filterSection === "1") {
                if (!fromDate || !throughDate) {
                    // Error handling: "Please enter a valid Start/End date"
                    return;
                }

                validateDate();

                if (validateError) {
                    // Error handling: "End date cannot be earlier than the Start date";
                    return;
                }

                const details = {
                    search: '',  // Placeholder, as txtSearch is not defined in the provided AngularJS code
                    Fromdate: fromDate.toString(),
                    ThroughDate: throughDate.toString()
                };

                setBusy(true);
                axios.post(psAuditingApiUri.GetAuditDetails, details)
                    .then(response => {
                        setServiceGridData(response.data);
                        setBusy(false);
                    }).catch(error => {
                        // Error handling
                        setBusy(false);
                    });

            } else {
                setBusy(true);
                axios.get(`AuditController/GetAuditDetailsFilter/${filterSection}`)
                    .then(response => {
                        setServiceGridData(response.data);
                        setBusy(false);
                    }).catch(error => {
                        // Error handling
                        setBusy(false);
                    });
            }
        };

        search();  // Initial search on component mount or on dependencies change
    }, [filterSection, fromDate, throughDate, validateError]);

    // React component rendering
    return (
        <div>
            {/* UI components, event handling, and other React-based equivalent implementations */}
            {/* Implement access checks, display serviceGridData, and replace modal instances */}
        </div>
    );
};

export default PsAuditingComponent;