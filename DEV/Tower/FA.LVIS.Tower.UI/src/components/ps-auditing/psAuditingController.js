import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const PsAuditingComponent = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [activityRight, setActivityRight] = useState(null);
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [fromDate, setFromDate] = useState(new Date().toISOString().slice(0, 10));
  const [throughDate, setThroughDate] = useState(new Date().toISOString().slice(0, 10));
  const [validateError, setValidateError] = useState(false);
  const [filterSection, setFilterSection] = useState("7");
  const [disableDate, setDisableDate] = useState(true);
  const [busy, setBusy] = useState(false);
  const [auditDetails, setAuditDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUserRights = async () => {
      try {
        const response = await axios.get('/user/rights'); // Assuming an endpoint '/user/rights' to fetch user rights
        const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
        setActivityRight(ActivityRight);
        setCanManageTEQ(CanManageTEQ);
        setCanManageBEQ(CanManageBEQ);

        if (ActivityRight === 'Admin' || ActivityRight === 'SuperAdmin') {
          setHasAccess(true);
        } else {
          setShowModal(true);
        }
      } catch (error) {
        console.error("Error fetching user rights: ", error);
      }
    };
    fetchUserRights();
  }, []);

  useEffect(() => {
    if (filterSection !== '1') {
      search();
    }
  }, [filterSection]);

  const validateDate = () => {
    const StartDate = new Date(fromDate);
    const EndDate = new Date(throughDate);
    setValidateError(EndDate < StartDate);
  };

  const changeSelect = (item) => {
    setDisableDate(item !== '1');
  };

  const search = async () => {
    setBusy(true);
    try {
      let response;
      if (filterSection === '1') {
        const details = { Fromdate: fromDate, ThroughDate: throughDate };
        response = await axios.post('api/audit/GetAuditDetails/', details);
      } else {
        response = await axios.get(`AuditController/GetAuditDetailsFilter/${filterSection}`);
      }
      setAuditDetails(response.data);
    } catch (error) {
      console.error("Error fetching audit details: ", error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <h2>Auditing Panel</h2>
      {hasAccess ? (
        <>
          <div>
            {auditDetails.map((detail, index) => (
              <div key={index}>
                {/* Display each audit detail */}
              </div>
            ))}
          </div>
          <Button onClick={search}>Search</Button>
        </>
      ) : (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Attention</Modal.Title>
          </Modal.Header>
          <Modal.Body>You are not authorized to view this page.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default PsAuditingComponent;