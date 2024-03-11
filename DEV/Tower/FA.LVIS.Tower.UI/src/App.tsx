import React, { useState, useEffect } from 'react';
import './App.css'; // Import corresponding CSS for your component, adjust the path as needed

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [errors, setErrors] = useState<{ unauthorized: string | null }>({ unauthorized: null });
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  useEffect(() => {
    // Initialize or fetch data here. For example:
    // setCurrentUser('John Doe');
    // setTenantName('MyCompany');
    // setErrors({ unauthorized: 'Unauthorized access detected.' });
    // setActivityRight('Admin');
    // setCanManageAccessReq(true);
  }, []);

  const OpenPopupWindow = () => {
    console.log("Opening popup window or perform any action");
  };

  return (
    <div className="container-fluid">
      <div antiforgerytoken="true"></div>
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error">
            <i className="fa fa-lg fa-ban"> {errors.unauthorized}</i>
          </div>
        </div>
      )}
      {!errors.unauthorized && (
        <div>
          {/* Placeholder for ps-framework, since it's AngularJS specific, assume it's a hypothetical React component or replaced accordingly with your logic */}
          <div className="ps-framework" iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            {/* Placeholder for ps-menu and ps-menu-item since these are AngularJS specific, 
            assume these are hypothetical React components or replaced accordingly with your logic */}
            <div className="ps-menu">
              <div className="ps-menu-item" label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div className="ps-menu-item" label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div className="ps-menu-item" label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div className="ps-menu-item" label="Auditing" route="auditing" icon="fa-bars"></div>}
              <div className="ps-menu-item" label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div className="ps-menu-item" label="Security" route="security" icon="fa-lock"></div>}
              {activityRight === 'SuperAdmin' && <div className="ps-menu-item" label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
              {canManageAccessReq && <div className="ps-menu-item" label="Access Request" route="AccessRequest" icon="fa-key"></div>}
              <div className="ps-menu-item" label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;