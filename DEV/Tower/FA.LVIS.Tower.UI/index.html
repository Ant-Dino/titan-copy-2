import React, { useState, useEffect } from 'react';
import './App.css'; // Assume tower CSS and other required CSS are imported here

// Assuming antiforgerytoken is implemented in a different way in React
// Assuming ps-framework, ps-menu, ps-menu-item components are created and imported
import { PsFramework, PsMenu, PsMenuItem } from './components';

interface ErrorState {
  unauthorized?: string;
}

interface UserRights {
  activityright: 'Admin' | 'SuperAdmin' | 'User';
  canmanageaccessreq: boolean;
}

const App: React.FC = () => {
  const [errors, setErrors] = useState<ErrorState>({});
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [userRights, setUserRights] = useState<UserRights>({ activityright: 'User', canmanageaccessreq: false });
  
  // Example useEffect to mimic fetching data and setting state accordingly. Adjust based on actual data fetching logic.
  useEffect(() => {
    // Mock fetching data
    const fetchedErrors = { unauthorized: "Unauthorized access error message" }; // Placeholder
    const fetchedUser = "John Doe"; // Placeholder
    const fetchedTenantName = "MyTenant"; // Placeholder
    const fetchedUserRights = { activityright: 'Admin', canmanageaccessreq: true }; // Placeholder
    setErrors(fetchedErrors);
    setCurrentUser(fetchedUser);
    setTenantName(fetchedTenantName);
    setUserRights(fetchedUserRights);
  }, []);
  
  return (
    <div className="App container-fluid">
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}
      {!errors.unauthorized && (
        <PsFramework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
          <PsMenu>
            <PsMenuItem label="Home" route="dashboard" icon="fa-dashboard"></PsMenuItem>
            <PsMenuItem label="Reporting" route="reporting" icon="fa-line-chart"></PsMenuItem>
            <PsMenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs"></PsMenuItem>
            {['Admin', 'SuperAdmin'].includes(userRights.activityright) && (
              <PsMenuItem label="Auditing" route="auditing" icon="fa-bars"></PsMenuItem>
            )}
            <PsMenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></PsMenuItem>
            {['Admin', 'SuperAdmin'].includes(userRights.activityright) && (
              <PsMenuItem label="Security" route="security" icon="fa-lock"></PsMenuItem>
            )}
            {userRights.activityright === 'SuperAdmin' && (
              <PsMenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench"></PsMenuItem>
            )}
            {userRights.canmanageaccessreq && (
              <PsMenuItem label="Access Request" route="AccessRequest" icon="fa-key"></PsMenuItem>
            )}
            <PsMenuItem label="Help" route="help" icon="fa-info-circle" onClick={() => alert("Open help window")}></PsMenuItem>
          </PsMenu>
        </PsFramework>
      )}
    </div>
  );
};

export default App;