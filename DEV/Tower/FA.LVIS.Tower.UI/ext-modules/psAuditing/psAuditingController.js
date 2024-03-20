import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
function AuditingComponent() {
    const [activityRight, setActivityRight] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [validateError, setValidateError] = useState(false);
    const [disableDate, setDisableDate] = useState(true);
    const [busy, setBusy] = useState(false);
    const [auditData, setAuditData] = useState([]);
    const history = useHistory();
    useEffect(() => {
        getUserInfo();
    }, []);
    const getUserInfo = async () => {
        try {
            const response = await axios.get('/api/user/info'); // Assuming this endpoint exists
            setActivityRight(response.data.activityRight);
            if (['Admin', 'SuperAdmin'].includes(response.data.activityRight)) {
                setHasAccess(true);
            } else {
                toast.error('You are not authorized to view this page.');
                history.push('/dashboard');
            }
        } catch (error) {
            toast.error('Error fetching user info');
        }
    };
    const validateDate = () => {
        if (throughDate < fromDate) {
            setValidateError(true);
            toast.error("End date cannot be earlier than the Start date");
        } else {
            setValidateError(false);
        }
    };
    const search = async () => {
        if (validateError) return;
        setBusy(true);
        try {
            const response = await axios.post('/api/audit/GetAuditDetails', {
                fromDate: fromDate,
                throughDate: throughDate,
            });
            setAuditData(response.data);
            toast.success('Data fetched successfully');
        } catch (error) {
            toast.error('Error fetching audit details');
        } finally {
            setBusy(false);
        }
    };
    const handleFromDateChange = (date) => {
        setFromDate(date);
        validateDate();
    };
    const handleThroughDateChange = (date) => {
        setThroughDate(date);
        validateDate();
    };
    if (!hasAccess) {
        return <div>You are not authorized to view this page.</div>
    }
    return (
        <>
            <h2>Auditing</h2>
            <div>
                <DatePicker selected={fromDate} onChange={handleFromDateChange} />
                <DatePicker selected={throughDate} onChange={handleThroughDateChange} />
                <Button onClick={search} disabled={busy}>Search</Button>
            </div>
            {busy ? 
                <p>Loading...</p> : 
                <div>
                    {auditData.map((audit, index) => (
                        <div key={index}>{audit.UserName} - {audit.EventDateutc}</div>
                    ))}
                </div>
            }
        </>
    );
}
export default AuditingComponent;