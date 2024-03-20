import React, { useState, useEffect } from 'react';
export const App: React.FC = () => {
  const [unauthorized, setUnauthorized] = useState<boolean>(false);
  const [currentuser, setCurrentUser] = useState<string>("");
  const [tenantname, setTenantName] = useState<string>("");
  const [activityright, setActivityRight] = useState<string>("");
  const [canmanageaccessreq, setCanManageAccessReq] = useState<boolean>(false);
  // Mimic fetching user rights/auth data
  useEffect(() => {
    // Here you would fetch/initialize your user data and rights
    // and update state accordingly. This is just an example.
    setCurrentUser("John Doe");
    setTenantName("Company Inc.");
    setActivityRight("Admin");
    setCanManageAccessReq(true);
  }, []);
  const openPopupWindow = () => {
    // Popup window logic
    console.warn("Open popup window");
  };
  return (
    <div className="container-fluid">
      <div></div> {/* Placeholder for antiforgerytoken */}
      {unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"></i></div>
        </div>
      ) : (
        <div>
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentuser} tenantname={tenantname}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              <ps-menu-item label="Auditing" route="auditing" icon="fa-bars" show={(activityright === 'Admin') || (activityright === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              <ps-menu-item label="Security" route="security" icon="fa-lock" show={(activityright === 'Admin') || (activityright === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={(activityright === 'SuperAdmin')} ></ps-menu-item>
              <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key" show={canmanageaccessreq}></ps-menu-item>
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      )}
    </div>
  );
};