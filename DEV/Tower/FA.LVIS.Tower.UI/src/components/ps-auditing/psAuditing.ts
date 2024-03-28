import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { growl } from '@craco/craco'; // Assuming growl functionality is handled similar
import { getUserInfo, getAuditDetails, getAuditDetailsFilter } from 'DEV/Tower/FA.LVIS.Tower.UI/src/services/psAuditing.service';
const PsAuditingComponent = () => {
  const [accessRights, setAccessRights] = useState(); 
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [dateFilterSelection, setDateFilterSelection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [validateError, setValidateError] = useState(false);
  const [auditData, setAuditData] = useState([]);
  useEffect(() => {
    getUserInfo().then((response) => {
      const { ActivityRight, CanManageTEQ, CanManageBEQ } = response;
      setAccessRights(ActivityRight);
      setCanManageTEQ(CanManageTEQ);
      setCanManageBEQ(CanManageBEQ);
      if (ActivityRight !== 'Admin' && ActivityRight !== 'SuperAdmin') {
        alert('You are not authorized to view this page.');
      }
    });
  }, []);
  const search = () => {
    if (dateFilterSelection !== '1') {
      getAuditDetailsFilter({filterOption: dateFilterSelection}).then((response) => {
        setAuditData(response);
      }).catch((error) => {
        growl.error(error.data);
      });
    } else {
      if (!validateDates()) {
        growl.error("Please correct the dates");
        return;
      }
      getAuditDetails({ fromDate, throughDate }).then((response) => {
        setAuditData(response);
      }).catch((error) => {
        growl.error(error.data);
      });
    }
  };
  const validateDates = () => {
    if (throughDate < fromDate) {
      setValidateError(true);
      return false;
    }
    return true;
  };
  const handleFromDateChange = (date) => {
    setFromDate(date);
    validateDates();
  };
  const handleThroughDateChange = (date) => {
    setThroughDate(date);
    validateDates();
  };
  const changeSelect = (item) => {
    setDisableDate(item !== '1');
  };
  return (
    <div>
      <h2>Audit Management</h2>
      {/* Date Selection and Filtering UI Here */}
      <DatePicker selected={fromDate} onChange={handleFromDateChange} />
      <DatePicker selected={throughDate} onChange={handleThroughDateChange} />
      <Button onClick={search}>Search</Button>
      {validateError && <div>Please correct the dates</div>}
      {/* Displaying Audit Data Here */}
    </div>
  );
};
export default PsAuditingComponent;