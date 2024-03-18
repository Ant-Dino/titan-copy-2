import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
const PsSecurityComponent = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [tenant, setTenant] = useState(null);
    const [showTenantColumn, setShowTenantColumn] = useState(false);
    useEffect(() => {
        fetchUserAccessRights();
        fetchUsers();
        fetchTenant();
    }, []);
    const fetchUserAccessRights = async () => {
        try {
            const { data } = await axios.get('/api/UserAccessRights');
            setHasAccess(data.hasAccess);
            setHasModifyAccess(data.hasModifyAccess);
        } catch (error) {
            console.error("Fetching user access rights failed", error);
        }
    };
    const fetchUsers = async () => {
        try {
            const response = await axios.get('/Security/GetUsers');
            setUsers(response.data);
        } catch (error) {
            console.error("Fetching users failed", error);
        } finally {
            setLoading(false);
        }
    };
    const fetchTenant = async () => {
        try {
            const response = await axios.get('/Security/GetTenant');
            setTenant(response.data);
            setShowTenantColumn(response.data === 'LVIS');
        } catch (error) {
            console.error("Fetching tenant info failed", error);
        }
    };
    const handleAddUser = () => {
        setCurrentUser({});
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleSaveUser = async (user) => {
        try {
            if (user.id) {
                await axios.put(`/api/Security/${user.id}`, user);
            } else {
                await axios.post('/api/Security', user);
            }
            setShowModal(false);
            fetchUsers();
        } catch (error) {
            console.error("Saving user failed", error);
        }
    };
    const columns = [
        { dataField: 'name', text: 'Name', filter: textFilter(), sort: true },
        { dataField: 'role', text: 'Role', filter: textFilter(), sort: true },
        { dataField: 'isActive', text: 'Active', filter: textFilter(), sort: true },
        showTenantColumn ? { dataField: 'tenant', text: 'Tenant', filter: textFilter(), sort: true } : null
    ].filter(Boolean);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="ps-dashboard-header">
            <Button onClick={handleAddUser} disabled={!hasModifyAccess}>Add New User</Button>
            <BootstrapTable
                bootstrap4
                keyField='id'
                data={users}
                columns={columns}
                pagination={paginationFactory()}
                cellEdit={cellEditFactory({ mode: 'click', blurToSave: true })}
                filter={filterFactory()}
            />
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentUser.id ? 'Edit User' : 'Add New User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* User form inputs here */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveUser(currentUser)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default PsSecurityComponent;