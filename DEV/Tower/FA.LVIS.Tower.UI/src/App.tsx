import React, { useState, useEffect } from 'react';

export const App = () => {
    const [unauthorized, setUnauthorized] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const [tenantName, setTenantName] = useState('');
    const [activityRight, setActivityRight] = useState('');
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);

    // Example function to simulate fetching user rights or other authentication/authorization logic
    useEffect(() => {
        // Simulate fetching data
        const fetchData = async () => {
            // Example fetched data
            setCurrentUser('John Doe');
            setTenantName('Tenant1');
            setActivityRight('Admin');
            setCanManageAccessReq(true);
            setUnauthorized(false); // Assume user is authorized for simplicity
        };
        fetchData();
    }, []);

    const OpenPopupWindow = () => {
        alert('Help pop-up window!');
    };

    return (
        <div className="container-fluid">
            {!unauthorized ? (
                <>
                    <div>
                        <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
                            <ps-menu>
                                <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
                                <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
                                <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
                                {['Admin', 'SuperAdmin'].includes(activityRight) && (
                                    <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
                                )}
                                <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
                                {['Admin', 'SuperAdmin'].includes(activityRight) && (
                                    <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
                                )}
                                {activityRight === 'SuperAdmin' && (
                                    <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
                                )}
                                {canManageAccessReq && (
                                    <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
                                )}
                                <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></ps-menu-item>
                            </ps-menu>
                        </ps-framework>
                    </div>
                </>
            ) : (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban">Unauthorized Access</i></div>
                </div>
            )}
        </div>
    );
};