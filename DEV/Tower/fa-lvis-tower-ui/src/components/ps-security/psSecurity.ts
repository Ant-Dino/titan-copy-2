import React, { useState, useEffect } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'; // Assuming js-cookie is used for cookie management
import { toast } from 'react-toastify'; // Assuming react-toastify is used for notifications
function PsSecurityComponent() {
  const history = useHistory();
  const [activityRight, setActivityRight] = useState(Cookies.get('activityright') || '');
  const [hasAccess, setHasAccess] = useState(false);
  const [hasModifyAccess, setHasModifyAccess] = useState(false);
  const [busy, setBusy] = useState(false);
  const [tenants, setTenants] = useState([]);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  useEffect(() => {
    if (!activityRight) {
      fetchUserInfo();
    } else {
      checkAccess();
    }
    fetchTenants();
  }, [activityRight]);
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get('Security/GetCurrentUser/');
      const { ActivityRight } = response.data;
      setActivityRight(ActivityRight);
      Cookies.set('activityright', ActivityRight);
      checkAccess();
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };
  const checkAccess = () => {
    const isSuperAdmin = activityRight === 'SuperAdmin';
    const isAdmin = activityRight === 'Admin';
    setHasAccess(isAdmin || isSuperAdmin);
    setHasModifyAccess(isSuperAdmin);
    if (!isAdmin && !isSuperAdmin) {
      setModalContent('You are not authorized to view this page.');
      setShowModal(true);
      setTimeout(() => history.push('/dashboard'), 500);
    }
  };
  const fetchTenants = async () => {
    try {
      const response = await axios.get('Security/GetTenant');
      setTenants(response.data);
    } catch (error) {
      console.error('Error fetching tenants:', error);
    }
  };
  const fetchUsers = async () => {
    if (!activityRight) return;
    try {
      const response = await axios.get('Security/GetUsers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  const handleModalClose = () => {
    setShowModal(false);
    history.push('/dashboard');
  };
  const handleAddUser = async (user) => {
    try {
      setBusy(true);
      await axios.post('api/Security/Post', user);
      toast.success('User added successfully');
      fetchUsers();
    } catch (error) {
      toast.error('Failed to add user');
    } finally {
      setBusy(false);
    }
  };
  return (
    <div>
      {hasAccess ? (
        <div>
          <h2>Security Management</h2>
          {/* Rendering users and tenant details here */}
          {users.map(user => (
            <div key={user.ID}>{user.Name}</div>
          ))}
          <Button onClick={() => setShowModal(true)}>Add User</Button>
        </div>
      ) : (
        <Alert variant="danger">
          You do not have access to this page.
        </Alert>
      )}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent}
          {/* User detail form or message */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAddUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default PsSecurityComponent;