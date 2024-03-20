import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useCookies } from 'react-cookie';
import { NotificationManager } from 'react-notifications';
const AuditingComponent = () => {
    const [activityRight, setActivityRight] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [dateFilterSelection, setDateFilterSelection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [auditData, setAuditData] = useState([]);
    const [validateError, setValidateError] = useState(false);
    const [cookies, setCookie] = useCookies(['activityright']);
    useEffect(() => {
        let right = cookies.activityright || activityRight;
        if (!right) {
            getUserInfo();
        } else {
            setActivityRight(right);
            checkAccess(right);
        }
    }, [activityRight, cookies.activityright]);
    const getUserInfo = async () => {
        try {
            const response = await axios.get('/api/userInfo');
            setActivityRight(response.data.ActivityRight);
            checkAccess(response.data.ActivityRight);
        } catch (error) {
            console.log('Error fetching user info:', error);
        }
    };
    const checkAccess = (right) => {
        if (right === 'SuperAdmin' || right === 'Admin') {
            setHasAccess(true);
        } else {
            setHasAccess(false);
            alert('You are not authorized to view this page.');
        }
    };
    const validateDate = () => {
        setValidateError(throughDate < fromDate);
    };
    const handleDateFilterChange = (value) => {
        setDateFilterSelection(value);
        setDisableDate(value === '1' ? false : true);
    };
    const search = async () => {
        if (dateFilterSelection === "1") {
            if (!fromDate || !throughDate) {
                NotificationManager.error("Please enter a valid Start/End date");
                return;
            }
            validateDate();
            if (validateError) return;
            try {
                const response = await axios.post('/api/audit/GetAuditDetails', {
                    Fromdate: fromDate.toISOString(),
                    ThroughDate: throughDate.toISOString()
                });
                setAuditData(response.data);
            } catch (error) {
                console.log('Error fetching audit details:', error);
            }
        } else {
            try {
                const response = await axios.get(`/api/audit/GetAuditDetailsFilter/${dateFilterSelection}`);
                setAuditData(response.data);
            } catch (error) {
                console.log('Error fetching audit details with filter:', error);
            }
        }
    };
    return (
        <div>
            {!hasAccess ? (
                <div>You do not have access to this page</div>
            ) : (
                <div>
                    <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} />
                    <DatePicker selected={throughDate} onChange={(date) => setThroughDate(date)} />
                    <button onClick={validateDate}>Validate Date</button>
                    <button onClick={search}>Search</button>
                    {auditData && auditData.length > 0 && <div>Render audit data here</div>}
                </div>
            )}
        </div>
    );
};
export default AuditingComponent;