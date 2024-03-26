import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
const PsAuditingComponent = () => {
    const [activityRight, setActivityRight] = useState(null);
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [fromDate, setFromDate] = useState(new Date());
    const [throughDate, setThroughDate] = useState(new Date());
    const [dateFilterSelection, setDateFilterSelection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [busy, setBusy] = useState(false);
    const [filterSection, setFilterSection] = useState('');
    const [gMessage, setGMessage] = useState('');
    useEffect(() => {
        checkAccessRights();
    }, [activityRight]);
    const checkAccessRights = () => {
        const rights = ['Admin', 'SuperAdmin'];
        if (rights.includes(activityRight)) {
            setHasAccess(true);
        } else {
            setHasAccess(false);
            // Assuming this is where you would redirect or show a modal
            alert('You are not authorized to view this page.');
            // Redirect logic or modal opening logic comes here
        }
    };
    const fetchData = async (details) => {
        setBusy(true);
        try {
            const response = await axios.post('api/audit/GetAuditDetails/', details);
            setServiceGridData(response.data);
        } catch (error) {
            setGMessage('Error fetching data');
        } finally {
            setBusy(false);
        }
    };
    const validateDate = () => {
        setValidateError(new Date(throughDate) < new Date(fromDate));
    };
    const changeSelect = (item) => {
        setDisableDate(item !== '1');
    };
   // Additional logic and handlers (such as for modal opening, closing, form submissions etc.) would go here
    return (
        <div>
            {hasAccess ? (
                <div>
                    {/* Your component UI here */}
                </div>
            ) : (
                <p>You do not have permission to view this content.</p>
            )}
        </div>
    );
};
export default PsAuditingComponent;