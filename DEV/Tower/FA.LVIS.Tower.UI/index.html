import React, { useState, useEffect } from 'react';
const TowerApp: React.FC = () => {
  const [currentuser, setCurrentuser] = useState<string>('');
  const [tenantname, setTenantname] = useState<string>('');
  const [activityright, setActivityright] = useState<string>('');
  const [canmanageaccessreq, setCanmanageaccessreq] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  useEffect(() => {
    // Mimic fetching user data & rights from API on component mount
    setCurrentuser('John Doe');
    setTenantname('Example Tenant');
    setActivityright('Admin');
    setCanmanageaccessreq(true);
    // Simulate auth error
    // setErrors({ unauthorized: "Unauthorized access" });
  }, []);
  const OpenPopupWindow = () => {
    console.log("Help popup opened");
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken="true"></div>
      {errors.unauthorized ?
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
        :
        <div>
          <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentuser} tenantname={tenantname}>
            <ps-menu>
              <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
              <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
              <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
              <ps-menu-item label="Auditing" route="auditing" icon="fa-bars" show={(activityright === 'Admin') || (activityright === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
              <ps-menu-item label="Security" route="security" icon="fa-lock" show={(activityright === 'Admin') || (activityright === 'SuperAdmin')}></ps-menu-item>
              <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityright === 'SuperAdmin'}></ps-menu-item>
              <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key" show={canmanageaccessreq}></ps-menu-item>
              <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></ps-menu-item>
            </ps-menu>
          </ps-framework>
        </div>
      }
    </div>
  );
};
export default TowerApp;