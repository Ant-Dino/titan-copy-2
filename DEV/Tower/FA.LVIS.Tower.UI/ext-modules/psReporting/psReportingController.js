 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DatePicker, Select, Button, Modal, notification } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

const initialState = {
  orderToInvalidate: [],
  inValidBtnEnable: true,
  loggedTenant: '',
  togglingTenant: '',
  hasAccess: false,
  hasSuperAccess: false,
  fromDate: moment().format('MM/DD/YYYY'),
  thruDate: moment().format('MM/DD/YYYY'),
  busy: false,
  filterSection: '7',
  validateError: false,
  filterReferenceNoSection: '0',
  referenceNo: '',
  busyRef: false,
  disableReferenceNo: true,
  showRefNum: false,
  showDates: true,
};

const DateFilterOptions = [
  { title: 'Custom', value: '1' },
  { title: 'Last 90 Days', value: '90' },
  { title: 'Last 60 Days', value: '60' },
  { title: 'Last 30 Days', value: '30' },
  { title: 'Last 15 Days', value: '15' },
  { title: 'Last 7 Days', value: '7' },
  { title: '24 hrs', value: '24' },
  { title: 'Today', value: '0' },
];

const ReferenceNoFilterOptions = [
  { title: '---Select---', value: '0' },
  { title: 'External Reference Number', value: '1' },
  { title: 'Internal Reference Number', value: '2' },
  { title: 'Customer Reference Number', value: '3' },
  { title: 'Internal Reference Id', value: '4' },
];

function ReportingComponent() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const loggedTenant = sessionStorage.getItem('tenantname');
    let activityright = sessionStorage.getItem('activityright');

    if (!activityright) {
      // Assuming getUserInfo is the service to fetch user details
      getUserInfo().then((response) => {
        setState(prevState => ({ ...prevState, ...response }));
      });
    }

    if (['Admin', 'SuperAdmin'].includes(activityright)) {
      setState(prevState => ({ ...prevState, hasAccess: true }));
    }
    if (activityright === 'SuperAdmin') {
      setState(prevState => ({ ...prevState, hasSuperAccess: true }));
    }

  }, []);

  const getUserInfo = async () => {
    try {
      const response = await axios.get('/path/to/user/info'); // Update with actual API endpoint
      return response.data;
    } catch (error) {
      console.error('Failed to fetch user info', error);
    }
  };

  const handleChange = (e, key) => {
    const { value } = e.target;
    setState(prevState => ({ ...prevState, [key]: value }));
  };

  const handleDateChange = (date, dateString, key) => {
    setState(prevState => ({ ...prevState, [key]: dateString }));
  };

  const invalidateConfirm = () => {
    Modal.confirm({
      title: 'Are you sure you want to Invalidate selected order(s)?',
      onOk: invalidateProcess,
    });
  };

  const invalidateProcess = async () => {
    try {
      const response = await axios.post('/path/to/invalidate', state.orderToInvalidate);
      if (response.data.length > 0) {
        notification.error({
          message: 'Failed',
          description: 'Failed to invalidate following Service Request ID:' + response.data.join(','),
        });
      } else {
        loadReport();
        notification.success({
          message: 'Success',
          description: 'Record(s) invalidated successfully',
        });
      }
    } catch (error) {
      console.error('Failed to invalidate orders', error);
    }
  };

  const loadReport = async () => {
    // Implementation for fetching reports
  };

  const validateDate = () => {
    const startDate = moment(state.fromDate);
    const endDate = moment(state.thruDate);

    if (endDate.isBefore(startDate)) {
      setState(prevState => ({ ...prevState, validateError: true }));
    }
  };

  return (
    <div>
      {/* UI Elements for the component */}
    </div>
  );
}

export default ReportingComponent;
