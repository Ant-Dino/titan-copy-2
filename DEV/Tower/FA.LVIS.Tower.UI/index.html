import React, { useState, useEffect } from 'react';
const App = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [tenantName, setTenantName] = useState('');
    const [errors, setErrors] = useState({unauthorized: ''});
    const [activityRight, setActivityRight] = useState('');
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    // Assuming fetching user details, tenant details, errors, activity rights and access management ability
    useEffect(() => {
        // Mock fetching data
        setCurrentUser('John Doe');
        setTenantName('TenantName');
        setErrors({unauthorized: 'Unauthorized Access'});
        setActivityRight('Admin');
        setCanManageAccessReq(true);
    }, []);
    const openPopupWindow = () => {
        console.log('Help popup opened');
    };
    return (
        <div className="container-fluid">
            {errors.unauthorized && (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
                </div>
            )}
            {!errors.unauthorized && (
                <div>
                    {/* Assuming 'ps-framework', 'ps-menu', and 'ps-menu-item' are components previously defined */}
                    <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
                        <div>
                            <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                            <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                            <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                            <div label="Auditing" route="auditing" icon="fa-bars" style={{display: (activityRight === 'Admin' || activityRight === 'SuperAdmin') ? '' : 'none'}}></div>
                            <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                            <div label="Security" route="security" icon="fa-lock" style={{display: (activityRight === 'Admin' || activityRight === 'SuperAdmin') ? '' : 'none'}}></div>
                            <div label="Utilities" route="confirmservicerequest" icon="fa-wrench" style={{display: activityRight === 'SuperAdmin' ? '' : 'none'}}></div>
                            <div label="Access Request" route="AccessRequest" icon="fa-key" style={{display: canManageAccessReq ? '' : 'none'}}></div>
                            <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default App;