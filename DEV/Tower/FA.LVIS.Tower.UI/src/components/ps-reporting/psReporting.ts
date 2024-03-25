
"use strict";

import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import ReportingService from './ReportingService'; // Import the React service component

function PsReportingComponent({ initialTenant = '', userInfo }) {
    const [orderToInvalidate, setOrderToInvalidate] = useState([]);
    const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
    const [loggedTenant, setLoggedTenant] = useState(userInfo?.tenantname || initialTenant);
    const [activityRight, setActivityRight] = useState(userInfo?.activityright);
    const [canManageTEQ, setCanManageTEQ] = useState(userInfo?.canManageTEQ);
    const [canManageBEQ, setCanManageBEQ] = useState(userInfo?.canManageBEQ);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date().toLocaleDateString());
    const [throughDate, setThroughDate] = useState(new Date().toLocaleDateString());
    const [busy, setBusy] = useState(false);
    const [filterSection, setFilterSection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [showRefNum, setShowRefNum] = useState(false);
    const [showDates, setShowDates] = useState(true);
    const [tenant, setTenant] = useState(initialTenant);
    const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
    const [referenceNo, setReferenceNo] = useState('');

    useEffect(() => {
        if (activityRight === 'Admin' || activityRight === 'SuperAdmin') {
            setHasAccess(true);
        }
        if (activityRight === 'SuperAdmin') {
            setHasSuperAccess(true);
        }
        // Fetch initial data or perform any setup operations
        fetchInitialData();
    }, []);

    const fetchInitialData = () => {
        // Placeholder for any fetch/init operation.
    };

    const inValidateConfirm = () => {
        const confirmMessage = 'Are you sure you want to Invalidate selected order(s)?';
        if (window.confirm(confirmMessage)) {
            inValidateProcess();
        }
    };

    const inValidateProcess = async () => {
        console.log("entered invalidate process method.");
        try {
            const response = await ReportingService.invalidateOrderData(orderToInvalidate); // Use ReportingService instead
            setOrderToInvalidate([]);

            if (response.data.length > 0) {
                toast.error(`Failed to Invalidate following Service Request ID: ${response.data.join(',')}`);
                setInValidBtnEnable(true);
            } else {
                toast.success('Record(s) Invalidated Successfully');
                // Optionally refetch data or update state to reflect changes
            }
        } catch (error) {
            toast.error("Error processing request");
            // Optionally handle error, set loading state, etc.
        }
    };

    const handleRowSelectionChanged = (row) => {
        // Handle row selection state changes, updating state as needed
    };

    const search = () => {
        setBusy(true);
        // Implement search functionality
    };

    const loadRFOrder = () => {
        setTenant('RF');
        // Code to load RF Orders
    };

    const handleChangeSelect = (item) => {
        setDisableDate(item === '1' ? false : true);
    };

    const handleDateValidation = () => {
        const StartDate = new Date(fromDate);
        const EndDate = new Date(throughDate);
        if (EndDate < StartDate) {
            setValidateError(true);
        } else {
            setValidateError(false);
        }
    };

    const toggleRefNumView = (item) => {
        setShowDates(item === 'showdates');
        setShowRefNum(item === 'showrefnum');
    };

    return (
        <div>
            {/* UI Elements and components go here */}
        </div>
    );
}

export default PsReportingComponent;
