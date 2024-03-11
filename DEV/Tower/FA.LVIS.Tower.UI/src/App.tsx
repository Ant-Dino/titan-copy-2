import React, { useState, useEffect } from 'react';
import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './towercss.css';
// 6285 Normally, you would import your scripts here if they were converted to compatible React code or use hooks/effects.

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [unauthorizedError, setUnauthorizedError] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);

  useEffect(() => {
    // This is where you would load your current user, tenant name, check for unauthorized errors etc.
    // This is just a placeholder.
    setCurrentUser('John Doe');
    setTenantName('ExampleTenant');
    setUnauthorizedError(''); // Assume no error for this example.
    setActivityRight('Admin'); // Assume example rights.
    setCanManageAccessReq(true); // Assume they can manage access requests for this example.
  }, []);

  const OpenPopupWindow = () => {
    alert("Help Popup Placeholder");
  }

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
          {/* Assuming ps-framework and ps-menu are components you would also need to convert */}
          <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            {/* ps-menu would be replaced with a React component. Below is a basic structure example */}
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div>}
              {(activityRight === 'SuperAdmin') && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
              {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
              <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;