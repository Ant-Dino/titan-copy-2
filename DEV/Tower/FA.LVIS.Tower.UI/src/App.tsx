import React, { useState, useEffect } from 'react';
const Tower: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [activityRight, setActivityRight] = useState<string>('');
    const [errors, setErrors] = useState<{ unauthorized?: string }>({});
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
    // Mock function to emulate fetching user data and rights
    useEffect(() => {
        // Here you would fetch the user's info and rights from an API
        setCurrentUser('John Doe');
        setTenantName('Company Name');
        setActivityRight('Admin');
        setCanManageAccessReq(true);
    }, []);
    const OpenPopupWindow = () => {
        // Function to open popup window
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
                    {/* PsFramework, PsMenu, and PsMenuItem should be replaced with corresponding React components */}
                    <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
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
                            <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Tower;