import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { growl } from 'growl-alert';
import Modal from './Modal'; //Assuming you have a modal component for editing
const AuditingComponent = () => {
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [fromDate, setFromDate] = useState('');
    const [throughDate, setThroughDate] = useState('');
    const [dateFilterSelection, setDateFilterSelection] = useState([
        { 'title': 'Custom', 'value': '1' },
        { 'title': 'Last 90 Days', 'value': '90' },
        { 'title': 'Last 60 Days', 'value': '60' },
        { 'title': 'Last 30 Days', 'value': '30' },
        { 'title': 'Last 15 Days', 'value': '15' },
        { 'title': 'Last 7 Days', 'value': '7' },
        { 'title': '24 hrs', 'value': '24' },
        { 'title': 'Today', 'value': '0' }
    ]);
    const [filterSection, setFilterSection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [gridData, setGridData] = useState([]);
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        // Assuming getUserInfo() is the method that retrieves user information like 'activityright'
        const fetchData = async () => {
            try {
                let response = await getUserInfo();
                setActivityRight(response.ActivityRight);
                setCanManageTEQ(response.CanManageTEQ);
                setCanManageBEQ(response.CanManageBEQ);
                if (['SuperAdmin', 'Admin'].includes(response.ActivityRight)) {
                    setHasAccess(true);
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };
        fetchData();
    }, []);

    const ValidateDate = () => {
        const startDate = new Date(fromDate);
        const endDate = new Date(throughDate);
        return endDate >= startDate;
    };

    const changeSelect = (item) => {
        setDisableDate(item !== '1');
    };

    const search = async () => {
        if (filterSection === "1" && (!ValidateDate())) {
            growl.error("End date cannot be earlier than the Start date");
            return;
        }

        let url = 'AuditController/GetAuditDetailsFilter/' + filterSection;
        if (filterSection === "1") {
            url = 'api/audit/GetAuditDetails/';
        }

        try {
            setBusy(true);
            const response = await axios.get(url, {
                params: { search: '', Fromdate: fromDate, ThroughDate: throughDate },
            });
            setGridData(response.data);
        } catch (error) {
            growl.error(error.message);
        } finally {
            setBusy(false);
        }
    };

    return (
        <div>
            {/* Your JSX goes here, leaving details for brevity */}
        </div>
    );
};

export default AuditingComponent;