import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { formatDate, validateDates, calculateDateRange } from './utils/dateUtils'; // Assume utility functions are implemented
import { errorToast, successToast } from './utils/toastNotifications'; // Assume toast notification utility functions are implemented
import { getAuditDetails, getAuditDetailsFilter } from './services/auditingService'; // Assuming Axios API calls are abstracted here
const AuditingComponent = () => {
  const [userRights, setUserRights] = useState({ activityright: '', canmanagebeq: false, canmanageteq: false });
  const [accessAllowed, setAccessAllowed] = useState(false);
  const [dates, setDates] = useState({
    fromDate: formatDate(new Date()),
    throughDate: formatDate(new Date()),
  });
  const [dateFilterSelection, setDateFilterSelection] = useState('7'); // Default to 'Last 7 Days'
  const [disableDate, setDisableDate] = useState(true);
  const [auditDetails, setAuditDetails] = useState([]);
  const [busy, setBusy] = useState(false);
  const [validateError, setValidateError] = useState(false);
  // Equivalent of onLoad in AngularJS
  useEffect(() => {
    fetchUserRights();
    // Assume fetchUserRights also sets accessAllowed based on the rights
  }, []);
  const fetchUserRights = async () => {
    try {
      const userInfo = await UserInfo.getUser(); // Assuming UserInfo.getUser() is an axios call returning user rights
      setUserRights({
        activityright: userInfo.activityRight,
        canmanagebeq: userInfo.CanManageBEQ,
        canmanageteq: userInfo.CanManageTEQ,
      });
      checkAccessRights(userInfo.activityRight);
    } catch (error) {
      errorToast('Error fetching user info');
    }
  };
  const checkAccessRights = (right) => {
    if (right === 'SuperAdmin' || right === 'Admin') {
      setAccessAllowed(true);
    } else {
      setAccessAllowed(false);
      // Redirect or show modal for no access
    }
  };
  const handleDateChange = (e, key) => {
    setDates({ ...dates, [key]: e.target.value });
  };
  const handleFilterSelection = (selection) => {
    setDateFilterSelection(selection);
    setDisableDate(selection !== '1');
  };
  const searchAuditDetails = async () => {
    if (!validateDates(dates.fromDate, dates.throughDate)) {
      setValidateError(true);
      errorToast("End date cannot be earlier than the Start date");
      return;
    } else {
      setValidateError(false);
    }

    try {
      setBusy(true);
      const data = dateFilterSelection === '1' ?
        await getAuditDetails({ ...dates }) : // Assuming getAuditDetails() is an axios call
        await getAuditDetailsFilter(dateFilterSelection); // Assuming getAuditDetailsFilter() is an axios call
      setAuditDetails(data);
      successToast('Audit details fetched successfully');
    } catch (error) {
      errorToast('Error fetching audit details');
    } finally {
      setBusy(false);
    }
  };
  if (!accessAllowed) {
    return <div>You are not authorized to view this page.</div>;
  }
  return (
    <div>
      <h2>Auditing Details</h2>
      {busy && <p>Loading...</p>}
      <div>
        <button onClick={() => handleFilterSelection('7')}>Last 7 Days</button>
        {/* Buttons for other date filters */}
      </div>
      <div>
        <input type="date" value={dates.fromDate} onChange={(e) => handleDateChange(e, 'fromDate')} disabled={disableDate} />
        <input type="date" value={dates.throughDate} onChange={(e) => handleDateChange(e, 'throughDate')} disabled={disableDate} />
        <button onClick={searchAuditDetails}>Search</button>
      </div>
      {validateError && <p>Error: Invalid date range</p>}
      <div>
        {/* Assume a table or list to display auditDetails */}
      </div>
    </div>
  );
};
export default AuditingComponent;