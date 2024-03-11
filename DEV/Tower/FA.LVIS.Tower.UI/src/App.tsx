import React, { useState, useEffect } from 'react';

const TowerComponent: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ unauthorized: string | null }>({ unauthorized: null });

  useEffect(() => {
    // Placeholder for auth logic or initial data fetching
    // Assume we fetch the user, tenant, etc. from an API and handle errors
  }, []);

  return (
    <div className="container-fluid">
      <div antiforgerytoken=""></div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error">
            <i className="fa fa-lg fa-ban"> {errors.unauthorized}</i>
          </div>
        </div>
      ) : (
        <div>
          {/* Assuming ps-framework, ps-menu, and ps-menu-item are components you will build or replace */}
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
              <div label="Help" route="help" icon="fa-info-circle" onClick={() => { console.log('Open Help Popup'); }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TowerComponent;