import React, { useState, useEffect } from 'react';
import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './towercss.css';

export const App = () => {
  const [currentUser, setCurrentUser] = useState<string>("");
  const [tenantName, setTenantName] = useState<string>("");
  const [activityRight, setActivityRight] = useState<string>("");
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});

  useEffect(() => {
    // Simulate fetching data, for example, from an API
    // Update state based on fetched data
    setCurrentUser("John Doe");
    setTenantName("My Company");
    setActivityRight("Admin");
    setCanManageAccessReq(true);
    setErrors({ unauthorized: "Unauthorized access example error" });
  }, []);

  const openPopupWindow = () => {
    // Functionality to open popup window
    console.log("Popup window opened");
  };

  return (
    <div className="container-fluid">
      <div antiforgerytoken=""></div>
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}

      {!errors.unauthorized && (
        <div>
          {/* Replace ps-framework, ps-menu, and ps-menu-item with equivalent React components */}
          {/* This example demonstrates rendering based on condition and passing props */}
          <div icon-file="images/FirstAmericanLogo.png" currentUser={currentUser} tenantname={tenantName}>
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div>}
              {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
              {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
              <div label="Help" route="help" icon="fa-info-circle" onClick={() => openPopupWindow()}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};