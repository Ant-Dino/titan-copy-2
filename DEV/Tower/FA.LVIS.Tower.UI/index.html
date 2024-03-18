import React, { useState, useEffect } from 'react';
// Assuming "ps-framework", "ps-menu", and "ps-menu-item" components need to be created or have been created in React
const TowerComponent: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  // Placeholder function for openPopupWindow functionality
  const openPopupWindow = () => {
    console.log('Popup window opened');
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {unauthorizedError && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      )}
      {!unauthorizedError && (
        <div>
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') &&
                <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
              }
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') &&
                <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
              }
              {activityRight === 'SuperAdmin' &&
                <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
              }
              {canManageAccessReq &&
                <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
              }
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};
export default TowerComponent;