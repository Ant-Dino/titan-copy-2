 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { growl } from '@craco/craco'; // Assuming growl functionality is handled similar
import { GetAuditDetails, GetAuditDetailsFilter } from './services/psAuditingApiUri';

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
    // Simulate UserInfo.getUser() still using promises
    axios.get('/api/userinfo').then((response) => {
      const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
      setAccessRights(ActivityRight);
      setCanManageTEQ(CanManageTEQ);
      setCanManageBEQ(CanManageBEQ);
      if (ActivityRight !== 'Admin' && ActivityRight !== 'SuperAdmin') {
        // Here you would redirect or show modal similar to the $uibModal.open logic
        alert('You are not authorized to view this page.');
      }
    });
  }, []);

  const search = () => {
    if (dateFilterSelection !== '1') {
      GetAuditDetailsFilter(dateFilterSelection).then((response) => {
        setAuditData(response.data);
      }).catch((error) => {
        growl.error(error.data);
      });
    } else {
      if (!validateDates()) {
        growl.error("Please correct the dates");
        return;
      }
      GetAuditDetails({ fromDate, throughDate }).then((response) => {
        setAuditData(response.data);
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
