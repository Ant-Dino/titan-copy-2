    
"use strict";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Growl from 'react-growl-notification'; // Assuming a library for notifications similar to 'growl'

const PsReportingComponent = () => {
    const [orderToInvalidate, setOrderToInvalidate] = useState([]);
    const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
    const [loggedTenant, setLoggedTenant] = useState("");
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [isBusy, setIsBusy] = useState(false);
    const [isBusyRef, setIsBusyRef] = useState(false);
    const [showRefNum, setShowRefNum] = useState(false);
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [filterSection, setFilterSection] = useState('7');
    const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
    const [disableReferenceNo, setDisableReferenceNo] = useState(true);
    const [referenceNo, setReferenceNo] = useState('');
    const [fromDate, setFromDate] = useState(new Date().toISOString().slice(0, 10));
    const [throughDate, setThroughDate] = useState(new Date().toISOString().slice(0, 10));
    const [toggleTenant, setToggleTenant] = useState("");
    const [tenant, setTenant] = useState("");

    useEffect(() => {
        fetchTenant();
        fetchServiceGridData();
    }, []);

    const fetchTenant = async () => {
        try {
            const response = await axios.get('Security/GetTenant');
            setTenant(response.data);
            setToggleTenant(response.data);
        } catch (error) {
            console.error("Failed to fetch tenant info:", error);
        }
    };

    const fetchServiceGridData = async (searchParams) => {
        setIsBusy(true);
        try {
            const response = await axios.get('ReportingController/GetReportDetails', { params: searchParams });
            setServiceGridData(response.data);
        } catch (error) {
            console.error("Failed to fetch grid data:", error);
        } finally {
            setIsBusy(false);
        }
    };

    const inValidateOrder = async () => {
        try {
            const response = await axios.post('ReportingController/InvalidateOrderData', orderToInvalidate);
            if (response.data.length > 0) {
                Growl.error({ title: 'Error', message: 'Failed to Invalidate following Service Request ID:' + response.data.join(',') });
            } else {
                Growl.success({ title: 'Success', message: 'Record(s) Invalidated Successfully' });
                setOrderToInvalidate([]);
                setInValidBtnEnable(true);
                fetchServiceGridData(); // Assuming fetchServiceGridData is adapted to the current context (e.g., using the right searchParams)
            }
        } catch (error) {
            console.error("Failed to invalidate order:", error);
            Growl.error({ title: 'Error', message: 'Invalidate process failed due to an error.' });
        }
    };

    const search = () => {
        // Implement search functionality here
    };

    // Additional functions like handleRowSelection, validateDate, etc., can be added here.

    return (
        <div>
            {/* UI Components and logic here */}
            <Button onClick={inValidateOrder} disabled={inValidBtnEnable}>Invalidate Selected Order(s)</Button>
            {isBusy && <p>Loading...</p>}
            {/* More UI components to be added as per requirements */}
        </div>
    );
};

export default PsReportingComponent;
