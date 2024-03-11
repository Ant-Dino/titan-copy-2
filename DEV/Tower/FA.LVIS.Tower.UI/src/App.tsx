// Tower.tsx
// This is the converted React component from the provided AngularJS index.html

import React, { useState, useEffect } from 'react';
import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './towercss';

const Tower: React.FC = () => {
  // State to manage unauthorized errors and user rights
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');

  // Example function to simulate rights check (would typically fetch this data from an API)
  useEffect(() => {
    // Mock user status
    setCurrentUser('JohnDoe');
    setTenantName('ExampleTenant');
    setActivityRight('Admin');
    // Simulate error condition
    // setErrors({unauthorized: 'Unauthorized Access Detected'});
  }, []);

  // Function to open a popup window, placeholder for actual implementation
  const openPopupWindow = () => {
    console.log('Opening popup window...');
  };

  // Function to check if a certain right exists for utility
  const hasRight = (right: string) => {
    return activityRight === 'Admin' || activityRight === 'SuperAdmin' || right === activityRight;
  };

  return (
    <div className="container-fluid">
      <div> {/* Placeholder div for antiforgerytoken */}</div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban">{errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          {/* Assuming <ps-framework> and other similar elements are custom components 
           * we would need to create or adapt them for React. Below is a simulated structure */}
          <div>
            <img src="images/FirstAmericanLogo.png" alt="Logo" />
            <div>{`Current User: ${currentUser}, Tenant Name: ${tenantName}`}</div>
            <nav>
              {/* 
                Each <ps-menu-item> has been converted to a simple list item for demonstration. 
                Actual implementation would require proper component creation 
              */}
              <ul style={{ listStyleType: 'none' }}>
                <li><a href="#dashboard"><i className="fa fa-dashboard"></i> Home</a></li>
                <li><a href="#reporting"><i className="fa fa-line-chart"></i> Reporting</a></li>
                <li><a href="#Customermappings"><i className="fa fa-cogs"></i> Mapping Tables</a></li>
                {["Admin", "SuperAdmin"].includes(activityRight) && (
                  <>
                    <li><a href="#auditing"><i className="fa fa-bars"></i> Auditing</a></li>
                    <li><a href="#security"><i className="fa fa-lock"></i> Security</a></li>
                  </>
                )}
                <li><a href="#businessexception"><i className="fa fa-exclamation-triangle"></i> Exceptions</a></li>
                {activityRight === 'SuperAdmin' && (
                  <li><a href="#confirmservicerequest"><i className="fa fa-wrench"></i> Utilities</a></li>
                )}
                {/* Assuming `canManageAccessReq` is a state we would also manage */}
                {/* <li><a href="#AccessRequest"><i className="fa fa-key"></i> Access Request</a></li> */}
                <li><a href="#help" onClick={openPopupWindow}><i className="fa fa-info-circle"></i> Help</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tower;