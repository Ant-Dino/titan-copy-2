import React, { useState } from 'react';
const TowerApp: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const OpenPopupWindow = () => {
    console.log('Popup windows function placeholder');
  };
  return (
    <div className="container-fluid">
      <div></div> {/* Placeholder for antiforgerytoken */}
      {errors.unauthorized && (
        <div className="alert alert-danger">
            <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}
      {!errors.unauthorized && (
        <div>
            <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
                <ps-menu>
                    <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
                    <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
                    <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
                    <ps-menu-item label="Auditing" route="auditing" icon="fa-bars" show={["Admin", "SuperAdmin"].includes(activityRight)}></ps-menu-item>
                    <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
                    <ps-menu-item label="Security" route="security" icon="fa-lock" show={["Admin", "SuperAdmin"].includes(activityRight)}></ps-menu-item>
                    <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityRight === 'SuperAdmin'}></ps-menu-item>
                    <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq}></ps-menu-item>
                    <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></ps-menu-item>
                </ps-menu>
            </ps-framework>
        </div>
      )}
    </div>
  );
};
export default TowerApp;