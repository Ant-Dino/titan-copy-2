import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Modal from './Modal'; // This is a placeholder; Implement your modal component based on your project needs
import './Auditing.css'; // This is a placeholder; Implement your CSS based on your project needs
const Auditing = () => {
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [fromDate, setFromDate] = useState('');
    const [throughDate, setThroughDate] = useState('');
    const [dateFilterSelection, setDateFilterSelection] = useState('');
    const [disableDate, setDisableDate] = useState(true);
    const [busy, setBusy] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [validateError, setValidateError] = useState(false);
    const history = useHistory();
    const notify = (message) => console.log(message);
    useEffect(() => {
        // Here you would replace with actual API call
        const getUser = async () => {
            try {
                const response = await axios.get('/api/user/details');
                setActivityInfo(response.data);
            } catch (error) {
                console.error('Error fetching user details', error);
            }
        };
        getUser();
    }, []);
    const setActivityInfo = (info) => {
        setActivityRight(info.ActivityRight);
        setCanManageTEQ(info.CanManageTEQ);
        setCanManageBEQ(info.CanManageBEQ);
        if (["SuperAdmin", "Admin"].includes(info.ActivityRight)) {
            setHasAccess(true);
        } else {
            alert('You are not authorized to view this page.');
            history.push('/dashboard');
    };
    const validateDate = () => {
        const startDate = new Date(fromDate);
        const endDate = new Date(throughDate);
        if (endDate < startDate) {
            setValidateError(true);
            notify("End date cannot be earlier than the start date.");
        } else {
            setValidateError(false);
        }
    };
    const changeSelect = (item) => {
        setDisableDate(item.toString() === '1');
    };
    const search = async () => {
        if (validateError) {
            notify("Validation error.");
            return;
        }
        setBusy(true);
        try {
            let response;
            if (dateFilterSelection === '1') {
                const details = {
                    search: '', // Implement search logic as needed
                    Fromdate: fromDate,
                    ThroughDate: throughDate
                };
                response = await axios.post('/api/audit/GetAuditDetails', details);
            } else {
                response = await axios.get(`/AuditController/GetAuditDetailsFilter/${dateFilterSelection}`);
            }
            setServiceGridData(response.data);
        } catch (error) {
            notify("Error fetching audit details.");
        } finally {
            setBusy(false);
        }
    };
    const editAudit = (row) => {
        console.log('Editing row', row);
        // Open modal here
    };
    return (
        <div className="auditing-container">
            {/* Access control UI messages and redirection logic handled within useEffect */}
            <div>
                <button onClick={search} disabled={busy}>{busy ? 'Loading...' : 'Search'}</button>
            </div>
            <div>
                {serviceGridData.map((row, index) => (
                    <div key={index} onDoubleClick={() => editAudit(row)}>
                        {JSON.stringify(row)}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Auditing;