import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const [unauthorizedError, setUnauthorizedError] = useState('');

  useEffect(() => {
    // Here you would fetch your user, tenantName, activityRight, and canManageAccessReq states
    // This is an example. Adjust it according to your real application logic.
    setCurrentUser('John Doe');
    setTenantName('Example Tenant');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);

  const OpenPopupWindow = () => {
    console.log('Opening help popup...');
  };

  return (
    <div className="container-fluid">
      {unauthorizedError && (
        <div className="alert alert-danger">
          <div className="error">
            <i className="fa fa-lg fa-ban">
              {unauthorizedError}
            </i>
          </div>
        </div>
      )}

      {!unauthorizedError && (
        <div>
          <div>
            {/* Assuming ps-framework, ps-menu, and ps-menu-item are React components you will create based on your AngularJS components */}
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
                <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;