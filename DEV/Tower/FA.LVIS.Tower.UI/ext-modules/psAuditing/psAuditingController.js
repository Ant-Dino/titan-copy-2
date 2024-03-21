import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';
import Growl from 'react-growl-notification'; // Assuming a growl notification library compatible with React
import { getAuditDetails, getAuditDetailsFilter } from './services/auditService'; // Adjust the import path as necessary
const AuditComponent = () => {
    const history = useHistory();
    const [userRoles, setUserRoles] = useState({ activityRight: '', canManageTEQ: false, canManageBEQ: false });
    const [hasAccess, setHasAccess] = useState(false);
    const [dates, setDates] = useState({ fromDate: new Date(), throughDate: new Date() });
    const [validateError, setValidateError] = useState(false);
    const [dateFilterSelection, setDateFilterSelection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [busy, setBusy] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [gmessage, setGMessage] = useState(null);
    useEffect(() => {
        checkUserAccess();
    }, []);
    const checkUserAccess = async () => {
        try {
            const response = await axios.get('/path/to/getUser/info'); // Update with actual path
            setUserRoles({
                activityRight: response.data.ActivityRight,
                canManageTEQ: response.data.CanManageTEQ,
                canManageBEQ: response.data.CanManageBEQ
            });
            if (response.data.ActivityRight === 'Admin' || response.data.ActivityRight === 'SuperAdmin') {
                setHasAccess(true);
            } else {
                history.push('/dashboard');
            }
        } catch (error) {
            // Handle error
            console.error('Error fetching user info', error);
        }
    };
    const validateDate = () => {
        const startDate = new Date(dates.fromDate);
        const endDate = new Date(dates.throughDate);
        if (endDate < startDate) {
            setValidateError(true);
        } else {
            setValidateError(false);
        }
    };
    const changeSelect = (item) => {
        setDisableDate(item === '1');
    };
    const search = async () => {
        if (dateFilterSelection === "1" && (!dates.fromDate || !dates.throughDate)) {
            setGMessage('Please enter a valid Start/End date');
            return;
        }
        validateDate();
        if (validateError) {
            setGMessage("End date cannot be earlier than the Start date");
            return;
        }

        setBusy(true);
        try {
            const response = dateFilterSelection === "1" ? 
                await getAuditDetails({ fromdate: dates.fromDate, throughDate: dates.throughDate }) : 
                await getAuditDetailsFilter(dateFilterSelection);
            setServiceGridData(response.data);
        } catch (error) {
            setGMessage(error.message);
        } finally {
            setBusy(false);
        }
    };
    return (
        <div>
            {hasAccess ? (
                <div>
                    {/* Rest of the component like date pickers, and grid based on `serviceGridData` */}
                    <DatePicker selected={dates.fromDate} onChange={date => setDates({ ...dates, fromDate: date })} />
                    <DatePicker selected={dates.throughDate} onChange={date => setDates({ ...dates, throughDate: date })} />
                    {gmessage && <Growl message={gmessage} />}
                    <button onClick={search}>Search</button>
                    {/* Service grid here */}
                </div>
            ) : (
                <div>You are not authorized to view this page.</div>
            )}
        </div>
    );
};
export default AuditComponent;