import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
    const [unauthorizedError, setUnauthorizedError] = useState<string>('');
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [activityRight, setActivityRight] = useState<string>('');
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
    // Example function to simulate fetching user data
    useEffect(() => {
        // Fetch or simulate fetch of user data, rights etc.
        setCurrentUser('John Doe');
        setTenantName('Company Inc.');
        setActivityRight('Admin');
        setCanManageAccessReq(true);
        // Set unauthorized error if needed for demonstration
        // setUnauthorizedError('Unauthorized Access');
    }, []);
    const OpenPopupWindow = () => {
        // Implementation for opening a help pop-up
        console.log('Help popup window opened.');
    };
    return (
        <div className="container-fluid">
            <div></div> {/* AntiforgeryToken equivalent implementation */}
            {unauthorizedError && (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
                </div>
            )}
            {!unauthorizedError && (
                <>
                    {/* ps-framework equivalent component here */}
                    <div>
                        <div icon-file="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
                            {/* ps-menu equivalent component here */}
                            <div>
                                {/* ps-menu-item equivalent components here */}
                                <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                                <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                                <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                                {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
                                <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                                {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div>}
                                {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
                                {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
                                <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
export default App;