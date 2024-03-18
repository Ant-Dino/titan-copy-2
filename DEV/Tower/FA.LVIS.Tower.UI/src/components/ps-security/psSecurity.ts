import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Assuming psSecurityApiUri service endpoints are available at a given base URL
const baseURL = "http://example.com/api/security/";

const PsSecurityComponent = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [hasModifyAccess, setHasModifyAccess] = useState(false);
  const [serviceGridData, setServiceGridData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      // Placeholder for user info fetching logic
      const userInfo = await axios.get(`${baseURL}getUser`);
      setCurrentUser(userInfo.data);
      checkModifyAccess(userInfo.data);

      // Fetch grid data after fetching user info
      fetchServiceGridData();
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const checkModifyAccess = (userInfo) => {
    // Placeholder logic to determine modify access
    const modifyAccess = userInfo.permissions.includes("modify");
    setHasModifyAccess(modifyAccess);
  };

  const fetchServiceGridData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseURL}getServiceGridData`);
      setServiceGridData(response.data);
    } catch (error) {
      console.error("Failed to fetch service grid data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addRow = () => {
    // Function to handle adding a new row
    console.log("Add new row functionality");
  };

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
        <div className="col-lg-1"></div>
        <div className="col-lg-10">    
          <ul className="ps-page-title">
            <li>Security Profiles</li>
          </ul> 
          <div growl inline="true"></div>
          {hasModifyAccess && <button className="btn btn-sm" style={{cursor:"pointer"}} onClick={addRow}><i className="fa fa-user-plus"></i> Add New User</button>}
         
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div id="serviceGrid" className="ui-grid-selectable">
              {/* Render your grid data here */}
            </div>
          )}
        </div>
      </div>
      <div className="col-lg-1"> </div>
    </div>
  );
};

export default PsSecurityComponent;