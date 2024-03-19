import React, { useState, useEffect } from 'react';
const App = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  useEffect(() => {
    // You might want to fetch user data or handle similar side effects here
    // These values are placeholders and should represent your actual application's state management logic
    setCurrentUser('Example User');
    setTenantName('Example Tenant');
    setActivityRight('Admin'); // Example rights: 'Admin', 'SuperAdmin', or others as per your application's logic
    setCanManageAccessReq(true);
    setUnauthorizedError(''); // Set an error message here if needed
  }, []);
  const renderMenuItem = (label: string, route: string, icon: string, show: boolean = true) => {
    return show ? (
      <div>
        <i className={icon} /> {label}
      </div>
    ) : null;
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken="true"></div>
      {unauthorizedError && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      )}
      {!unauthorizedError && (
        <div>
          {/* Placeholder for ps-framework component or equivalent React component */}
          <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            {/* Assume ps-menu and ps-menu-item are represented as their React equivalents */}
            {renderMenuItem('Home', 'dashboard', 'fa-dashboard')}
            {renderMenuItem('Reporting', 'reporting', 'fa-line-chart')}
            {renderMenuItem('Mapping Tables', 'Customermappings', 'fa-cogs')}
            {renderMenuItem('Auditing', 'auditing', 'fa-bars', activityRight === 'Admin' || activityRight === 'SuperAdmin')}
            {renderMenuItem('Exceptions', 'businessexception', 'fa-exclamation-triangle')}
            {renderMenuItem('Security', 'security', 'fa-lock', activityRight === 'Admin' || activityRight === 'SuperAdmin')}
            {renderMenuItem('Utilities', 'confirmservicerequest', 'fa-wrench', activityRight === 'SuperAdmin')}
            {renderMenuItem('Access Request', 'AccessRequest', 'fa-key', canManageAccessReq)}
            {renderMenuItem('Help', 'help', 'fa-info-circle', true, () => window.alert("Help clicked"))}
          </div>
        </div>
      )}
    </div>
  );
};
export default App;