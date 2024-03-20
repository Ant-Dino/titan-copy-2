  
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Alert, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

function PsSecurityComponent() {
  const [activityRight, setActivityRight] = useState(null);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasModifyAccess, setHasModifyAccess] = useState(false);
  const [users, setUsers] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [showTenants, setShowTenants] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [cookies, setCookie] = useCookies(['activityright']);
  const history = useHistory();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get('Security/GetCurrentUser/');
        const { ActivityRight, CanManageBEQ, CanManageTEQ } = response.data;
        setActivityRight(ActivityRight);
        setCanManageBEQ(CanManageBEQ);
        setCanManageTEQ(CanManageTEQ);
        setCookie('activityright', ActivityRight, { path: '/' });
        checkAccess(ActivityRight);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    getUserInfo();
  }, [setCookie]);

  const checkAccess = (activityRight) => {
    if (['Admin', 'SuperAdmin'].includes(activityRight)) {
      setHasAccess(true);
    }
    if (activityRight === 'SuperAdmin') {
      setHasModifyAccess(true);
    } else {
      history.push('/dashboard');
    }
  };

  useEffect(() => {
    if (activityRight) {
      fetchUsers();
      fetchTenants();
    }
  }, [activityRight]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('Security/GetUsers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchTenants = async () => {
    try {
      const response = await axios.get('Security/GetTenant');
      setTenants(response.data);
      setShowTenants(response.data.length > 0);
    } catch (error) {
      console.error('Error fetching tenants:', error);
    }
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setModalShow(true);
  };

  const updateUserList = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.ID === updatedUser.ID ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div>
      {hasAccess ? (
        <div>
          {/* User Table and Add Button goes here */}
          {users.map((user) => (
            <div key={user.ID} onClick={() => handleEditUser(user)}>
              {user.Name}
            </div>
          ))}
          <EditUserModal show={modalShow} onHide={() => setModalShow(false)} user={selectedUser} updateUserList={updateUserList}/>
        </div>
      ) : (
        <div>You do not have access to this section.</div>
      )}
    </div>
  );
}

function EditUserModal(props) {
  // Modal content goes here
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* User Edit Form */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
        <Button variant="primary" onClick={() => {}}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PsSecurityComponent;
