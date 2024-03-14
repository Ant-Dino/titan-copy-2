import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PsSecurityComponent() {
    const [currentUser, setCurrentUser] = useState(null);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [serviceGridData, setServiceGridData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tenant, setTenant] = useState('');

    useEffect(() => {
        getCurrentUser();
    }, []);

    async function getCurrentUser() {
        setLoading(true);
        try {
            const response = await axios.get('Security/GetCurrentUser/');
            const userInfo = response.data;
            setCurrentUser(userInfo);
            determineAccess(userInfo);
        } catch (error) {
            setError("Failed to fetch user data");
        } finally {
            setLoading(false);
        }
    }

    function determineAccess(userInfo) {
        if(userInfo.ActivityRight === 'Admin' || userInfo.ActivityRight === 'SuperAdmin') {
            setHasAccess(true);
        }
        if(userInfo.ActivityRight === 'SuperAdmin') {
            setHasModifyAccess(true);
        }
        fetchServiceGridData();
    }

    async function fetchServiceGridData() {
        try {
            const usersResponse = await axios.get('Security/GetUsers');
            const tenantResponse = await axios.get('Security/GetTenant');
            setServiceGridData(usersResponse.data);
            setTenant(tenantResponse.data);
        } catch (error) {
            console.error("Failed to fetch service grid data", error);
        }
    }

    function addRow() {
        // Implement add row functionality
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="ps-dashboard-header">
            <ul className="breadcrumb">
                <li className="subbreadcrumb">
                    <div>Security Profiles</div>
                </li>
            </ul>
            <div className="wrapper">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <ul className="ps-page-title">
                        <li>Security Profiles</li>
                    </ul>
                    {hasModifyAccess && (
                        <button className="btn btn-sm" style={{ cursor: 'pointer' }} onClick={addRow}>
                            <i className="fa fa-user-plus"></i> Add New User
                        </button>
                    )}
                    <div id="serviceGrid" className="ui-grid-selectable">
                        {/* Render the data grid here */}
                    </div>
                </div>
            </div>
            <div className="col-lg-1"> </div>
        </div>
    );
}

export default PsSecurityComponent;