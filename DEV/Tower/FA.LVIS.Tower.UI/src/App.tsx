import React, { useState, useEffect } from 'react';
type AppProps = {};
const App: React.FC<AppProps> = () => {
  const [unauthorized, setUnauthorized] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('User'); // Example: 'User', 'Admin', 'SuperAdmin'
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  // simulate fetching user rights and unauthorized status
  useEffect(() => {
    // Here, you should fetch user data and unauthorized status from your back-end or service
    // For this example, we'll just set these values statically
    setCurrentUser('Jane Doe');
    setTenantName('Example Tenant');
    setActivityRight('Admin'); // Change this as needed to 'SuperAdmin' or 'User'
    setCanManageAccessReq(true);
    setUnauthorized(false); // Change this to true to simulate unauthorized access
  }, []);
  return (
    <div className="container-fluid">
      {!unauthorized ? (
        <div>
          {/* This should be componentized further depending on your routing and framework setup */}
          <div antiforgerytoken></div>
          <ps-framework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>}
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>}
              {activityRight === 'SuperAdmin' && <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>}
              {canManageAccessReq && <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>}
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={() => window.alert("Help Popup")} ></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      ) : (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access Detected</i></div>
        </div>
      )}
    </div>
  );
};
export default App;