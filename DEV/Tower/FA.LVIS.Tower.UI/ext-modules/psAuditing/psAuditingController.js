import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
// Assuming the axios API calls are correctly set in the services directory
import { getAuditDetails, getAuditDetailsFilter } from './services/psAuditingApi';
function AuditingComponent() {
  const [activityRight, setActivityRight] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [throughDate, setThroughDate] = useState(new Date());
  const [filterSelection, setFilterSelection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [auditData, setAuditData] = useState([]);
  const [isBusy, setIsBusy] = useState(false);
  const [validateError, setValidateError] = useState(false);
  const history = useHistory();
  useEffect(() => {
    let userRights = localStorage.getItem('activityRight') || ''; // Example way to get user rights, adjust according to your project
    setActivityRight(userRights);
    if (!['Admin', 'SuperAdmin', 'User'].includes(userRights)) {
      /* Assume UserInfo.getUser() equivalent in React context */
      UserInfo.getUser().then(response => {
        setActivityRight(response.ActivityRight);
      }).catch(error => {
        console.error('Error fetching user info', error);
      });
    }
    setHasAccess(userRights === 'SuperAdmin' || userRights === 'Admin');
    if (userRights !== 'Admin' && userRights !== 'SuperAdmin') {
      alert('You are not authorized to view this page.');
      history.push('/dashboard');
    }
  }, []);
  useEffect(() => { search(); }, [filterSelection, fromDate, throughDate]); // Dependency array to re-search when these states change
  const validateDate = () => {
    setValidateError(throughDate < fromDate);
  };
  const changeSelect = (item) => {
    setDisableDate(item === '1');
  };
  const search = () => {
    if (filterSelection === "1") {
      if (validateError) {
        toast.error("End date cannot be earlier than the Start date");
        return;
      }
      setIsBusy(true);
      getAuditDetails({ fromdate: fromDate, throughDate }).then(data => {
        setAuditData(data);
        setIsBusy(false);
      }).catch(error => {
        toast.error(error.message);
        setIsBusy(false);
      });
    } else {
      setIsBusy(true);
      getAuditDetailsFilter(filterSelection).then(data => {
        setAuditData(data);
        setIsBusy(false);
      }).catch(error => {
        toast.error(error.message);
        setIsBusy(false);
      });
    }
  };
  return (
    <>
      <div>
        {hasAccess ?
          (<div> {/* Component UI Elements */}</div>) :
          (<Modal show={!hasAccess} onHide={() => history.push('/dashboard')}>
            <Modal.Header closeButton>
              <Modal.Title>Access Denied</Modal.Title>
            </Modal.Header>
            <Modal.Body>You are not authorized to view this page.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => history.push('/dashboard')}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>)
        }
      </div>
      {/* Additional UI components and controls as needed, such as date pickers, filters, etc. */}
    </>
  );
}
export default AuditingComponent;