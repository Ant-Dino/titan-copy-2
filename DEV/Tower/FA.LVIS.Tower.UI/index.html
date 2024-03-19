import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  useEffect(() => {
    // This is where you might fetch user data
    // e.g., setCurrentUser('John Doe');
  }, []);
  const handleMenuClick = () => {
    // Your logic to open popup window
  };
  return (
    <div className="container-fluid">
      <div></div> {/* antiforgerytoken equivalent can be handled here if needed */}
      {unauthorizedError && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      )}
      {!unauthorizedError && (
        <div>
          {/* Replace ps-framework and children with your actual component structure */}
          <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <div label="Auditing" route="auditing" icon="fa-bars"></div>
              )}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <div label="Security" route="security" icon="fa-lock"></div>
              )}
              {activityRight === 'SuperAdmin' && (
                <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
              )}
              {canManageAccessReq && (
                <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
              )}
              <div label="Help" route="help" icon="fa-info-circle" onClick={handleMenuClick}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;