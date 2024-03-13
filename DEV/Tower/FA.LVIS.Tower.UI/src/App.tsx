/*
  Import statements would typically be at the top of your component file.
  Including React, hooks, and any components or assets you need.
*/

import React, { useState } from 'react';
import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './towercss'; // Assuming that 'towercss' is properly configured to be imported

// Import other required scripts or components if they have been converted to React.

const TowerApp: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  const openPopupWindow = (): void => {
    // Function to open a popup window, implement the logic as per requirement
  };

  return (
    <div className="container-fluid">
      {/* antiforgerytoken equivalent functionality needs to be implemented in React,
          potentially as a component or using hooks like useEffect at the top level of this component or app */}
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      ) : (
        <div>
          {/* ps-framework, ps-menu, ps-menu-item would be your custom or third-party components to be converted or found as equivalent in React */}
          <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div>}
              {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
              {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
              <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TowerApp;