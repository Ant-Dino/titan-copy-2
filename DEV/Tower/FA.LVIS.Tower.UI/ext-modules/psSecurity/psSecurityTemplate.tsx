import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Alert } from 'react-bootstrap';
function PsSecurityComponent() {
    const [currentUser, setCurrentUser] = useState(null);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [tenant, setTenant] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        axios.get('Security/GetCurrentUser/')
            .then(response => {
                const userData = response.data;
                setCurrentUser(userData);
                checkAccessRights(userData.ActivityRight); // Simulate access rights checking
            }).catch(() => {
                setIsError(true);
            }).finally(() => {
                setIsLoading(false);
            });

        fetchData('Security/GetUsers', setServiceGridData);
        fetchData('Security/GetTenant', setTenant);
    }, []);
    function fetchData(endpoint, stateSetter) {
        axios.get(endpoint)
            .then(response => {
                stateSetter(response.data);
            }).catch(() => {
                setIsError(true);
            });
    }
    function checkAccessRights(activityRight) {
        if (['Admin', 'SuperAdmin'].includes(activityRight)) {
            setHasAccess(true);
        }
        if (activityRight === 'SuperAdmin') {
            setHasModifyAccess(true);
        }
    }
    function addRow() {
        console.log('Add row function called.');
        // Implement add row functionality
    }
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error occurred</div>;
    return (
        <div className="ps-dashboard-header">
            <ul className="breadcrumb">
                <li className="subbreadcrumb">
                    <ps-sub-menu>
                        <ps-sub-menu-item label="Security Profiles" activetab="Security Profiles" route="security">Security Profiles</ps-sub-menu-item>
                    </ps-sub-menu>
                </li>
            </ul>
            <div className="wrapper">
                <div className="col-lg-10">
                    <ul className="ps-page-title">
                        <li>Security Profiles</li>
                    </ul>
                    <Button className="btn btn-sm" style={{cursor: 'pointer'}} onClick={addRow} disabled={!hasModifyAccess}><i className="fa fa-user-plus"></i> Add New User</Button>

                    {/* Service Grid Component Placeholder */}
                </div>
            </div>
        </div>
    );
}
export default PsSecurityComponent;