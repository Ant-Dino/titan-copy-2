import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
const PsAuditingComponent = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [throughDate, setThroughDate] = useState('');
  const [validateError, setValidateError] = useState(false);
  const [busy, setBusy] = useState(false);
  const [serviceGridData, setServiceGridData] = useState([]);
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  useEffect(() => {
    checkAccess();
    fetchInitialData();
  }, []);
  const fetchInitialData = () => {
    const currentDate = new Date().toISOString().slice(0, 10);
    setFromDate(currentDate);
    setThroughDate(currentDate);
  };
  const checkAccess = async () => {
    try {
      const { data: user } = await axios.get('/api/user');
      if (['SuperAdmin', 'Admin'].includes(user.activityRight)) {
        setHasAccess(true);
      } else {
        // Redirect or show access denied message
      }
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };
  const search = async () => {
    setBusy(true);
    if (filterSection === "1") {
      if (!fromDate || !throughDate || validateError) {
        setBusy(false);
        return;
      }
      try {
        // make sure you include header information as needed (e.g., authorization)
        const { data } = await axios.post('api/audit/GetAuditDetails', { Fromdate: fromDate, ThroughDate: throughDate });
        setServiceGridData(data);
      } catch (error) {
        console.error('Error fetching audit details', error);
      }
    } else {
      try {
        const { data } = await axios.get(`AuditController/GetAuditDetailsFilter/${filterSection}`);
        setServiceGridData(data);
      } catch (error) {
        console.error('Error fetching audit details by filter', error);
      }
    }
    setBusy(false);
  };
  return (
    <div>
      {/* Implement UI here based on the state */}
    </div>
  );
};
export default PsAuditingComponent;