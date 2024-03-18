import React, { useState, useEffect } from 'react';
const TowerApp = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [tenantName, setTenantName] = useState('');
    const [activityRight, setActivityRight] = useState('');
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    const [unauthorizedError, setUnauthorizedError] = useState('');
    // Assume a function to fetch user and authorization details
    useEffect(() => {
        // fetch and set state related to currentUser, tenantName, activityRight, etc.
    }, []);
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
                    {/* Placeholder for PsFramework equivalent */}
                    <div>
                        {/* Placeholder for PsMenu equivalent */}
                        <div>
                            <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                            <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                            <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                                <div label="Auditing" route="auditing" icon="fa-bars"></div>
                            )}
                            <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                                <div label="Security" route="security" icon="fa-lock"></div>
                            )}
                            {activityRight === 'SuperAdmin' && (
                                <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
                            )}
                            {canManageAccessReq && (
                                <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
                            )}
                            <div label="Help" route="help" icon="fa-info-circle" onClick={() => {/* OpenPopupWindow function logic */}}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default TowerApp;