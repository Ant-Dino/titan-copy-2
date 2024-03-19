import React, { useState, useEffect } from 'react';
import './App.css';
// Import necessary styles and scripts here
// For example: import 'bootstrap/dist/css/bootstrap.min.css';
type ErrorState = {
  unauthorized?: string;
};
type UserRight = 'Admin' | 'SuperAdmin' | 'User';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('John Doe');
  const [tenantName, setTenantName] = useState<string>('TenantName');
  const [activityRight, setActivityRight] = useState<UserRight>('User');
  const [errors, setErrors] = useState<ErrorState>({});
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setErrors({ unauthorized: '' }); // Assume user is authorized
      // dynamically set user rights, for demo purpose use 'Admin'
      setActivityRight('Admin');
      setCanManageAccessReq(true);
    }, 1000);
  }, []);
  const hasAdminOrSuperAdminRight = ['Admin', 'SuperAdmin'].includes(activityRight);
  return (
    <div className="container-fluid">
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error">
            <i className="fa fa-lg fa-ban">{` ${errors.unauthorized}`}</i>
          </div>
        </div>
      )}
      {!errors.unauthorized && (
        <div>
          {/* Incorporate your custom components here such as ps-framework etc. */}
          {/* For demonstration, generic divs are used */}
          <div>Icon File: images/FirstAmericanLogo.png</div>
          <div>Current User: {currentUser}</div>
          <div>Tenant Name: {tenantName}</div>
          {/* Replace ps-menu and ps-menu-item with your own implementations */}
          <div>
            <div>Home (dashboard)</div>
            <div>Reporting (reporting)</div>
            <div>Mapping Tables (Customermappings)</div>
            {hasAdminOrSuperAdminRight && <div>Auditing (auditing)</div>}
            <div>Exceptions (businessexception)</div>
            {hasAdminOrSuperAdminRight && <div>Security (security)</div>}
            {activityRight === 'SuperAdmin' && <div>Utilities (confirmservicerequest)</div>}
            {canManageAccessReq && <div>Access Request (AccessRequest)</div>}
            <div>Help (help) - Click to open popup</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;