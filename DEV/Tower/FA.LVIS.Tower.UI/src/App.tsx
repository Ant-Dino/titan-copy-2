import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [errors, setErrors] = useState({ unauthorized: false });
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  useEffect(() => {
    // This is where you might fetch user data
  }, []);
  const openPopupWindow = () => {
    // Implement the popup window logic here
  };
  return (
    <div className="container-fluid">
      <div></div> {/* This might be where an antiforgerytoken equivalent should go */}
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          {/* Here you would replace ps-framework and related components with their React equivalent */}
          <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            {/* ps-menu and ps-menu-item components should be replaced by respective React components */}
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {["Admin", "SuperAdmin"].includes(activityRight) && (
                <div label="Auditing" route="auditing" icon="fa-bars"></div>
              )}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {["Admin", "SuperAdmin"].includes(activityRight) && (
                <div label="Security" route="security" icon="fa-lock"></div>
              )}
              {activityRight === 'SuperAdmin' && (
                <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
              )}
              {canManageAccessReq && (
                <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
              )}
              <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;