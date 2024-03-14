import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  // Example fetching user data - Adjust based on your actual data fetching mechanism
  useEffect(() => {
    // Fake API call to get user details
    setCurrentUser("John Doe");
    setTenantName("Example Tenant");
    setActivityRight("Admin");
    setUnauthorizedError("");
    setCanManageAccessReq(true);
  }, []);
  const openPopupWindow = () => {
    // Implement the popup window logic
    alert("Help popup opened");
  };
  return (
    <div className="container-fluid">
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban">{unauthorizedError}</i></div>
        </div>
      ) : (
        // Assuming 'ps-framework', 'ps-menu', and 'ps-menu-item' are components to be built or replaced
        <div>
          {/* Replace these components with actual React components */}
          <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div>}
              {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
              {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
              <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;