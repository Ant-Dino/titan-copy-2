import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is set up for making HTTP requests
import { Modal, Button, Form } from 'react-bootstrap'; // For Modals and Forms, ensure Bootstrap is set up in your project
import { ToastContainer, toast } from 'react-toastify'; // For displaying success/error messages
import 'react-toastify/dist/ReactToastify.css';
import { getUser, addUser, updateUserDetails, deleteUser } from './services/psSecurityApi'; // Customize this import based on actual file structure
const PsSecurityComponent = () => {
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [tenant, setTenant] = useState('');
    useEffect(() => {
        checkAccessRights();
        fetchServiceGridData();
        fetchTenant();
    }, []);
    const checkAccessRights = async () => {
        try {
            const response = await getUser();
            setActivityRight(response.ActivityRight);
            setCanManageTEQ(response.CanManageTEQ);
            setCanManageBEQ(response.CanManageBEQ);
            if (response.ActivityRight) {
                if (response.ActivityRight === 'Admin' || response.ActivityRight === 'SuperAdmin') {
                    setHasAccess(true);
                }
                if (response.ActivityRight === 'SuperAdmin') {
                    setHasModifyAccess(true);
                }
            }
        } catch (error) {
            console.error('Failed to fetch user access rights:', error);
            toast.error('Failed to fetch access rights');
        }
    };
    const fetchServiceGridData = async () => {
        if (!activityRight) return;
        try {
            const { data } = await axios.get('Security/GetUsers');
            setServiceGridData(data);
        } catch (error) {
            console.error('Error fetching users:', error);
            toast.error('Error fetching users');
        }
    };
    const fetchTenant = async () => {
        try {
            const { data } = await axios.get('Security/GetTenant');
            setTenant(data);
        } catch (error) {
            console.error('Error fetching tenant:', error);
            toast.error('Error fetching tenant');
        }
    };
    const handleAddUser = async (userDetails) => {
        try {
            const response = await addUser(userDetails);
            if (response.status === 200) {
                toast.success('User added successfully');
                fetchServiceGridData(); // Refresh the grid data
            }
        } catch (error) {
            console.error('Error adding user:', error);
            toast.error('Error adding user');
        }
    };
    const handleUpdateUser = async (userDetails) => {
        try {
            const response = await updateUserDetails(userDetails);
            if (response.status === 200) {
                toast.success('User updated successfully');
                fetchServiceGridData(); // Refresh the grid data
            }
        } catch (error) {
            console.error('Error updating user:', error);
            toast.error('Error updating user');
        }
    };
    const handleDeleteUser = async (userId) => {
        try {
            const response = await deleteUser(userId);
            if (response.status === 200) {
                toast.success('User deleted successfully');
                fetchServiceGridData(); // Refresh the grid data
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Error deleting user');
        }
    };
    // Additional CRUD operations methods can follow here...
    return (
        <div>
            <ToastContainer />
            {/* UI and other components here */}
        </div>
    );
};
export default PsSecurityComponent;