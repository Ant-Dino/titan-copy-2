import React, { useState } from 'react';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [errors, setErrors] = useState({ unauthorized: false });
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  const openPopupWindow = () => {
    // Implement the logic to open a popup window
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              {["Admin", "SuperAdmin"].includes(activityRight) && (
                <>
                  <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
                  <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
                </>
              )}
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              {activityRight === 'SuperAdmin' && (
                <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
              )}
              {canManageAccessReq && (
                <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
              )}
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};
export default App;