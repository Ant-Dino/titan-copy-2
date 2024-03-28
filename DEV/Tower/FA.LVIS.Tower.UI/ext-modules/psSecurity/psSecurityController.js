import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Growl } from 'primereact/growl';
import SecurityService from 'DEV/Tower/FA.LVIS.Tower.UI/src/services/psSecurity.service.ts';
function PsSecurityComponent() {
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [users, setUsers] = useState([]);
    const [tenants, setTenants] = useState([]);
    const [showTenants, setShowTenants] = useState(false);
    const [tenantName, setTenantName] = useState('');
    const history = useHistory();
    const growl = useRef(null);
    useEffect(() => {
        getUserInfo();
    }, []);
    const getUserInfo = async () => {
        try {
            const response = await SecurityService.getCurrentUser();
            const { ActivityRight, CanManageTEQ, CanManageBEQ } = response;
            setActivityRight(ActivityRight);
            setCanManageTEQ(CanManageTEQ);
            setCanManageBEQ(CanManageBEQ);
            checkAccess(ActivityRight);
        } catch (error) {
            console.log("Error getting user info", error);
        }
    };
    const checkAccess = (right) => {
        if (right === 'Admin' || right === 'SuperAdmin') {
            setHasAccess(true);
        }
        if (right === 'SuperAdmin') {
            setHasModifyAccess(true);
        }
        if (right !== 'Admin' && right !== 'SuperAdmin') {
            history.push('/dashboard');
        }
    };
    const fetchUsers = async () => {
        try {
            const response = await SecurityService.getUsers();
            setUsers(response);
        } catch (error) {
            console.log("Error fetching users", error);
        }
    };
    useEffect(() => {
        if (activityRight) fetchUsers();
    }, [activityRight]);
    const fetchTenants = async () => {
        const response = await SecurityService.getTenant();
        setTenants(response);
    };
    useEffect(() => {
        fetchTenants();
    }, []);
    // Additional functions (e.g., addRow, editRow, deleteRow) will need to be implemented here.
    return (
        <div>
            {hasAccess ? (
                <div>
                    {/* UI components and functionalities for authorized users will go here */}
                </div>
            ) : (
                <div>You do not have access to this page.</div>
            )}
            <Growl ref={growl} />
        </div>
    );
}
export default PsSecurityComponent;