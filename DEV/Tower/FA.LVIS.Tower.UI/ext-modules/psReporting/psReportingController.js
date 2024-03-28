import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from './ModalComponent'; // Assuming you have a Modal component
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

const PsReportingComponent = () => {
  const [orderToInvalidate, setOrderToInvalidate] = useState([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
  const [loggedTenant, setLoggedTenant] = useState('');
  const [togglingTenant, setTogglingTenant] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [dateFilterSelection, setDateFilterSelection] = useState('7'); // Default to 'Last 7 Days'
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [disableDate, setDisableDate] = useState(true);
  const [validateError, setValidateError] = useState(false);
  const [data, setData] = useState([]);
  const [busy, setBusy] = useState(false);
  const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
  const [referenceNo, setReferenceNo] = useState('');
  const [busyRef, setBusyRef] = useState(false);
  const [disableReferenceNo, setDisableReferenceNo] = useState(true);
  const [reportTitle, setReportTitle] = useState('Orders Summary');

  useEffect(() => {
    // Assuming retrieveTenantName is the function to get tenant info
    axios.get('/Security/GetTenant').then(response => {
      setLoggedTenant(response.data);
      setTogglingTenant(response.data);
    });
    
    // Load initial data
    search();
  }, []);

  const inValidateConfirm = () => {
    // Confirm modal logic here
    if (window.confirm('Are you sure you want to Invalidate selected order(s)?')) {
      inValidateProcess();
    }
  };

  const inValidateProcess = () => {
    console.log("entered invalidate process method.");
    // Invalidate axios call here
  };

  const changeSelect = (item) => {
    setDisableDate(item !== '1');
  };

  const validateDate = () => {
    setValidateError(throughDate < fromDate);
  };

  const search = () => {
    setReportTitle('Orders Summary');
    validateDate();
    if (validateError) {
      toast.error("End date cannot be earlier than the Start date");
      return;
    }
    // Fetch data based on date range
    setBusy(true);
    // Assuming fetchData is the function to fetch data
    // Replace 'path-to-API' with the actual path and modify the request payload as needed.
    axios.post('/ReportingController/GetReportDetails/', { togglingTenant, fromDate, throughDate })
      .then(response => {
        setData(response.data);
        setBusy(false);
      });
  };

  const searchbyReferenceNo = () => {
    if (referenceNo !== '') {
      setBusyRef(true);
      // Fetch data based on reference no
      // Assuming fetchDataByReferenceNo is the function to fetch data
      setBusyRef(false);
    }
  };

  return (
    <div>
      <h2>{reportTitle}</h2>
      {/* Render your component UI here */}
      <button disabled={inValidBtnEnable} onClick={inValidateConfirm}>Invalidate Orders</button>
      {/* Dates and Filtering UI */}
      <DatePicker selected={fromDate} onChange={date => setFromDate(date)} />
      <DatePicker selected={throughDate} onChange={date => setThroughDate(date)} />
      {data.map((row, index) => (
        <div key={index}>{/* Render row data */}</div>
      ))}
      {/* Assuming Modal is a component for showing modals */}
      {busy && <Modal isOpen={busy} contentLabel="Processing..."></Modal>}
      {validateError && <div>Please correct date range.</div>}
    </div>
  );
};

export default PsReportingComponent;