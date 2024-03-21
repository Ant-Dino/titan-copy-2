 
import React, { useState, useEffect } from 'react';
import axios from '../../services/axiosInstance';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function PsSecurityComponent() {
    const [users, setUsers] = useState([]);
    const [tenants, setTenants] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isNewUser, setIsNewUser] = useState(true);
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const history = useHistory();

    useEffect(() => {
        fetchUserRights();
        fetchData();
    }, []);

    const fetchUserRights = async () => {
        const currentUserInfo = await axios.get('/Security/GetCurrentUser/');
        setActivityRight(currentUserInfo.data.ActivityRight);
        setCanManageTEQ(currentUserInfo.data.CanManageTEQ);
        setCanManageBEQ(currentUserInfo.data.CanManageBEQ);

        if (['Admin', 'SuperAdmin'].includes(currentUserInfo.data.ActivityRight)) {
            setHasAccess(true);
        }
        if (currentUserInfo.data.ActivityRight === 'SuperAdmin') {
            setHasModifyAccess(true);
        } else {
            history.push('/dashboard');
        }
    };

    const fetchData = async () => {
        const usersResponse = await axios.get('/Security/GetUsers');
        setUsers(usersResponse.data);
    };

    const addUser = async (user) => {
        if (isNewUser) {
            await axios.post('/api/Security/Post', user);
        } else {
            await axios.post('/api/Security/UpdateUserDetails', user);
        }
        fetchData();
        setShowModal(false);
    };

    const deleteUser = async (userId) => {
        await axios.delete(`/api/Security/Delete/${userId}`);
        fetchData();
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleUserChange = e => {
        const { name, value } = e.target;
        setCurrentUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setCurrentUser(prevState => ({
            ...prevState,
            dateOfBirth: date,
        }));
    };

    if (!hasAccess) return <div>Loading...</div>;

    return (
        <div>
            <ToastContainer />
            <h2>Security Management</h2>
            <Button onClick={() => { setIsNewUser(true); setCurrentUser({}); toggleModal(); }}>Add User</Button>
            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{isNewUser ? 'Add New User' : 'Edit User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input type="text" name="name" value={currentUser.name || ''} onChange={handleUserChange} /><br />
                        <DatePicker selected={currentUser.dateOfBirth} onChange={handleDateChange} />
                        {/* Additional form fields here */}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => addUser(currentUser)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {users.map(user => (
                <div key={user.ID}>
                    {user.Name} - {user.Role}
                    <Button onClick={() => deleteUser(user.ID)}>Delete</Button>
                </div>
            ))}
        </div>
    );
}

export default PsSecurityComponent;
