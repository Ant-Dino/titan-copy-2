import React, { useState, useEffect } from 'react';
import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './towercss';
// Assuming custom components and hooks for fetching user and tenant information, and handling unauthorized access
// import { PsFramework, PsMenu, PsMenuItem } from './components';
// import { useCurrentUser, useTenantName, useUnauthorizedError } from './hooks';
const App = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [tenantName, setTenantName] = useState<string | null>(null);
  const [unauthorizedError, setUnauthorizedError] = useState<string | null>(null);
  const [activityRight, setActivityRight] = useState<string | null>(null);
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  useEffect(() => {
    // Fetch current user, tenant name, and other necessary data here
    // Assuming functions fetchCurrentUser, fetchTenantName exist
    // setCurrentUser(fetchCurrentUser());
    // setTenantName(fetchTenantName());
    // Here, directly setting example values, but in a real app, you would fetch these from your API or Context
    setCurrentUser('John Doe');
    setTenantName('Example Tenant');
    // Similarly, set errors and rights based on the fetched data or user status
    setUnauthorizedError(null); // or set error message if unauthorized
    setActivityRight('Admin'); // Example, normally this would be fetched
    setCanManageAccessReq(true); // Example
  }, []);
  const OpenPopupWindow = () => {
    // Dummy function for handling clicks
    console.log('Opening help...');
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken=""></div>
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      ) : (
        <div>
          {/* PsFramework, PsMenu, PsMenuItem would be your custom components */}
          {/* Assuming they have been created to replicate the AngularJS directive's functionality */}
          <div /* PsFramework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName} */>
            <div /* PsMenu */>
              <div /* PsMenuItem */ label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div /* PsMenuItem */ label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div /* PsMenuItem */ label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              { (activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div /* PsMenuItem */ label="Auditing" route="auditing" icon="fa-bars"></div> }
              <div /* PsMenuItem */ label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              { (activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div /* PsMenuItem */ label="Security" route="security" icon="fa-lock"></div> }
              { activityRight === 'SuperAdmin' && <div /* PsMenuItem */ label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div> }
              { canManageAccessReq && <div /* PsMenuItem */ label="Access Request" route="AccessRequest" icon="fa-key"></div> }
              <div /* PsMenuItem */ label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;