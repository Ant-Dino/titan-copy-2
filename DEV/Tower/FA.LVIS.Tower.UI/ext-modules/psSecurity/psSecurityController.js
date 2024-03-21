import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
const PsSecurityComponent = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['activityright']);
    const [activityRight, setActivityRight] = useState(cookies.activityright || '');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [tenantData, setTenantData] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [error, setError] = useState('');
    const history = useHistory();
    useEffect(() => {
        if (!activityRight) {
            fetchUserInfo();
        } else {
            fetchUsers();
            fetchTenant();
            fetchShowTenants();
            setAccessRights();
        }
    }, [activityRight]);
    const psSecurityApiUri = {
        addUser: 'api/Security/Post',
        updateUser: 'api/Security/UpdateUserDetails',
        deleteUser: 'api/Security/Delete/',
    };
    const fetchUserInfo = async () => {
        try {
            const response = await axios.get('Security/GetCurrentUser/');
            setUserDetails(response.data);
            setActivityRight(response.data.ActivityRight);
            setCookie('activityright', response.data.ActivityRight, { path: '/' });
            setCanManageTEQ(response.data.CanManageTEQ);
            setCanManageBEQ(response.data.CanManageBEQ);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchUsers = async () => {
        if (activityRight) {
            try {
                const response = await axios.get('Security/GetUsers');
                setServiceGridData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    };
    const fetchTenant = async () => {
        try {
            const response = await axios.get('Security/GetTenant');
            setTenantData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchShowTenants = async () => {
        try {
            const response = await axios.get('Security/GetShowTenants');
            // handle response
        } catch (error) {
            console.log(error);
        }
    };
    const setAccessRights = () => {
        if (activityRight === 'Admin' || activityRight === 'SuperAdmin') {
            setHasAccess(true);
        }
        if (activityRight === 'SuperAdmin') {
            setHasModifyAccess(true);
        }
    };
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const handleDeleteUser = async (userId) => {
        try {
            const response = await axios.post(psSecurityApiUri.deleteUser + userId);
            if (response.data === 0) {
                alert('Cannot Delete row (error in console)');
            } else {
                fetchUsers(); // Refresh the users list
            }
        } catch (error) {
            console.log(error);
        }
    };
    // Handle permissions and redirect if not authorized
    if (!hasAccess) {
        return (
            <Alert variant="danger" onClose={() => history.push('/dashboard')} dismissible>
                <Alert.Heading>You are not authorized to view this page.</Alert.Heading>
            </Alert>
        );
    }
    return (
        <div>
            {/* Your JSX goes here, optionally managing UI based on state like hasModifyAccess, hasAccess, etc. */}
        </div>
    );
};
export default PsSecurityComponent;