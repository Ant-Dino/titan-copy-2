import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [tenantName, setTenantName] = useState('');
    const [activityRight, setActivityRight] = useState('');
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    const [unauthorizedError, setUnauthorizedError] = useState('');
    // Mimicking data fetching or any initialization logic
    useEffect(() => {
        // Setup logic goes here; For demonstration, let's use hardcoded values
        setCurrentUser('John Doe');
        setTenantName('Example Tenant');
        setActivityRight('Admin');
        setCanManageAccessReq(true);
        // Simulate an unauthorized error
        setUnauthorizedError('Unauthorized Access!'); // Comment to simulate no errors
    }, []);
    return (
        <div className="container-fluid">
            <div antiforgerytoken="true"></div>
            {unauthorizedError ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
                </div>
            ) : (
                <div>
                    {/* Assuming ps-framework, ps-menu, and ps-menu-item are components you will implement */}
                    <ps-framework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
                        <ps-menu>
                            <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
                            <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
                            <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
                            <ps-menu-item label="Auditing" route="auditing" icon="fa-bars" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></ps-menu-item>
                            <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
                            <ps-menu-item label="Security" route="security" icon="fa-lock" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></ps-menu-item>
                            <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityRight === 'SuperAdmin'}></ps-menu-item>
                            <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq}></ps-menu-item>
                            <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={() => alert('Open help popup')}></ps-menu-item>
                        </ps-menu>
                    </ps-framework>
                </div>
            )}
        </div>
    );
};
export default App;