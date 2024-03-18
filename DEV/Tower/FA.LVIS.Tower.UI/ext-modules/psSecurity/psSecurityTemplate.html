import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
const PsSecurityComponent = () => {
    const [data, setData] = useState([]);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [tenant, setTenant] = useState([]);
    const [showTenants, setShowTenants] = useState(false);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('Security/GetCurrentUser/');
                if (["Admin", "SuperAdmin"].includes(response.data.ActivityRight)) {
                    setHasAccess(true);
                }
                if (response.data.ActivityRight === "SuperAdmin") {
                    setHasModifyAccess(true);
                }
            } catch (error) {
                console.error("Failed to fetch user info", error);
            }
        };
        const fetchTenant = async () => {
            try {
                const response = await axios.get('Security/GetTenant');
                setTenant(response.data);
            } catch (error) {
                console.error("Failed to fetch tenant info", error);
            }
        };

        const fetchShowTenants = async () => {
            try {
                const response = await axios.get('Security/GetShowTenants');
                setShowTenants(response.data);
            } catch (error) {
                console.error("Failed to check tenants visibility", error);
            }
        };
        fetchUser();
        fetchTenant();
        fetchShowTenants();
        setIsLoading(false);
    }, []);
    const addRow = async () => {
        console.log("Add row functionality placeholder");
    };
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ps-dashboard-header">
            <ul className="breadcrumb">
                <li className="subbreadcrumb">
                    <button className="btn btn-sm" onClick={() => addRow()} disabled={!hasModifyAccess}>
                        <i className="fa fa-user-plus"></i> Add New User
                    </button>
                </li>
            </ul>
            <div className="wrapper">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <ul className="ps-page-title">
                        <li>Security Profiles</li>
                    </ul>
                    {/* Detailed implementation of list/grid goes here */}
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    );
};
export default PsSecurityComponent;