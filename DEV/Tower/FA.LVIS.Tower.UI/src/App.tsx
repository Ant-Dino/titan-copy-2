import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [unauthorized, setUnauthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);

  // Example of fetching data or any setup you need on component mount
  useEffect(() => {
    // Simulation of fetching data
    // You would replace this with actual data fetching e.g. from an API
    setCurrentUser('JohnDoe');
    setTenantName('ExampleTenant');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);

  return (
    <div className="container-fluid">
      {unauthorized ? (
        <div className="alert alert-danger">
          <div className="error">
            <i className="fa fa-lg fa-ban"></i> Unauthorized Access
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div antiforgerytoken=""></div>
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <React.Fragment>
                  <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
                  <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
                </React.Fragment>
              )}
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              {activityRight === 'SuperAdmin' && <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>}
              {canManageAccessReq && <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>}
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={() => alert('Help Clicked')}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </React.Fragment>
      )}
    </div>
  );
};

export default App;