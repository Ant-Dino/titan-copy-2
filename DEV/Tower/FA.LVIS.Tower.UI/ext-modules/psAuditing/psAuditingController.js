import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useCookies } from 'react-cookie';
function PsAuditingComponent() {
    const [activityRight, setActivityRight] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [filterSection, setFilterSection] = useState('7');
    const [validateError, setValidateError] = useState(false);
    const [data, setData] = useState([]);
    const [busy, setBusy] = useState(false);
    const [cookies] = useCookies(['activityright']);
    useEffect(() => {
        let mounted = true;
        const userInfo = async () => {
            try {
                const response = await axios.get('/user/info');
                if (mounted) {
                    setActivityRight(response.data.ActivityRight);
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };
        if (!activityRight) {
            const ar = cookies.activityright;
            setActivityRight(ar || '');
        }
        userInfo();
        return () => { mounted = false; };
    }, [activityRight, cookies.activityright]);
    useEffect(() => {
        if (activityRight === 'SuperAdmin' || activityRight === 'Admin') {
            setHasAccess(true);
        } else {
            setHasAccess(false);
        }
    }, [activityRight]);
    const validateDate = () => {
        let start = new Date(fromDate);
        let end = new Date(throughDate);
        setValidateError(end < start);
    };
    const search = async () => {
        setBusy(true);
        try {
            const result = await axios.post('/api/audit/GetAuditDetails', {
                Fromdate: fromDate.toISOString(),
                ThroughDate: throughDate.toISOString(),
                FilterSection: filterSection
            });
            setData(result.data);
        } catch (error) {
            console.error('Error loading audit data:', error);
        } finally {
            setBusy(false);
        }
    };
    const handleFromDateChange = (date) => {
        setFromDate(date);
    };
    const handleThroughDateChange = (date) => {
        setThroughDate(date);
    };
    if (!hasAccess) {
        return (
            <div>You are not authorized to view this page.</div>
        );
    }
    return (
        <div>
            From Date: <DatePicker selected={fromDate} onChange={handleFromDateChange} />
            Through Date: <DatePicker selected={throughDate} onChange={handleThroughDateChange} />
            <button onClick={validateDate}>Validate Dates</button>
            <button onClick={search} disabled={busy}>Search</button>
            {validateError && <div>Error: End date cannot be earlier than the start date.</div>}
            <div>
                {data.map((item, index) => (
                    <div key={index}>{item.UserName} - {item.EventDateutc}</div>
                ))}
            </div>
        </div>
    );
}
export default PsAuditingComponent;