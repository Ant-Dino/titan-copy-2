 
"use strict";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Alert } from 'react-bootstrap';
import 'react-growl-alert/dist/index.css';
import { Growl } from 'react-growl-alert';

// Conversion from AngularJS Controller to React Component
const PsReportingComponent = () => {
    // Converted $scope and $rootScope variables into useState hooks
    const [orderToInvalidate, setOrderToInvalidate] = useState([]);
    const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
    const [loggedTenant, setLoggedTenant] = useState('');
    const [togglingTenant, setTogglingTenant] = useState('');
    const [activityright, setActivityRight] = useState('');
    const [canmanageteq, setCanManageTEQ] = useState('');
    const [canmanagebeq, setCanManageBEQ] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [busy, setBusy] = useState(false);
    const [filterSection, setFilterSection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [fromDate, setFromDate] = useState('');
    const [throughDate, setThroughDate] = useState('');
    const [validateError, setValidateError] = useState(false);
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    // Similar to $rootScope.$on
    useEffect(() => {
        // Event listener or subscription logic here
        // Mocking an update for demo purposes
        setLoggedTenant('TenantName');
        setTogglingTenant('TenantName');
        setActivityRight('SuperAdmin'); // assuming a value for demo purposes
        setCanManageTEQ(true);
        setCanManageBEQ(true);

        // would usually fetch this from cookies or a service
        // Mocking conditional access for demo purposes
        if (['Admin', 'SuperAdmin'].includes(activityright)) {
            setHasAccess(true);
        }
        if (activityright === 'SuperAdmin') {
            setHasSuperAccess(true);
        }
    }, [activityright]);

    // Converted functions and logic
    const inValidateConfirm = () => {
        // Confirmation logic
    };

    const inValidateProcess = () => {
        setBusy(true);
        // Assuming Invalidate API call
        axios.post('ReportingController/InvalidateOrderData', orderToInvalidate)
            .then(response => {
                if (response.data.length === 0) {
                    setAlert({ show: true, msg: 'Record(s) Invalidated Successfully', type: 'success' });
                    search(); // Refresh the data
                } else {
                    setAlert({ show: true, msg: 'Failed to Invalidate following Service Request ID: ' + response.data.join(','), type: 'error' });
                }
                setOrderToInvalidate([]);
                setInValidBtnEnable(true);
                setBusy(false);
            })
            .catch(error => {
                setAlert({ show: true, msg: 'An error occurred', type: 'error' });
                setBusy(false);
            });
    };

    const search = () => {
        // API Call to fetch data
        setBusy(true);
        // Assuming example API call
        axios.get('ReportingController/GetReportDetailsFilter/' + filterSection + '/' + togglingTenant)
            .then(response => {
                setServiceGridData(response.data);
                setBusy(false);
            })
            .catch(error => {
                setAlert({ show: true, msg: 'Failed to fetch data', type: 'error' });
                setBusy(false);
            });
    };

    // Converted business logic, state management and event handling
    useEffect(() => {
        search(); // Initial load
    }, [filterSection, togglingTenant]); // Dependencies

    return (
        <div>
            {alert.show && <Growl type={alert.type} message={alert.msg} />}
            {busy && <div>Loading...</div>}
            {/* UI elements and data presentation */}
            <Button onClick={inValidateConfirm} disabled={!inValidBtnEnable}>Invalidate Selected Orders</Button>
            {/* Additional UI components here */}
        </div>
    );
};

export default PsReportingComponent;
