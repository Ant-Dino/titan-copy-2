import React, { useState } from 'react';
import './App.css'; // Assuming your CSS imports might look something like this
// Dummy Icons and Images
import dashboardIcon from './icons/dashboard.png';
import reportingIcon from './icons/reporting.png';
import cogsIcon from './icons/cogs.png';
import barsIcon from './icons/bars.png';
import triangleIcon from './icons/triangle.png';
import lockIcon from './icons/lock.png';
import wrenchIcon from './icons/wrench.png';
import keyIcon from './icons/key.png';
import infoCircleIcon from './icons/info-circle.png';
import logo from './images/FirstAmericanLogo.png';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('John Doe');
  const [tenantName, setTenantName] = useState<string>('Tenant Inc.');
  const [activityRight, setActivityRight] = useState<string>('Admin');
  const [errors, setErrors] = useState({ unauthorized: false });
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(true);
  const OpenPopupWindow = () => {
    // Your popup logic here
  };
  return (
    <div className="container-fluid">
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban">{errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          <ps-framework iconFile={logo} currentUser={currentUser} tenantName={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon={dashboardIcon}></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon={reportingIcon}></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon={cogsIcon}></ps-menu-item>
              {["Admin", "SuperAdmin"].includes(activityRight) && <ps-menu-item label="Auditing" route="auditing" icon={barsIcon}></ps-menu-item>}
              <ps-menu-item label="Exceptions" route="businessexception" icon={triangleIcon}></ps-menu-item>
              {["Admin", "SuperAdmin"].includes(activityRight) && <ps-menu-item label="Security" route="security" icon={lockIcon}></ps-menu-item>}
              {activityRight === "SuperAdmin" && <ps-menu-item label="Utilities" route="confirmservicerequest" icon={wrenchIcon}></ps-menu-item>}
              {canManageAccessReq && <ps-menu-item label="Access Request" route="AccessRequest" icon={keyIcon}></ps-menu-item>}
              <ps-menu-item label="Help" route="help" icon={infoCircleIcon} onClick={OpenPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};
export default App;