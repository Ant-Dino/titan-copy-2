import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
const PsSecurityComponent = () => {
  const [userInfo, setUserInfo] = useState({});
  const [hasAccess, setHasAccess] = useState(false);
  const [hasModifyAccess, setHasModifyAccess] = useState(false);
  const [serviceGrid, setServiceGrid] = useState([]);
  const [tenant, setTenant] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['activityright']);
  useEffect(() => {
    getUserInfo();
  }, []);
  const getUserInfo = async () => {
    try {
      const response = await axios.get('Security/GetCurrentUser/');
      setUserInfo(response.data);
      handleAccessControl(response.data);
    } catch (error) {
      console.error("There was an error retrieving the user information", error);
    }
  };
  const handleAccessControl = (data) => {
    let activityRight = cookies.activityright || data.ActivityRight;
    if (activityRight) {
      switch (activityRight) {
        case 'Admin':
        case 'SuperAdmin':
          setHasAccess(true);
          if (activityRight === 'SuperAdmin') {
            setHasModifyAccess(true);
          }
          break;
        default:
          setHasAccess(false);
          showModal('Attention', 'You are not authorized to view this page.', () => navigate('/dashboard'));
          break;
      }
    }
  };
  const showModal = (title, body, onClose) => {
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  };
  const handleGetUsers = async () => {
    if (userInfo.activityright) {
      const response = await axios.get('Security/GetUsers');
      setServiceGrid(response.data);
    }
  };
  const handleTenantChange = async () => {
    const response = await axios.get('Security/GetTenant');
    setTenant(response.data);
    // Add other logic here as per AngularJS controller
  };
  // Add other methods and effects to replicate AngularJS functionality
  return (
    <div>
      {hasAccess ? (
        <div>
          {/* Map over serviceGrid or other states to render UI elements */}
          {serviceGrid.map((user, index) => (
            <div key={index}>
              {/* Render user details */}
            </div>
          ))}
        </div>
      ) : (
        <p>You do not have access to view this page.</p>
      )}
    </div>
  );
};
export default PsSecurityComponent;