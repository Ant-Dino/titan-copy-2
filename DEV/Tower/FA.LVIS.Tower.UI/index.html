import React, { useState, useEffect } from 'react';
const TowerComponent: React.FC = () => {
    const [unauthorizedError, setUnauthorizedError] = useState(false);
    const [currentUser, setCurrentUser] = useState("");
    const [tenantName, setTenantName] = useState("");
    const [activityRight, setActivityRight] = useState("");
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    // Your logic to fetch data or handle side effects
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
                    {/* PsFramework and PsMenuItem components need to be created or imported */}
                    <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
                        <ps-menu>
                            <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
                            <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
                            <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
                            {["Admin", "SuperAdmin"].includes(activityRight) && (
                                <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
                            )}
                            <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
                            {["Admin", "SuperAdmin"].includes(activityRight) && (
                                <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
                            )}
                            {activityRight === 'SuperAdmin' && (
                                <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
                            )}
                            {canManageAccessReq && (
                                <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
                            )}
                            <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={() => {/* OpenPopupWindow logic */}}></ps-menu-item>
                        </ps-menu>
                    </ps-framework>
                </div>
            )}
        </div>
    );
};
export default TowerComponent;