import React, { useState, useEffect } from 'react';
import axios from 'axios';
const PsSecurityComponent = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [serviceGridData, setServiceGridData] = useState([]);
  const [hasAccess, setHasAccess] = useState(false);
  const [hasModifyAccess, setHasModifyAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getCurrentUser();
  }, []);
  const getCurrentUser = async () => {
    try {
      const { data: userInfo } = await axios.get('Security/GetCurrentUser/');
      setCurrentUser(userInfo);
      handleAccessRights(userInfo);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching current user:", error);
      setError(error);
      setLoading(false);
    }
  };
  const handleAccessRights = (userInfo) => {
    if (['Admin', 'SuperAdmin'].includes(userInfo.ActivityRight)) {
      setHasAccess(true);
    }
    if (userInfo.ActivityRight === 'SuperAdmin') {
      setHasModifyAccess(true);
    }
  };
  const fetchData = async (url) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  useEffect(() => {
    if (currentUser) {
      async function fetchDataForGrid() {
        try {
          const serviceGridData = await fetchData('Security/GetUsers');
          setServiceGridData(serviceGridData);
        } catch (error) {
          console.error("Error fetching service grid data:", error);
          setError(error);
        }
      }
      fetchDataForGrid();
    }
  }, [currentUser]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          <ps-sub-menu>
            Security Profiles
          </ps-sub-menu>
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Security Profiles</li>
          </ul>
          <button className="btn btn-sm" style={{ cursor: "pointer" }} onClick={() => alert("Add new user")} disabled={!hasModifyAccess}><i className="fa fa-user-plus"></i> Add New User</button>
          {/* Additional functionality such as grid or list goes here */}
        </div>
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
};
export default PsSecurityComponent;