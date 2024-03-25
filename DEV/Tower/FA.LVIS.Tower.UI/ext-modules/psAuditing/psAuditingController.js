import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

// Assuming psAuditingApiUri service's functionality is equivalent to a base API URI definition
const BASE_API_URI = 'api/audit/GetAuditDetails/';

function PsAuditingComponent() {
    const history = useHistory();
    const [userRights, setUserRights] = useState(null);
    const [hasAccess, setHasAccess] = useState(false);
    const [gridData, setGridData] = useState([]);
    const [isBusy, setIsBusy] = useState(false);
    const [fromDate, setFromDate] = useState(formatDate(new Date()));
    const [throughDate, setThroughDate] = useState(formatDate(new Date()));
    const [dateFilterSelection, setDateFilterSelection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [validateError, setValidateError] = useState(false);

    function formatDate(date) {
        return date.toISOString().slice(0,10); // Change format if needed
    }

    useEffect(() => {
        // Mimic $rootScope activityrights check
        const activityRight = localStorage.getItem('activityright');
        if (!activityRight) {
            fetchUserRights();
        } else {
            // Assuming rights are stored as JSON
            const rights = JSON.parse(activityRight);
            setUserRights(rights);
            checkAccess(rights);
        }
    }, []);

    const fetchUserRights = async () => {
        try {
            // Assuming UserInfo.getUser equivalent exists and has been fetched
            const response = await axios.get(`/user/info`);
            localStorage.setItem('activityright', JSON.stringify(response.data));
            setUserRights(response.data);
            checkAccess(response.data);
        } catch (error) {
            console.error('Fetching user rights failed.', error);
        }
    };

    const checkAccess = (rights) => {
        if(['SuperAdmin', 'Admin'].includes(rights.activityright)) {
            setHasAccess(true);
        } else {
            alert('You are not authorized to view this page.');
            history.push('/dashboard');
        }
    };

    const validateDate = () => {
        const StartDate = new Date(fromDate);
        const EndDate = new Date(throughDate);
        setValidateError(EndDate < StartDate);
    };

    const changeSelect = (itemValue) => {
        setDisableDate(itemValue !== '1');
    };

    // Search function converted from AngularJS
    const search = async () => {
        setIsBusy(true);
        try {
            // Differentiating behavior based on the 'dateFilterSelection'
            let url = BASE_API_URI;
            if (dateFilterSelection === "1") {
                url += `Custom?fromDate=${encodeURIComponent(fromDate)}&throughDate=${encodeURIComponent(throughDate)}`;
                validateDate();
                if (validateError) {
                    alert('End date cannot be earlier than the Start date');
                    return;
                }
            } else {
                url += `GetAuditDetailsFilter/${dateFilterSelection}`;
            }

            const response = await axios.get(url);
            setGridData(response.data);
        } catch (error) {
            console.error('Search failed', error);
        } finally {
            setIsBusy(false);
        }
    };

    // Mimic componentDidMount
    useEffect(() => {
        search(); // Initial search when component mounts
    }, []);

    return (
        <div>
            <h1>Auditing Component</h1>
            {hasAccess ? (
                <div>
                    {/* Render Grid and other controls here based on React patterns */}
                </div>
            ) : (
                <p>You do not have access to view this content.</p>
            )}
        </div>
    );
}

export default PsAuditingComponent;