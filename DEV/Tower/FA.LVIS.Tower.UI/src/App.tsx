import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  useEffect(() => {
    // Setup logic for app like fetch user info or handle state based on auth
    // Dummy setup as an example
    setCurrentUser('John Doe');
    setTenantName('Tenant XYZ');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);
  return (
    <div className="container-fluid">
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      ) : (
        <div>
          {/* Your React components will go here. Substitute for ps-framework and related components */}
          <div className="framework" data-icon-file="images/FirstAmericanLogo.png" data-currentuser={currentUser} data-tenantname={tenantName}>
            {/* MENU */}
            <div className="menu">
              {/* Menu Items will go here */}
              <div className="menu-item" data-label="Home" data-route="dashboard" data-icon="fa-dashboard"></div>
              <div className="menu-item" data-label="Reporting" data-route="reporting" data-icon="fa-line-chart"></div>
              <div className="menu-item" data-label="Mapping Tables" data-route="Customermappings" data-icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <div className="menu-item" data-label="Auditing" data-route="auditing" data-icon="fa-bars"></div>
              )}
              <div className="menu-item" data-label="Exceptions" data-route="businessexception" data-icon="fa-exclamation-triangle"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <div className="menu-item" data-label="Security" data-route="security" data-icon="fa-lock"></div>
              )}
              {activityRight === 'SuperAdmin' && (
                <div className="menu-item" data-label="Utilities" data-route="confirmservicerequest" data-icon="fa-wrench"></div>
              )}
              {canManageAccessReq && (
                <div className="menu-item" data-label="Access Request" data-route="AccessRequest" data-icon="fa-key"></div>
              )}
              {/* Assuming OpenPopupWindow method will be handled within a React context or through direct method */}
              <div className="menu-item" data-label="Help" data-route="help" data-icon="fa-info-circle" onClick={() => {/* OpenPopupWindow logic */}}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;