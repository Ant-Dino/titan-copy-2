import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { NotificationManager } from 'react-notifications';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function PsReportingComponent() {
    const [orderToInvalidate, setOrderToInvalidate] = useState([]);
    const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
    const [loggedTenant, setLoggedTenant] = useState('');
    const [togglingTenant, setTogglingTenant] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasSuperAccess, setHasSuperAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [filterSection, setFilterSection] = useState('7');
    const [busy, setBusy] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [validateError, setValidateError] = useState(false);
    const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
    const [referenceNo, setReferenceNo] = useState('');
    const [busyRef, setBusyRef] = useState(false);
    const [disableReferenceNo, setDisableReferenceNo] = useState(true);
    const [showDates, setShowDates] = useState(true);
    const [showRefNum, setShowRefNum] = useState(false);
    useEffect(() => {
        // Assuming fetchTenant and initial search would be available as Async functions
        fetchTenant();
        search();
    }, []);
    const fetchTenant = async () => {
        try {
            const response = await axios.get('/Security/GetTenant');
            setLoggedTenant(response.data);
            setTogglingTenant(response.data);
            // columnToggle would be handled directly inside rendering as conditional rendering
        } catch (error) {
            console.error("Failed to fetch tenant", error);
        }
    };
    const inValidateConfirm = () => {
        const confirm = window.confirm('Are you sure you want to Invalidate selected order(s)?');
        if (confirm) {
            inValidateProcess();
        }
    };
    const inValidateProcess = async () => {
        try {
            const response = await axios.post('/ReportingController/InvalidateOrderData', orderToInvalidate);
            setOrderToInvalidate([]);
            setInValidBtnEnable(true);
            search(); // Simplified refresh data after invalidation
            NotificationManager.success('Record(s) Invalidated Successfully');
        } catch (error) {
            console.error("Failed to invalidate orders", error);
        }
    };
    const search = async () => {
        setBusy(true);
        try {
            // Simplified search functionality, considering backend services respond with all necessary data.
            let response;
            if (filterSection === "1") {
                const details = {
                    Fromdate: fromDate.toISOString(),
                    ThroughDate: throughDate.toISOString(),
                };
                response = await axios.post(`/ReportingController/GetReportDetails/${togglingTenant}`, details);
            } else {
                response = await axios.get(`/ReportingController/GetReportDetailsFilter/${filterSection}/${togglingTenant}`);
            }
            setServiceGridData(response.data);
            setBusy(false);
        } catch (error) {
            console.error("Failed to search", error);
            setBusy(false);
        }
    };
    const validateDate = () => {
        setValidateError(fromDate > throughDate);
    };
    const handleChangeDate = (dateSetter) => (date) => {
        dateSetter(date);
        validateDate();
    };
    // Convert AngularJS event handlers and logic into equivalent React components and hooks as needed
    return (
        <div>
            {/* Render form elements and grid here, replacing AngularJS view syntax with React components */}
            <DatePicker selected={fromDate} onChange={handleChangeDate(setFromDate)} />
            <DatePicker selected={throughDate} onChange={handleChangeDate(setThroughDate)} />
            
            {/* Assuming a button for triggering invalidation */}
            <Button onClick={inValidateConfirm} disabled={inValidBtnEnable}>Invalidate Orders</Button>
            {/* Logic for displaying and managing grid, possibly using a library like react-table or ag-grid-react */}
            
            {busy && <div>Loading...</div>}
        </div>
    );
}
export default PsReportingComponent;