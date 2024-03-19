import React, { useState, useEffect } from 'react';
export const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [activityRight, setActivityRight] = useState<string>('');
    const [errors, setErrors] = useState<{ unauthorized?: string }>({});
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
    useEffect(() => {
        // Simulate fetching user, tenant information, rights and errors from an API
        // Here you can use something like Axios or Fetch API to get the user details and set them
        setCurrentUser('John Doe');
        setTenantName('Company Inc.');
        setActivityRight('Admin');
        setErrors({ unauthorized: '' });
        setCanManageAccessReq(true);
    }, []);
    const openPopupWindow = () => {
        console.log("Popup window opened");
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
                    {/* ps-framework and other components conversion need to be handled as per the project's component architecture */}
                    <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
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
            )}
        </div>
    );
};
export default App;