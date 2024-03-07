import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming your CSS is in App.css, adjust if necessary

const App: React.FC = () => {
    const [currentuser, setCurrentUser] = useState('');
    const [tenantname, setTenantName] = useState('');
    const [activityright, setActivityRight] = useState('');
    const [canmanageaccessreq, setCanManageAccessReq] = useState(false);
    const [errors, setErrors] = useState({ unauthorized: false });

    // Mimic fetching user rights or other necessary data
    useEffect(() => {
        // Assume we fetch data here and update state accordingly
        // This is just an example, replace with actual data fetching logic
        setCurrentUser('John Doe');
        setTenantName('Example Tenant');
        setActivityRight('Admin');
        setCanManageAccessReq(true);
        setErrors({ unauthorized: false }); // Assuming no errors initially
    }, []);

    return (
        <div className="container-fluid">
            <div antiforgerytoken></div>
            {errors.unauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
                </div>
            ) : (
                <div>
                    <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentuser} tenantname={tenantname}>
                        <ps-menu>
                            <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
                            <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
                            <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
                            {/* Conditional Rendering based on activity right */}
                            {(activityright === 'Admin' || activityright === 'SuperAdmin') && (
                                <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
                            )}
                            <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
                            {/* Conditional Rendering based on activity right */}
                            {(activityright === 'Admin' || activityright === 'SuperAdmin') && (
                                <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
                            )}
                            {/* Conditional Rendering based on super admin right */}
                            {activityright === 'SuperAdmin' && (
                                <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
                            )}
                            {/* Conditional Rendering based on access management right */}
                            {canmanageaccessreq && (
                                <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
                            )}
                            {/* Static Item, assuming it doesn't require conditions */}
                            <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={() => window.alert('Help Clicked!')}></ps-menu-item>
                        </ps-menu>
                    </ps-framework>
                </div>
            )}
        </div>
    );
}

export default App;