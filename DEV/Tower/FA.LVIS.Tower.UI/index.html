import React, { useState } from 'react';
const App: React.FC = () => {
    const [unauthorized, setUnauthorized] = useState(false);
    const [currentuser, setCurrentUser] = useState('');
    const [tenantname, setTenantName] = useState('');
    const [activityright, setActivityRight] = useState('');
    const [canmanageaccessreq, setCanManageAccessReq] = useState(false);
    // Example function to simulate how you might handle opening a popup window
    const openPopupWindow = () => {
        console.log('Opening popup window...');
    };
    return (
        <div className="container-fluid">
            <div>ANTIFORGERYTOKEN_PLACEHOLDER</div>
            {unauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"></i>{'Unauthorized access error message'}</div>
                </div>
            ) : (
                <div>
                    <PSFramework iconFile="images/FirstAmericanLogo.png" currentUser={currentuser} tenantName={tenantname}>
                        <PSMenu>
                            <PSMenuItem label="Home" route="dashboard" icon="fa-dashboard" />
                            <PSMenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
                            <PSMenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
                            {["Admin", "SuperAdmin"].includes(activityright) && (
                                <PSMenuItem label="Auditing" route="auditing" icon="fa-bars" />
                            )}
                            <PSMenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
                            {["Admin", "SuperAdmin"].includes(activityright) && (
                                <PSMenuItem label="Security" route="security" icon="fa-lock" />
                            )}
                            {activityright === 'SuperAdmin' && (
                                <PSMenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" />
                            )}
                            {canmanageaccessreq && (
                                <PSMenuItem label="Access Request" route="AccessRequest" icon="fa-key" />
                            )}
                            <PSMenuItem label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow} />
                        </PSMenu>
                    </PSFramework>
                </div>
            )}
        </div>
    );
};
export default App;