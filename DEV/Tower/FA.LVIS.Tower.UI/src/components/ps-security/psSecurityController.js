 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { useCookies } from 'react-cookie';

function PsSecurityComponent() {
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [users, setUsers] = useState([]);
    const [tenant, setTenant] = useState('');
    const [isTenantVisible, setIsTenantVisible] = useState(false);
    const [cookies, setCookie] = useCookies(['activityright']);

    useEffect(() => {
        getUserInfo();
        getTenant();
        checkAccessRights();
    }, []);

    const getUserInfo = async () => {
        try {
            const response = await axios.get('Security/GetCurrentUser/');
            const { ActivityRight, CanManageTEQ, CanManageBEQ } = response.data;
            setActivityRight(ActivityRight || cookies.activityright);
            setCanManageTEQ(CanManageTEQ);
            setCanManageBEQ(CanManageBEQ);
            checkAccessRights(ActivityRight);
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    const getTenant = async () => {
        const response = await axios.get('Security/GetTenant');
        setTenant(response.data);
    };

    const checkAccessRights = (userRight) => {
        const currentRight = userRight || activityRight;
        if (['Admin', 'SuperAdmin'].includes(currentRight)) {
            setHasAccess(true);
        }
        if (currentRight === 'SuperAdmin') {
            setHasModifyAccess(true);
        }
        if (!['Admin', 'SuperAdmin', 'User'].includes(currentRight)) {
            Swal.fire({
                icon: 'error',
                title: 'Unauthorized',
                text: 'You are not authorized to view this page.',
                willClose: () => {
                    window.location.href = '/dashboard';
                }
            });
        }
    };

    const getUsers = async () => {
        if (activityRight) {
            const response = await axios.get('Security/GetUsers');
            setUsers(response.data);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await axios.post(`api/Security/Delete/${userId}`);
            Swal.fire(
                'Deleted!',
                'User has been deleted.',
                'success'
            );
            setUsers(users.filter(user => user.ID !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div>
            {hasAccess && (
                <div>
                    Users List
                    {users.map(user => (
                        <div key={user.ID}>
                            {user.Name} - {user.Role}
                            <button onClick={() => handleDeleteUser(user.ID)}>Delete</button>
                        </div>
                    ))}
                </div>
            )}
            {!hasAccess && <div>You do not have permission to view this content.</div>}
        </div>
    );
}

export default PsSecurityComponent;
