 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { growl } from 'growl-alert';
import 'growl-alert/dist/growl-alert.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// Assume the axios API calls have been imported accordingly
// import { GetReportDetails, InvalidateOrderData, GetReportDetailsFilter, GetReportDetailsbyReferenceFilter, GetTenant } from '../../services/reportingService';

const PsReportingComponent = () => {
  const [orderToInvalidate, setOrderToInvalidate] = useState([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
  const [loggedTenant, setLoggedTenant] = useState('');
  const [togglingTenant, setTogglingTenant] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [validateError, setValidateError] = useState(false);
  const [busy, setBusy] = useState(false);
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [reportData, setReportData] = useState([]);
  const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('0');
  const [referenceNo, setReferenceNo] = useState('');
  const [busyRef, setBusyRef] = useState(false);
  const [disableReferenceNo, setDisableReferenceNo] = useState(true);
  const [selectedDateFilter, setSelectedDateFilter] = useState('7');
  const [tenant, setTenant] = useState('');
  const [showrefnum, setShowrefnum] = useState(false);
  const [showdates, setShowdates] = useState(true);

  useEffect(() => {
    // Placeholder for initialization logic, like loading user info or tenant info
    const loadTenantInfo = async () => {
      const response = await axios.get('/Security/GetTenant');
      setTenant(response.data);
      setLoggedTenant(response.data);
      setTogglingTenant(response.data);
    };
    loadTenantInfo();
  }, []);

  const handleInvalidateConfirm = async () => {
    const response = await axios.post('/ReportingController/InvalidateOrderData', orderToInvalidate);
    if (response.data.length > 0) {
      growl.error('Failed to Invalidate following Service Request ID:' + response.data.join(','));
    } else {
      growl.success('Record(s) Invalidated Successfully');
      loadReportDetails();
    }
    setOrderToInvalidate([]);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setFromDate(start);
    setThroughDate(end);
    validateDate(start, end);
  };

  const validateDate = (startDate, endDate) => {
    if (endDate < startDate) {
      setValidateError(true);
    } else {
      setValidateError(false);
    }
  };

  const loadReportDetails = async () => {
    setBusy(true);
    // Example of an API call to get report details based on tenant and date or other filters
    let response;
    if (filterSection === '1') {
      response = await axios.post('/ReportingController/GetReportDetails/' + togglingTenant, { Fromdate: fromDate, ThroughDate: throughDate });
    } else {
      response = await axios.get('/ReportingController/GetReportDetailsFilter/' + filterSection + '/' + togglingTenant);
    }
    setReportData(response.data);
    setBusy(false);
  };

  const handleFilterChange = (item) => {
    if (item === '1')
      setDisableDate(false);
    else
      setDisableDate(true);
  };

  const handleSearchByReferenceNo = async () => {
    if (referenceNo !== '') {
      setBusyRef(true);
      const response = await axios.post('/ReportingController/GetReportDetailsbyReferenceFilter/' + togglingTenant, { ReferenceNoType: filterReferenceNoSection, ReferenceNo: referenceNo });
      setReportData(response.data);
      setBusyRef(false);
    }
  };

  const toggleShowDates = () => {
    setShowdates(true);
    setShowrefnum(false);
  };

  const toggleShowRefNum = () => {
    setShowdates(false);
    setShowrefnum(true);
  };

  return (
    <div>
      {/* UI Components and Logic here */}
    </div>
  );
};

export default PsReportingComponent;
