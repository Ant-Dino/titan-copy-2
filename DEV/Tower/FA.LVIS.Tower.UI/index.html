import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [activityRight, setActivityRight] = useState<string>('User'); // Assuming a default value, adjust as necessary.
    const [errors, setErrors] = useState<{ unauthorized?: string }>({});
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
    // Simulate fetching data on mount (e.g., authentication status, user permissions)
    useEffect(() => {
        // Your fetch logic here. This is a sample.
        setCurrentUser('John Doe');
        setTenantName('Example Tenant');
        setActivityRight('Admin');
        setErrors({ unauthorized: '' }); // Assume no error initially.
        setCanManageAccessReq(true);
    }, []);
    const openPopupWindow = () => {
        // Your logic to open a popup window
        console.log('Opening help popup window');
    };
    return (
        <div className="container-fluid">
            <div antiforgerytoken></div>
            {errors.unauthorized ?
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
                </div>
                :
                <div>
                    {/* Assuming ps-framework and ps-menu are components you will need to create or adapt */}
                    <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
                        <div>
                            <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                            <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                            <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
                            <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div>}
                            {activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
                            {canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
                            <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};
export default App;