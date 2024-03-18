import React, { useState, useEffect } from 'react';
export const App = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  const [canManageAccessRequest, setCanManageAccessRequest] = useState<boolean>(false);
  // Assume these are fetched or derived from some context or service
  useEffect(() => {
    // Mock implementations for demonstration
    setCurrentUser('John Doe');
    setTenantName('Tenant XYZ');
    setActivityRight('Admin');
    setUnauthorizedError('');
    setCanManageAccessRequest(true);
  }, []);
  return (
    <div className="container-fluid">
      <div antiforgerytoken=""></div>
      {unauthorizedError && (
        <div className="alert alert-danger">
          <div className="error">
            <i className="fa fa-lg fa-ban">{unauthorizedError}</i>
          </div>
        </div>
      )}
      {!unauthorizedError && (
        <div>
          {/* Sample component structure, assuming ps-framework and ps-menu-item components are adapted for React */}
          <Framework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <Menu>
              <MenuItem label="Home" route="dashboard" icon="fa-dashboard" />
              <MenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
              <MenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
              {["Admin", "SuperAdmin"].includes(activityRight) && (
                <>
                  <MenuItem label="Auditing" route="auditing" icon="fa-bars" />
                  <MenuItem label="Security" route="security" icon="fa-lock" />
                </>
              )}
              <MenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
              {activityRight === 'SuperAdmin' && <MenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" />}
              {canManageAccessRequest && <MenuItem label="Access Request" route="AccessRequest" icon="fa-key" />}
              <MenuItem label="Help" route="help" icon="fa-info-circle" onClick={() => alert('Help clicked!')} />
            </Menu>
          </Framework>
        </div>
      )}
    </div>
  );
};
export default App;