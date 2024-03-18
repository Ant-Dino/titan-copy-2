import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Growl } from 'primereact/growl'; // Assuming Growl component for notifications
// Import relevant UI components such as ui-grid components if available in React
// For this example, assume they need to be custom built or replaced with equivalent React components

function PsSecurityComponent() {
  const [currentUser, setCurrentUser] = useState({});
  const [serviceGridData, setServiceGridData] = useState([]);
  const [hasModifyAccess, setHasModifyAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Effect for fetching current user data and initial data for service grid
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        // Assuming '/current-user' endpoint fetches current user data
        const userResponse = await axios.get('/current-user');
        setCurrentUser(userResponse.data);
        setHasModifyAccess(userResponse.data.hasModifyAccess); // Assuming this property exists
        
        // Assuming '/service-grid-data' endpoint fetches service grid data
        const serviceGridResponse = await axios.get('/service-grid-data');
        setServiceGridData(serviceGridResponse.data);
      } catch (error) {
        console.error('Failed to fetch data: ', error);
        // Using Growl for notification in catch, assuming error handling notification
      } finally {
        setLoading(false);
      }
    };
    
    fetchCurrentUser();
  }, []);

  // Function to add new row, stubbed for the example
  const addRow = () => {
    console.log('Add row functionality here.');
    // Implement add row functionality here
    // This might involve opening a modal or another component to input new user data, then refetch or update state.
  };
  
  // If data is still loading, display a loading indicator
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          {/* Place Custom Sub Menu Components here as React components replacing <ps-sub-menu> */}
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Security Profiles</li>
          </ul>
          <Growl inline="true" /> {/* Assuming Growl is replaced with equivalent React component */}
          <button className="btn btn-sm" style={{ cursor: 'pointer' }} onClick={addRow} disabled={!hasModifyAccess}>
            <i className="fa fa-user-plus"></i> Add New User
          </button>
          {/* Assuming a Reactified version of ui-grid or a similar React grid component */}
          <div id="serviceGrid" className="ui-grid-selectable">
            {/* Grid data rendered here */}
          </div>
        </div>
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
}

export default PsSecurityComponent;