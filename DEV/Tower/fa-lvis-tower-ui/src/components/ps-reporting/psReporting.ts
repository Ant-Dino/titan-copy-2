import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import growl from 'growl-alert';
import 'growl-alert/dist/growl-alert.css';
const PsReportingComponent = () => {
  const [orderToInvalidate, setOrderToInvalidate] = useState([]);
  const [invalidBtnEnable, setInvalidBtnEnable] = useState(true);
  const [loggedTenant, setLoggedTenant] = useState('');
  const [togglingTenant, setTogglingTenant] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [busy, setBusy] = useState(false);
  const [dateFilterSelection, setDateFilterSelection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [serviceGridData, setServiceGridData] = useState([]);
  const [validateError, setValidateError] = useState(false);
  const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
  const [referenceNo, setReferenceNo] = useState('');
  const [busyRef, setBusyRef] = useState(false);
  const [showRefNum, setShowRefNum] = useState(false);
  const [showDates, setShowDates] = useState(true);
  const [myNumStyle, setMyNumStyle] = useState({ color: '' });
  const [myDtStyle, setMyDtStyle] = useState({ color: '#007acc' });
  useEffect(() => {
    setLoggedTenant(localStorage.getItem('tenantname') || '');
    setTogglingTenant(localStorage.getItem('tenantname') || '');
    // Fetch initial data
    search();
  }, []);
  const inValidateConfirm = () => {
    // Similar functionality for confirming invalidation
    if (window.confirm('Are you sure you want to Invalidate selected order(s)?')) {
      inValidateProcess();
    }
  };
  const inValidateProcess = () => {
    console.log("entered invalidate process method.");
    setBusy(true);
    axios.post('api/ReportingController/InvalidateOrderData', orderToInvalidate)
      .then(response => {
        setOrderToInvalidate([]);
        const data = response.data;
        if (data && data.length > 0) {
          growl.error('Failed to Invalidate following Service Request ID: ' + data.join(','));
        } else {
          growl.success('Record(s) Invalidated Successfully');
          search(); // Refresh data
        }
        setBusy(false);
        setInvalidBtnEnable(true);
      })
      .catch(error => {
        console.error(error);
        setBusy(false);
      });
  };
  const validateDate = () => {
    if (throughDate < fromDate) {
      setValidateError(true);
      growl.error("End date cannot be earlier than the Start date");
    } else {
      setValidateError(false);
    }
  };
  const search = () => {
    console.log('Search functionality here...');
    validateDate();
    setBusy(true);
    // Example Axios call
    axios.get('api/ReportingController/GetReportDetails')
      .then(response => {
        setServiceGridData(response.data);
        setBusy(false);
      })
      .catch(error => {
        console.error(error);
        setBusy(false);
      });
  };
  const changeSelect = (item) => {
    if (item === '1') {
      setDisableDate(false);
    } else {
      setDisableDate(true);
    }
  };
  const handleFromDateChange = (date) => {
    setFromDate(date);
  };
  const handleThroughDateChange = (date) => {
    setThroughDate(date);
  };
  const ShowHide = (item) => {
    if (item === 'showdates') {
      setShowDates(true);
      setShowRefNum(false);
      setMyNumStyle({ color: '' });
      setMyDtStyle({ color: '#007acc' });
    } else if (item === 'showrefnum') {
      setShowRefNum(true);
      setShowDates(false);
      setMyDtStyle({ color: '' });
      setMyNumStyle({ color: '#007acc' });
    }
  };
  return (
    <div>
      {/* UI Components and Logic Here */}
      <Button onClick={inValidateConfirm} disabled={invalidBtnEnable}>Invalidate Selected</Button>
      <DatePicker selected={fromDate} onChange={handleFromDateChange} />
      <DatePicker selected={throughDate} onChange={handleThroughDateChange} />
      <Button onClick={() => search()}>Search</Button>
      <div>
        {serviceGridData.map((data, index) => (
          <div key={index}>{data.CustomerName}</div>
        ))}
      </div>
      {/* More components here */}
    </div>
  );
};
export default PsReportingComponent;