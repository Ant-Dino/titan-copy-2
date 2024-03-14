import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>("");
  const [tenantName, setTenantName] = useState<string>("");
  const [errors, setErrors] = useState({ unauthorized: false });
  const [activityRight, setActivityRight] = useState<string>("");
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  useEffect(() => {
    // Here you would fetch or define your initial state, rights, etc.
    // Example:
    setCurrentUser("John Doe");
    setTenantName("Company XYZ");
    setActivityRight("Admin");
    setCanManageAccessReq(true);
  }, []);

  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          {/* ps-framework and ps-menu components need to be created or adapted for React */}
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
              <div label="Help" route="help" icon="fa-info-circle" onClick={() => {/* OpenPopupWindow function to open help */}}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};