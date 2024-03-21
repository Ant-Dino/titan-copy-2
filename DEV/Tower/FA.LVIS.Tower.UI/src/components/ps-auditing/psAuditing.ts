import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const PsAuditingComponent = () => {
    const [hasAccess, setHasAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [filterSection, setFilterSection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [data, setData] = useState([]);
    const [busy, setBusy] = useState(false);
    const [activityright, setActivityRight] = useCookies(['activityright'])[0].activityright;
    const navigate = useNavigate();
    useEffect(() => {
        checkAccessRights();
    }, []);
    const checkAccessRights = async () => {
        if (!['Admin', 'SuperAdmin', 'User'].includes(activityright)) {
            try {
                const response = await axios.get('/api/user/getUser');
                setActivityRight(response.data.ActivityRight);
                if (['SuperAdmin', 'Admin'].includes(response.data.ActivityRight)) {
                    setHasAccess(true);
                } else {
                    showModal();
                }
            } catch (error) {
                console.error(error);
            }
        } else if (['SuperAdmin', 'Admin'].includes(activityright)) {
            setHasAccess(true);
        } else {
            showModal();
        }
    };
    const showModal = () => {
        // Note: This is a basic modal example
        alert("You are not authorized to view this page.");
        // A real implementation would involve something more elaborate
        navigate('/dashboard');
    };
    const validateDate = () => {
        setValidateError(throughDate < fromDate);
    };
    const changeSelect = (item) => {
        setDisableDate(item !== '1');
    };
    const search = async () => {
        if (filterSection === "1") {
            if (!fromDate || !throughDate || validateError) {
                alert("Please enter a valid Start/End date");
                return;
            }
            const details = {
                search: '', // Assuming there's a search term you didn't include in your code
                Fromdate: fromDate.toString(),
                ThroughDate: throughDate.toString(),
            };
            setBusy(true);
            try {
                const response = await axios.post(`api/audit/GetAuditDetails`, details);
                setData(response.data);
            } catch (error) {
                alert(error.response.data);
            }
        } else {
            setBusy(true);
            try {
                const response = await axios.get(`AuditController/GetAuditDetailsFilter/${filterSection}`);
                setData(response.data);
            } catch (error) {
                alert(error.response.data);
            }
        }
        setBusy(false);
    };
    return (
        <>
            {hasAccess ? (
                <div>
                    {/* Your component UI here */}
                    <div>
                        <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} />
                        <DatePicker selected={throughDate} onChange={(date) => setThroughDate(date)} />
                        <Button onClick={() => search()}>Search</Button>
                        {validateError && <p>Error: End date cannot be earlier than the Start date</p>}
                    </div>
                    <div>
                        {/* Assuming you have a component for displaying audit data */}
                    </div>
                </div>
            ) : (
                <p>You do not have access to this page.</p>
            )}
        </>
    );
};
export default PsAuditingComponent;