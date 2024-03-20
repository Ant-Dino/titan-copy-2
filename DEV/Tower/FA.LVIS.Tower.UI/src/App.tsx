import React, { useState } from 'react';
const App = () => {
  const [unauthorized, setUnauthorized] = useState(false); // Example state for unauthorized error
  const [currentUser, setCurrentUser] = useState(""); // Simulating currentUser data
  const [tenantName, setTenantName] = useState(""); // Simulating tenantName data
  const [activityRight, setActivityRight] = useState(""); // Simulating activityRight data
  const [canManageAccessReq, setCanManageAccessReq] = useState(false); // Simulating access management

  const OpenPopupWindow = () => {
    console.log("Popup window function called");
  };

  return (
    <div className="container-fluid">
      <div antiforgerytoken=""></div>
      {unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {/* Handle unauthorized message display here */}</i></div>
        </div>
      ) : (
        <div>
          {/* Simulating ps-framework with props. Replace with actual component import and usage */}
          <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            {/* Simulating ps-menu. Replace with actual component */}
            <div>
              {/* Simulating ps-menu-item. Repeat for each item replacing with actual component and props */}
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div>}
              {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
              {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
              <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;