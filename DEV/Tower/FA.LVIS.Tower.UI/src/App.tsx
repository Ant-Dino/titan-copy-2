import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const [errors, setErrors] = useState({ unauthorized: false });

  useEffect(() => {
    // Mockup function to simulate fetching user and tenant data
    // In practice, replace this with actual data fetching
    setCurrentUser('User');
    setTenantName('TenantName');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
    // Mockup for handling errors
    setErrors({ unauthorized: false });
  }, []);

  const openPopupWindow = () => {
    // Implement the functionality to open a popup window
    console.log('Popup window opened');
  };

  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error">
            <i className="fa fa-lg fa-ban">{errors.unauthorized}</i>
          </div>
        </div>
      ) : (
        <div>
          {/* ps-framework and other custom components would need to be implemented as React components */}
          <div>
            <div>Logo here - Replace with actual icon component</div>
            <div>Current User: {currentUser}</div>
            <div>Tenant Name: {tenantName}</div>
            <div>
              <div>Home</div>
              <div>Reporting</div>
              <div>Mapping Tables</div>
              {["Admin", "SuperAdmin"].includes(activityRight) && <div>Auditing</div>}
              <div>Exceptions</div>
              {["Admin", "SuperAdmin"].includes(activityRight) && <div>Security</div>}
              {activityRight === 'SuperAdmin' && <div>Utilities</div>}
              {canManageAccessReq && <div>Access Request</div>}
              <div onClick={openPopupWindow}>Help</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;