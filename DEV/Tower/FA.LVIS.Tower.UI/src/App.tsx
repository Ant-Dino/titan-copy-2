import React, { useState, useEffect } from 'react';
export const App = () => {
    const [unauthorized, setUnauthorized] = useState(false);
    // Assuming current user and tenant name are fetched from an API or context
    const [currentUser, setCurrentUser] = useState('');
    const [tenantName, setTenantName] = useState('');
    const [activityRight, setActivityRight] = useState('');
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    useEffect(() => {
        // Placeholder for logic to set state
        // Simulating setting states after fetching data (e.g., from an API)
    }, []);
    return (
        <div className="container-fluid">
            <div antiforgerytoken=""></div>
            {unauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {"Unauthorized Access Detected"}</i></div>
                </div>
            ) : (
                <div>
                    {/* Placeholder for ps-framework equivalent in React */}
                    <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
                        {/* Placeholder for ps-menu equivalent in React */}
                        <div>
                            {/* Assuming ps-menu-item equivalents will be separate components */}
                            <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                            <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                            <div label="Mapping Tables" route="customermappings" icon="fa-cogs"></div>
                            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
                            <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div>}
                            {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
                            {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
                            {/* Assuming OpenPopupWindow function will be implemented. */}
                            <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
const OpenPopupWindow = () => {
    // Placeholder for the actual popup opening logic
};