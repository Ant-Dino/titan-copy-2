import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [unauthorized, setUnauthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  // This effect is for demonstration.
  // Replace it with your actual logic to obtain required state.
  useEffect(() => {
    // Mockup fetching user data and rights
    setCurrentUser('John Doe');
    setTenantName('Company Name');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);
  const openPopupWindow = () => {
    // This should open your popup window
    console.log('Open popup window');
  };
  return (
    <div className="container-fluid">
      <div></div> {/* Placeholder for antiforgerytoken */}
      {unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized access error message here </i></div>
        </div>
      ) : (
        <div>
          {/* Notice how directives and AngularJS specific attributes are replaced or omitted */}
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              {(['Admin', 'SuperAdmin'].includes(activityRight)) && <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>}
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              {(['Admin', 'SuperAdmin'].includes(activityRight)) && <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>}
              {activityRight === 'SuperAdmin' && <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>}
              {canManageAccessReq && <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>}
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};
export default App;