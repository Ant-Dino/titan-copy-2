import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>("");
  const [tenantName, setTenantName] = useState<string>("");
  const [activityRight, setActivityRight] = useState<string>("");
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [unauthorizedError, setUnauthorizedError] = useState<string>("");
  useEffect(() => {
    // You might fetch user and app data here and set it accordingly
    // For demonstration, the variables are hardcoded
    setCurrentUser("JohnDoe");
    setTenantName("ExampleTenant");
    setActivityRight("Admin");
    setCanManageAccessReq(true);
    setUnauthorizedError(""); // Assuming no error by default
  }, []);
  const openPopupWindow = () => {
    // Implement the logic to open a popup window
    console.log("Popup window opened");
  };
  return (
    <div className="container-fluid">
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      ) : (
        <div>
          {/* Replace ps-framework with the corresponding React component or JSX */}
          {/* This is a placeholder representing the app's framework component */}
          <div>
            {/* Each ps-menu-item would be a React component or direct JSX representation */}
            <div label="Home" route="dashboard" icon="fa-dashboard">Home</div>
            <div label="Reporting" route="reporting" icon="fa-line-chart">Reporting</div>
            <div label="Mapping Tables" route="Customermappings" icon="fa-cogs">Mapping Tables</div>
            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
              <div label="Auditing" route="auditing" icon="fa-bars">Auditing</div>
            )}
            <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle">Exceptions</div>
            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
              <div label="Security" route="security" icon="fa-lock">Security</div>
            )}
            {activityRight === 'SuperAdmin' && (
              <div label="Utilities" route="confirmservicerequest" icon="fa-wrench">Utilities</div>
            )}
            {canManageAccessReq && (
              <div label="Access Request" route="AccessRequest" icon="fa-key">Access Request</div>
            )}
            <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}>Help</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;