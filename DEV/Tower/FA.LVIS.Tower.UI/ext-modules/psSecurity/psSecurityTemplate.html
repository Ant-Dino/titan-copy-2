import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PsSecurityComponent = () => {
  const [users, setUsers] = useState([]);
  const [tenantData, setTenantData] = useState(null);
  const [showTenantColumn, setShowTenantColumn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasModifyAccess, setHasModifyAccess] = useState(false);

  useEffect(() => {
    getCurrentUser();
    fetchUsers();
    getTenantData();
    checkShowTenants();
  }, []);

  const getCurrentUser = async () => {
    try {
      const response = await axios.get('/Security/GetCurrentUser/');
      const { ActivityRight, CanManageBEQ, CanManageTEQ } = response.data;
      const rights = ['Admin', 'SuperAdmin'];
      setHasAccess(rights.includes(ActivityRight));
      setHasModifyAccess(ActivityRight === 'SuperAdmin');
    } catch (error) {
      console.error('Error fetching current user: ', error);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('Security/GetUsers');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users: ', error);
      setLoading(false);
    }
  };

  const getTenantData = async () => {
    const response = await axios.get('Security/GetTenant');
    setTenantData(response.data);
    if (tenantData === 'LVIS') {
      setShowTenantColumn(true);
    }
  };

  const checkShowTenants = async () => {
    const response = await axios.get('Security/GetShowTenants');
    setShowTenantColumn(response.data);
  };

  const addRow = () => {
    if (!hasModifyAccess) {
      alert('You do not have permission to add users.');
      return;
    }
    // Logic to add a new row
    console.log('Adding a new user row');
  };

  const removeRow = (userId) => {
    if (!hasModifyAccess) {
      alert('You do not have permission to remove users.');
      return;
    }
    // Logic to remove a row
    console.log('Removing user with ID: ', userId);
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          Security Profiles
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Security Profiles</li>
          </ul>
          {hasModifyAccess && (
            <button className="btn btn-sm" style={{cursor: "pointer"}} onClick={addRow}><i className="fa fa-user-plus"></i> Add New User</button>
          )}
          <div id="serviceGrid" className="ui-grid-selectable">
            {/* UI Grid for displaying users will go here */}
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default PsSecurityComponent;