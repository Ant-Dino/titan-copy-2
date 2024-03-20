 
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Modal from './Modal'; // Assuming a generic Modal component is available
import { useModal } from './useModal'; // Custom hook for modal management

const PsReportingComponent = () => {
  const [orderToInvalidate, setOrderToInvalidate] = useState([]);
  const [inValidBtnEnable, setInValidBtnEnable] = useState(true);
  const [loggedTenant, setLoggedTenant] = useState('');
  const [togglingTenant, setTogglingTenant] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [hasSuperAccess, setHasSuperAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [busy, setBusy] = useState(false);
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [showRefNum, setShowRefNum] = useState(false);
  const [showDates, setShowDates] = useState(true);
  const [validateError, setValidateError] = useState(false);
  const [cookies,,] = useCookies(['activityright']);
  const [data, setData] = useState([]);
  const [referenceNoType, setReferenceNoType] = useState('0');
  const [referenceNo, setReferenceNo] = useState('');
  const [disabledReferenceNo, setDisabledReferenceNo] = useState(true);
  const [title, setTitle] = useState('Orders Summary');
  const {isShowing, toggle} = useModal();

  useEffect(() => {
    const activityright = cookies.activityright || 'User';
    let access = activityright === 'Admin' || activityright === 'SuperAdmin';
    let superAccess = activityright === 'SuperAdmin';
    setHasAccess(access);
    setHasSuperAccess(superAccess);
    search(); // Initial search
  }, []);

  const changeDate = (dates) => {
    const [start, end] = dates;
    setFromDate(start);
    setThroughDate(end);
  };

  const validateDate = () => {
    setValidateError(throughDate < fromDate);
  };

  const search = async () => {
    validateDate();
    if (validateError) {
      NotificationManager.error("End date cannot be earlier than the Start date");
      return;
    }
    setBusy(true);
    try {
      const response = await axios.post(`/ReportingController/GetReportDetails/${togglingTenant}`, {
        Fromdate: fromDate.toISOString(),
        ThroughDate: throughDate.toISOString()
      });
      setData(response.data);
      setBusy(false);
    } catch (error) {
      setBusy(false);
      NotificationManager.error("Failed to load data");
    }
  };

  const inValidateProcess = async () => {
    try {
      const response = await axios.post('ReportingController/InvalidateOrderData', orderToInvalidate);
      if (response.data.length > 0) {
        NotificationManager.error(`Failed to Invalidate following Service Request ID: ${response.data.join(',')}`);
        setInValidBtnEnable(true);
        return;
      } else {
        NotificationManager.success('Record(s) Invalidated Successfully');
        search();
      }
    } catch (error) {
      NotificationManager.error("Failed to invalidate order(s)");
    }
  };

  const editReportRow = (row) => {
    toggle(); // Assuming toggle controls the visibility of modal
  };

  const handleChangeSelect = (item) => {
    setDisableDate(item !== '1');
  };

  const handleChangeRefSelect = (item) => {
    setDisabledReferenceNo(item === '0');
  };

  return (
    <div>
      <DatePicker
        selected={fromDate}
        onChange={changeDate}
        startDate={fromDate}
        endDate={throughDate}
        selectsRange
        inline
      />
      <button onClick={search} disabled={busy}>Search</button>
      <button onClick={inValidateProcess} disabled={inValidBtnEnable || busy}>Invalidate Selected Orders</button>
      {isShowing && <Modal />}
      {/* Display data in a table or grid */}
    </div>
  );
};

export default PsReportingComponent;
