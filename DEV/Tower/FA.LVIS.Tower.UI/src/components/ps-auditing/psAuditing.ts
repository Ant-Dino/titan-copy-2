import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
const PsAuditingComponent = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date().toLocaleDateString('en-US'));
  const [throughDate, setThroughDate] = useState(new Date().toLocaleDateString('en-US'));
  const [dateFilterSelection, setDateFilterSelection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [busy, setBusy] = useState(false);
  const [auditingData, setAuditingData] = useState([]);
  const [validateError, setValidateError] = useState(false);
  // Assuming the Growl equivalent in React is handled by another component or external library
  const gmessage = {
    error: (msg) => alert(msg) // Placeholder for actual error handling
  };
  useEffect(() => {
    // Simulating $rootScope behaviors & UserInfo initially set up
    const userRights = sessionStorage.getItem('activityright');
    if (!['Admin', 'SuperAdmin', 'User'].includes(userRights)) {
      UserInfo.getUser().then((response) => {
        sessionStorage.setItem('activityright', response.ActivityRight);
        checkAccess(response.ActivityRight);
      });
    } else {
      checkAccess(userRights);
    }
  }, []);
  const checkAccess = (activityRight) => {
    if (activityRight === 'SuperAdmin' || activityRight === 'Admin') {
      setHasAccess(true);
    } else {
      // Logic for unauthorized access
      alert('You are not authorized to view this page.');
      // Redirect to dashboard or show modal, depending on your application's architecture
    }
  };
  const ValidateDate = () => {
    const StartDate = new Date(fromDate);
    const EndDate = new Date(throughDate);
    if (EndDate < StartDate) {
      setValidateError(true);
      gmessage.error("End date cannot be earlier than the Start date");
    } else {
      setValidateError(false);
    }
  };
  const changeSelect = (item) => {
    setDisableDate(item !== '1');
  };
  const search = () => {
    if (dateFilterSelection === '1' && (validateError || !fromDate || !throughDate)) {
      gmessage.error("Please check the selected dates");
      return;
    }
    setBusy(true);
    // You might need to adapt the endpoints or parameters according to your backend
    const Details = {
      Fromdate: fromDate.toString(),
      ThroughDate: throughDate.toString()
    };
    axios.post('api/audit/GetAuditDetails/', Details)
      .then((response) => {
        setAuditingData(response.data);
        setBusy(false);
      }).catch((error) => {
        gmessage.error(error.message);
        setBusy(false);
      });
  };
  return (
    <div>
      {/* UI elements and data presentation */}
      <button onClick={search}>Search</button>
      <button disabled={busy}> {busy ? 'Loading...' : 'Refresh'} </button>
      {/* More components such as date pickers, text inputs, and tables go here */}
    </div>
  );
};
export default PsAuditingComponent;