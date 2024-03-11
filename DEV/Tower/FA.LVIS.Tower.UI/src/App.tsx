import React, { useState, useEffect } from 'react';

const TopLevelComponent: React.FC = () => {
  const [unauthorizedError, setUnauthorizedError] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);

  useEffect(() => {
    // Here you would typically fetch data to determine the above states.
    // For the sake of this example, let's assume some default states.
    setCurrentUser('JohnDoe');
    setTenantName('CompanyName');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);

  const OpenPopupWindow = () => {
    // Implement the popup window logic here
  };

  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban">Unauthorized Access</i></div>
        </div>
      ) : (
        <div>
          <ps-framework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              <ps-menu-item label="Auditing" route="auditing" icon="fa-bars" 
                             show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              <ps-menu-item label="Security" route="security" icon="fa-lock" 
                             show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench" 
                             show={activityRight === 'SuperAdmin'}></ps-menu-item>
              <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key" 
                             show={canManageAccessReq}></ps-menu-item>
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};

export default TopLevelComponent;