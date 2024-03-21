import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
const PsSecurityComponent = () => {
    const navigate = useNavigate();
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [users, setUsers] = useState([]);
    const [tenants, setTenants] = useState([]);
    const [showTenants, setShowTenants] = useState(false);
    const [tenantName, setTenantName] = useState('');
    const [busy, setBusy] = useState(false);
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const { data } = await axios.get('Security/GetCurrentUser/');
                setActivityRight(data.ActivityRight);
                setCanManageTEQ(data.CanManageTEQ);
                setCanManageBEQ(data.CanManageBEQ);
                fetchUsers();
            } catch (error) {
                console.error("Failed to fetch user info", error);
            }
        };
        fetchUserInfo();
    }, []);
    const fetchUsers = async () => {
        if (activityRight) {
            setBusy(true);
            try {
                const { data } = await axios.get('Security/GetUsers');
                setUsers(data);
            } catch (error) {
                console.error("Failed to fetch users", error);
            }
            setBusy(false);
        }
    };
    const handleDeleteUser = async (user) => {
        try {
            await axios.post('api/Security/Delete/', user);
            toast.success("User deleted successfully");
            fetchUsers();
        } catch (error) {
            console.error("Failed to delete user", error);
            toast.error("Failed to delete user");
        }
    };
    const checkAccess = () => {
        if (activityRight === 'Admin' || activityRight === 'SuperAdmin') {
            setHasAccess(true);
        }
        if (activityRight === 'SuperAdmin') {
            setHasModifyAccess(true);
        }
    };
    useEffect(() => {
        checkAccess();
    }, [activityRight]);
    if (!hasAccess) {
        return (
            <Modal isOpen={true} onRequestClose={() => navigate('/dashboard')}>
                <div>You are not authorized to view this page.</div>
                <button onClick={() => navigate('/dashboard')}>Close</button>
            </Modal>
        );
    }

    return (
        <div>
            <h1>User Management</h1>
            {busy && <div>Loading...</div>}
            {users.map(user => (
                <div key={user.ID}>
                    <div>{user.Name}</div>
                    <div>{user.Role}</div>
                    <button onClick={() => handleDeleteUser(user)}>Delete</button>
                </div>
            ))}
        </div>
    );
};
export default PsSecurityComponent;