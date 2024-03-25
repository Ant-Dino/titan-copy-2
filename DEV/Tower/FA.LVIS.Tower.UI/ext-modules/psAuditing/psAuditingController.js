import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap'; // Assuming usage of React-Bootstrap for UI components similar to AngularJS ui-bootstrap
import axios from 'axios';

function AuditingComponent() {
    // Converted $rootScope.activityright and similar variables into React state
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [dateFilterSelection, setDateFilterSelection] = useState('7');
    const [disableDate, setDisableDate] = useState(true);
    const [fromDate, setFromDate] = useState(new Date().toLocaleDateString());
    const [throughDate, setThroughDate] = useState(new Date().toLocaleDateString());
    const [validateError, setValidateError] = useState(false);
    const [auditData, setAuditData] = useState([]);
    const [busy, setBusy] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    // Replicating the search function
    const search = () => {
        if (dateFilterSelection === "1") {
            if (!fromDate || !throughDate) {
                alert("Please enter a valid Start/End date");
                return;
            }

            validateDate();

            if (validateError) {
                alert("End date cannot be earlier than the Start date");
                return;
            }

            // Details object setup similar to what was used in $http.post
            const Details = {
                search: "", // Placeholder, assuming there was a search text variable not implemented in AngularJS code
                Fromdate: fromDate,
                ThroughDate: throughDate,
            };

            setBusy(true);
            axios.post('api/audit/GetAuditDetails', Details)
                .then((response) => {
                    setBusy(false);
                    setAuditData(response.data);
                }).catch((error) => {
                    alert(error.response.data);
                });
        } else {
            setBusy(true);
            axios.get(`AuditController/GetAuditDetailsFilter/${dateFilterSelection}`)
                .then((response) => {
                    setBusy(false);
                    setAuditData(response.data);
                }).catch((error) => {
                    alert(error.response.data);
                });
        }
    };

    // Similar to $scope.ValidateDate
    const validateDate = () => {
        const StartDate = new Date(fromDate);
        const EndDate = new Date(throughDate);
        setValidateError(EndDate < StartDate);
    };

    // Similar to changeSelect function in Angular but adapted for React
    const changeSelect = (item) => {
        setDisableDate(item !== "1");
    };

    // useEffect to replicate lifecycle methods in AngularJS, e.g., to auto-run search on component mount
    useEffect(() => {
        search();
        // Assume UserInfo.getUser was fetching user access rights, similar logic can be implemented if necessary.
    }, []);

    return (
        <div>
            {/* Conditional rendering for unauthorized message using state */}
            {hasAccess === false && (
                <>
                    <Alert variant="danger">You are not authorized to view this page.</Alert>
                    <Button onClick={() => setShowModal(true)}>Show Modal</Button>
                </>
            )}

            {/* Modal similar to $uibModal for showing access control message */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Attention</Modal.Title>
                </Modal.Header>

                <Modal.Body>{modalMessage || 'You are not authorized to view this page.'}</Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

            {/* Example form for date filtering */}
            <form>
                {/* Date selection input */}
                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                <input type="date" value={throughDate} onChange={(e) => setThroughDate(e.target.value)} />
                <select value={dateFilterSelection} onChange={(e) => changeSelect(e.target.value)}>
                    {/* Mapping date filters */}
                    {[
                        { title: 'Custom', value: '1' },
                        { title: 'Last 90 Days', value: '90' },
                        // Continue with other options similar to AngularJS controller setup
                    ].map((option, index) => (
                        <option key={index} value={option.value}>{option.title}</option>
                    ))}
                </select>
                <button type="button" onClick={search}>Search</button>
            </form>

            {/* An example alert to show when data is loading */}
            {busy && <Alert variant="info">Loading...</Alert>}

            {/* Auditing information display could go here, based on auditData state */}
        </div>
    );
}

export default AuditingComponent;