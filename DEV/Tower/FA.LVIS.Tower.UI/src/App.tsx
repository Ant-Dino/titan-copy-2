import React, { useState, useEffect } from 'react';

export const App = () => {
  const [authorized, setAuthorized] = useState(true);
  const [errors, setErrors] = useState({ unauthorized: '' });
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);

  const fetchUserDetails = () => {
    // Simulating fetching user data
    setCurrentUser('John Doe');
    setTenantName('My Company');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
    setAuthorized(true);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (!authorized) {
    return (
      <div className="alert alert-danger">
        <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      {/* antiforgerytoken equivalent in React could be implemented with secure HTTP headers or state management libraries/data fetching libraries. */}
      <div>
        {errors.unauthorized && (
          <div className="alert alert-danger">
            <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
          </div>
        )}
        {!errors.unauthorized && (
          <div>
            {/* ps-framework and its children need to be implemented as React components for reusability */}
            {/* Example for passing props and using children in React components */}
            <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
              {/* React components for ps-menu and ps-menu-item should be created */}
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
                <div label="Help" route="help" icon="fa-info-circle" onClick={() => console.log('OpenPopupWindow simulated')}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};