import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DatePicker, message, Button } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

const ReportingComponent = () => {
  const [orderToInvalidate, setOrderToInvalidate] = useState([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
  const [loggedTenant, setLoggedTenant] = useState('');
  const [togglingTenant, setTogglingTenant] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [fromDate, setFromDate] = useState(moment());
  const [throughDate, setThroughDate] = useState(moment());
  const [busy, setBusy] = useState(false);
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [dateFilterSelection] = useState([
    { 'title': 'Custom', 'value': '1' },
    { 'title': 'Last 90 Days', 'value': '90' },
    { 'title': 'Last 60 Days', 'value': '60' },
    { 'title': 'Last 30 Days', 'value': '30' },
    { 'title': 'Last 15 Days', 'value': '15' },
    { 'title': 'Last 7 Days', 'value': '7' },
    { 'title': '24 hrs', 'value': '24' },
    { 'title': 'Today', 'value': '0' }
  ]);
  const [validateError, setValidateError] = useState(false);
  const [tenant, setTenant] = useState('');

  useEffect(() => {
    checkAccessAndFetchTenant();
  }, []);

  const checkAccessAndFetchTenant = async () => {
    try {
      const userInfo = await axios.get('/Security/GetUserInfo');
      const { ActivityRight, CanManageTEQ, CanManageBEQ } = userInfo.data;
      if (ActivityRight === 'Admin' || ActivityRight === 'SuperAdmin') {
        setHasAccess(true);
      }
      if (ActivityRight === 'SuperAdmin') {
        setHasSuperAccess(true);
      }
      const tenantInfo = await axios.get('Security/GetTenant');
      setTenant(tenantInfo.data);
      setLoggedTenant(tenantInfo.data);
      setTogglingTenant(tenantInfo.data);
    } catch (error) {
      message.error('An error occurred while fetching user and tenant information.');
    }
  };

  const invalidateConfirm = () => {
    // Confirm Invalidate logic goes here
  };

  const invalidateProcess = () => {
    // Invalidate process logic goes here
  };

  const changeSelect = (item) => {
    if (item === '1') {
      setDisableDate(false);
    } else {
      setDisableDate(true);
    }
  };

  const validateDate = () => {
    const startDate = moment(fromDate).toDate();
    const endDate = moment(throughDate).toDate();
    if (endDate < startDate) {
      setValidateError(true);
    } else {
      setValidateError(false);
    }
  };

  const search = () => {
    // Search logic goes here
  };

  return (
    <div>
      {hasAccess && <p>You have admin or super admin access</p>}
      <DatePicker value={fromDate} onChange={setFromDate} />
      <DatePicker value={throughDate} onChange={setThroughDate} />
      <Button onClick={search} disabled={!fromDate || !throughDate || validateError}>Search</Button>
      <Button onClick={invalidateConfirm} disabled={inValidBtnEnable}>Invalidate</Button>
    </div>
  );
};

export default ReportingComponent;