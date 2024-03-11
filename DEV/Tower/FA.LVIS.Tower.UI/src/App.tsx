import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming the CSS is similar, you might need to adjust this path

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [errors, setErrors] = useState<{unauthorized: string}>({unauthorized: ''});
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  // Example: simulate fetching user data and error handling
  useEffect(() => {
    // Placeholder: Fetch logic here. You would replace this with actual fetch calls.
    setCurrentUser('John Doe');
    setTenantName('Company XYZ');
    setActivityRight('Admin');
    setErrors({ unauthorized: '' });
    setCanManageAccessReq(true);
  }, []);

  // Example function, replace with actual logic
  const openPopupWindow = () => alert('Open Help Popup!');

  return (
    <div className="container-fluid">
      <div></div> {/* Empty div as placeholder for antiforgerytoken */}
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban">{errors.unauthorized}</i></div>
        </div>
      )}

      {!errors.unauthorized && (
        <div>
          {/* Framework and Menu components would need to be created as React components */}
          {/* This is a simplistic representation assuming these components were created */}
          {/* PsFramework and PsMenuItem representing the custom components */}
          <PsFramework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <PsMenu>
              <PsMenuItem label="Home" route="dashboard" icon="fa-dashboard" />
              <PsMenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
              <PsMenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
              <PsMenuItem label="Auditing" route="auditing" icon="fa-bars" show={["Admin", "SuperAdmin"].includes(activityRight)} />
              <PsMenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
              <PsMenuItem label="Security" route="security" icon="fa-lock" show={["Admin", "SuperAdmin"].includes(activityRight)} />
              <PsMenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityRight === 'SuperAdmin'} />
              <PsMenuItem label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq} />
              <PsMenuItem label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow} />
            </PsMenu>
          </PsFramework>
        </div>
      )}
    </div>
  );
};

export default App;