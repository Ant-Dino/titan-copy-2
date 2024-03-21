import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
function PsAuditingComponent() {
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [dateFilterSelection, setDateFilterSelection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [auditData, setAuditData] = useState([]);
  const [busy, setBusy] = useState(false);
  const [validateError, setValidateError] = useState(false);
  const [cookies, setCookie] = useCookies(['activityRight']);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data: userInfo } = await Axios.get('api/user/info');
        setActivityRight(userInfo.activityRight);
        setCanManageTEQ(userInfo.canManageTEQ);
        setCanManageBEQ(userInfo.canManageBEQ);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };
    if (!activityRight) {
      fetchUserInfo();
    }
    checkAccessRights();
  }, [activityRight]);
  const checkAccessRights = () => {
    if (['Admin', 'SuperAdmin'].includes(activityRight)) {
      setHasAccess(true);
    } else {
      setHasAccess(false);
      alert('You are not authorized to view this page.');
      // Redirect to dashboard or appropriate action here
    }
  };
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setFromDate(start);
    setThroughDate(end);
  };
  const handleFilterChange = (e) => {
    setDateFilterSelection(e.target.value);
    setDisableDate(e.target.value !== '1');
  };
  const validateDate = () => {
    if (throughDate < fromDate) {
      setValidateError(true);
      return false;
    }
    setValidateError(false);
    return true;
  };
  const searchAuditDetails = async () => {
    if (!validateDate()) return;
    setBusy(true);
    
    try {
      const response = await Axios.post('api/audit/GetAuditDetails', {
        fromDate: fromDate.toISOString(),
        throughDate: throughDate.toISOString(),
      });
      setAuditData(response.data);
      setBusy(false);
    } catch (error) {
      toast.error("Error fetching audit details");
      setBusy(false);
    }
  };
  return (
    <div>
      {hasAccess ? (
        <div>
          Date Filter: 
          <select onChange={handleFilterChange} value={dateFilterSelection}>
            <option value="1">Custom</option>
            {/* Other options */}
          </select>
          <br />
          {dateFilterSelection === '1' && (
            <div>
              <DatePicker
                selected={fromDate}
                onChange={handleDateChange}
                startDate={fromDate}
                endDate={throughDate}
                selectsRange
                inline
              />
            </div>
          )}
          <Button onClick={searchAuditDetails} disabled={busy}>Search</Button>
          {busy && <p>Loading...</p>}
          {/* Display audit data */}
        </div>
      ) : (
        <p>You do not have access to view this page.</p>
      )}
    </div>
  );
}
export default PsAuditingComponent;