 
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import growl from 'growl-alert';
import 'growl-alert/dist/growl-alert.css';
import { useHistory } from 'react-router-dom';
import PsAuditingService from 'DEV/Tower/FA.LVIS.Tower.UI/src/services/psAuditing.service.ts';
const PsAuditingComponent = () => {
  const history = useHistory();
  const [activityRight, setActivityRight] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [busy, setBusy] = useState(false);
  const [auditData, setAuditData] = useState([]);
  const [validateError, setValidateError] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userInfo = await PsAuditingService.fetchUserInfo();
        const { ActivityRight, CanManageTEQ, CanManageBEQ } = userInfo;
        setActivityRight(ActivityRight);
        setHasAccess(ActivityRight === 'Admin' || ActivityRight === 'SuperAdmin');
      } catch (error) {
        console.error("Error fetching user info", error);
      }
    };
    fetchUserData();
  }, []);
  const changeSelect = (item) => {
    setFilterSection(item);
    setDisableDate(item === '1');
  };
  const validateDate = () => {
    setValidateError(throughDate < fromDate);
  };
  const search = async () => {
    if (filterSection === '1') {
      if (!fromDate || !throughDate) {
        return growl.error("Please enter a valid Start/End date");
      }
      validateDate();
      if (validateError) {
        return growl.error("End date cannot be earlier than the Start date");
      }
    }
    setBusy(true);
    try {
      const response = await PsAuditingService.getAuditDetails({
        search: filterSection,
        Fromdate: fromDate.toString(),
        ThroughDate: throughDate.toString(),
      });
      setAuditData(response);
    } catch (error) {
      growl.error(error.response.data);
    } finally {
      setBusy(false);
    }
  };
  if (!hasAccess) {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Access Denied</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are not authorized to view this page.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => history.push('/dashboard')}>Go to Dashboard</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
  return (
    <div>
      <h2>Auditing Dashboard</h2>
      {busy && <div>Loading...</div>}
      {/* Auditing UI components and logic here */}
      <DatePicker selected={fromDate} onChange={date => setFromDate(date)} />
      <DatePicker selected={throughDate} onChange={date => setThroughDate(date)} />
      <button onClick={search}>Search</button>
    </div>
  );
};
export default PsAuditingComponent;
