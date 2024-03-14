import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Spinner } from 'react-bootstrap';
const PsSecurityComponent = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [users, setUsers] = useState([]);
    const [isBusy, setBusy] = useState(true);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [tenants, setTenants] = useState([]);
    const [showTenants, setShowTenants] = useState(false);
    useEffect(() => {
        fetchCurrentUser();
        fetchTenants();
    }, []);
    const fetchCurrentUser = async () => {
        try {
            const response = await axios.get('Security/GetCurrentUser/');
            const userInfo = response.data;
            setCurrentUser(userInfo);
            checkAccessRight(userInfo.ActivityRight);
        } catch (error) {
            setError('Failed to fetch user data');
        }
    };
    const checkAccessRight = (activityRight) => {
        if (activityRight === 'Admin' || activityRight === 'SuperAdmin') {
            setHasAccess(true);
        }
        if (activityRight === 'SuperAdmin') {
            setHasModifyAccess(true);
        }
    };
    const fetchTenants = async () => {
        try {
            const response = await axios.get('Security/GetTenant');
            setTenants(response.data);
            setShowTenants(response.data.length > 0);
        } catch (error) {
            setError('Failed to fetch tenants');
        }
    };
    const addUser = async user => {
        try {
            await axios.post('api/Security/Post', user);
            fetchUsers(); // Re-fetch users to update list
        } catch (error) {
            setError('Failed to add user');
        }
    };
    const fetchUsers = async () => {
        try {
            const response = await axios.get('Security/GetUsers');
            setUsers(response.data);
            setBusy(false);
        } catch (error) {
            setError('Failed to fetch users');
            setBusy(false);
        }
    };
    if (isBusy) {
        return <Spinner animation="border" />;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = (content) => {
        setModalContent(content);
        setShowModal(true);
    };
    const tableRows = users.map(user => (
        <tr key={user.ID}>
            <td>{user.Name}</td>
            <td>{user.Role}</td>
            <td>{user.IsActive ? 'Yes' : 'No'}</td>
            <td>{user.sTenant}</td>
        </tr>
    ));
    return (
        <div className="ps-dashboard-header">
            <ul className="breadcrumb">
                <li className="subbreadcrumb">
                    <span>Security Profiles</span>
                </li>
            </ul>
            <div className="wrapper">
                <div className="col-lg-10">
                    <ul className="ps-page-title">
                        <li>Security Profiles</li>
                    </ul>
                    {hasModifyAccess && (
                        <Button
                            style={{ cursor: 'pointer'}}
                            onClick={() => handleShowModal({type: 'add'})}
                        >
                            <i className="fa fa-user-plus"></i>Add New User
                        </Button>
                    )}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Activity Rights</th>
                                <th>Active</th>
                                <th>Tenant</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalContent.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalContent.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=> addUser(modalContent.data)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default PsSecurityComponent;