import React, { useState, useEffect } from 'react';
type AppProps = {};
const App: React.FC<AppProps> = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [tenantName, setTenantName] = useState<string | null>(null);
  const [activityRight, setActivityRight] = useState<string | null>(null);
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [unauthorizedError, setUnauthorizedError] = useState<string | null>(null);
  useEffect(() => {
    // Assume these are asynchronous calls to fetch user data and rights
    setCurrentUser("John Doe");
    setTenantName("Tenant XYZ");
    setActivityRight("Admin");
    setCanManageAccessReq(true);
    // Fetch errors if any
    // If unauthorized:
    // setUnauthorizedError("Unauthorized access error message.");
  }, []);
  const OpenPopupWindow = () => {
    // Assume this opens a help popup
    console.log("Help popup opened");
  };
  return (
    <div className="container-fluid">
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error">
            <i className="fa fa-lg fa-ban"> {unauthorizedError}</i>
          </div>
        </div>
      ) : (
        <div>
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              {['Admin', 'SuperAdmin'].includes(activityRight || '') && (
                <>
                  <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
                  <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
                </>
              )}
              <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench" ng-show={(activityRight === 'SuperAdmin')}></ps-menu-item>
              {canManageAccessReq && (
                <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
              )}
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};
export default App;