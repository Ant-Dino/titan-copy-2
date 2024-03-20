import React, { useState, useEffect } from 'react';
import 'Content/bootstrap.min.css';
import 'Content/ui-grid.css';
import 'Content/font-awesome.min.css';
import './towercss'; // Assuming towercss is now a .css file within the project

const App: React.FC = () => {
  const [unauthorizedError, setUnauthorizedError] = useState(false); // Example error state
  const [currentUser, setCurrentUser] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [activityRight, setActivityRight] = useState("");
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);

  useEffect(() => {
    // Hook to check unauthorized errors, currentUser etc.
    // This could be fetching data from somewhere and then setting it
    // For demonstration, placeholders are used
    setCurrentUser("UserName");
    setTenantName("TenantName");
    setActivityRight("Admin"); // Or 'SuperAdmin'
    setCanManageAccessReq(true);
  }, []);

  const openPopupWindow = () => {
    // Placeholder for openPopupWindow functionality
    console.log('Popup window function');
  }

  return (
    <div className="container-fluid">
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access </i></div>
        </div>
      ) : (
        <div>
          {/* Assuming ps-framework, ps-menu, and ps-menu-item are custom components
              that would need to be converted into React components */}
          <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard" />
              <div label="Reporting" route="reporting" icon="fa-line-chart" />
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
              {["Admin", "SuperAdmin"].includes(activityRight) && <div label="Auditing" route="auditing" icon="fa-bars" />}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
              {["Admin", "SuperAdmin"].includes(activityRight) && <div label="Security" route="security" icon="fa-lock" />}
              {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench" />}
              {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key" />}
              <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;