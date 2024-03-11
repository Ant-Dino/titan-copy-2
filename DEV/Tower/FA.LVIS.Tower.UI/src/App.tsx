import React, { useState, useEffect } from 'react';
import './App.css'; // Assume your CSS imports are combined in App.css or import them individually

function App() {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [errors, setErrors] = useState<{ unauthorized: string }>({ unauthorized: '' });
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  useEffect(() => {
    // Assume we fetch user details, tenant name, and error info here
    // This is just a placeholder logic, replace it with actual API call or context state updates
    setCurrentUser('Jane Doe');
    setTenantName('Contoso Ltd');
    setErrors({ unauthorized: '' }); // Assume no error initially
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);

  const OpenPopupWindow = () => {
    alert('Help Popup Placeholder');
  };
  
  return (
    <div className="container-fluid">
      <div /* antiforgerytoken - assuming handled through headers in React app */></div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          {/* ps-framework replaced with generic React component structure */}
          <div className="ps-framework" icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            {/* Assuming ps-menu and ps-menu-item components are translated to React components */}
            <div className="ps-menu">
              <div className="ps-menu-item" label="Home" route="dashboard" icon="fa-dashboard">Home</div>
              <div className="ps-menu-item" label="Reporting" route="reporting" icon="fa-line-chart">Reporting</div>
              <div className="ps-menu-item" label="Mapping Tables" route="Customermappings" icon="fa-cogs">Mapping Tables</div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <div className="ps-menu-item" label="Auditing" route="auditing" icon="fa-bars">Auditing</div>
              )}
              <div className="ps-menu-item" label="Exceptions" route="businessexception" icon="fa-exclamation-triangle">Exceptions</div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                <div className="ps-menu-item" label="Security" route="security" icon="fa-lock">Security</div>
              )}
              {activityRight === 'SuperAdmin' && (
                <div className="ps-menu-item" label="Utilities" route="confirmservicerequest" icon="fa-wrench">Utilities</div>
              )}
              {canManageAccessReq && (
                <div className="ps-menu-item" label="Access Request" route="AccessRequest" icon="fa-key">Access Request</div>
              )}
              <div className="ps-menu-item" label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}>Help</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;