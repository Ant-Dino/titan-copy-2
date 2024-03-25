import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const PsAuditingComponent = () => {
  const [activityRight, setActivityRight] = useState(null);
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [throughDate, setThroughDate] = useState('');
  const [dateFilterSelection, setDateFilterSelection] = useState([]);
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [busy, setBusy] = useState(false);
  const [validateError, setValidateError] = useState(false);
  const [auditData, setAuditData] = useState([]);

  useEffect(() => {
    // Assuming getUser and validateUserRights are functions that fetch user data and validate rights respectively.
    // Their actual implementations would depend on the application's structure and authentication mechanism.
    const getUserRights = async () => {
      try {
        const response = await axios.get('/api/getUserRights'); // Simulated API call
        handleUserRights(response.data);
      } catch (error) {
        console.error("Error fetching user rights", error);
      }
    };

    const handleUserRights = (data) => {
      setActivityRight(data.activityRight);
      setCanManageTEQ(data.canManageTEQ);
      setCanManageBEQ(data.canManageBEQ);
      if (['Admin', 'SuperAdmin'].includes(data.activityRight)) {
        setHasAccess(true);
      } else {
        setHasAccess(false);
        // Redirect or show modal saying user doesn't have access
      }
    };

    getUserRights();

    setDateFilterSelection([
      { 'title': 'Custom', 'value': '1' },
      { 'title': 'Last 90 Days', 'value': '90' },
      { 'title': 'Last 60 Days', 'value': '60' },
      { 'title': 'Last 30 Days', 'value': '30' },
      { 'title': 'Last 15 Days', 'value': '15' },
      { 'title': 'Last 7 Days', 'value': '7' },
      { 'title': '24 hrs', 'value': '24' },
      { 'title': 'Today', 'value': '0' }
    ]);

    let currentDate = new Date().toISOString().slice(0, 10);
    setFromDate(currentDate);
    setThroughDate(currentDate);

  }, []);

  const validateDate = () => {
    const startDate = new Date(fromDate);
    const endDate = new Date(throughDate);
    if (endDate < startDate) {
      setValidateError(true);
    } else {
      setValidateError(false);
    }
  };

  const changeSelect = (item) => {
    if (item == 1) {
      setDisableDate(false);
    } else {
      setDisableDate(true);
    }
  };

  const search = async () => {
    if (filterSection == "1") {
      if (!fromDate || !throughDate || validateError) {
        alert("Invalid date selection");
        return;
      }

      const details = {
        search: '', // Assuming there is a text search we're omitting for this task
        Fromdate: fromDate.toString(),
        ThroughDate: throughDate.toString(),
      };
      try {
        setBusy(true);
        const response = await axios.post('/api/audit/GetAuditDetails', details);
        setAuditData(response.data);
      } catch (error) {
        console.error("Failed to fetch audit data", error);
      } finally {
        setBusy(false);
      }
    }
    // Additional fetch logic can be added for other `filterSection` values.
  };

  // Initial search on component mount
  useEffect(() => {
    search();
  }, []); // Search should only be called when the component mounts, hence the empty dependency array.

  return (
    <div>
      {/* Assuming there's a UI structure here for displaying the audits, user rights, etc. */}
      {/* This will include showing the data in auditData and potentially modal dialogs or other UI elements for editAudit */}
      Your React component UI here
    </div>
  );
};

export default PsAuditingComponent;