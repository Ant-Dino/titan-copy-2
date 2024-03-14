import React, { useState, useEffect } from 'react';

import 'Content/bootstrap.min.css';
import 'Content/ui-grid.css';
import 'Content/font-awesome.min.css';
import 'towercss';
// Note: You should import your scripts here if they're compatible with React or rewrite their logic within components.

interface ErrorState {
    unauthorized: string;
}

interface MenuItemProps {
    label: string;
    route: string;
    icon: string;
    displayCondition?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, route, icon, displayCondition = true }) => {
    if (!displayCondition) return null;

    // Logic for handling route change or click event should go here.
    // This is a placeholder function. You might use react-router-dom for navigation, for example.
    const handleClick = () => {
        console.log(`Navigating to ${route}`);
    };

    return (
        <div className={`fa ${icon}`} onClick={handleClick}>
            {label}
        </div>
    );
};

const App: React.FC = () => {
    const [errors, setErrors] = useState<ErrorState>({ unauthorized: '' });
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [activityRight, setActivityRight] = useState<string>('');
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

    // Logic to fetch user data, permissions, etc., would go here
    useEffect(() => {
        // Mock fetching data
        setCurrentUser('John Doe');
        setTenantName('Some Tenant');
        setActivityRight('Admin');
        setCanManageAccessReq(true);
    }, []);

    return (
        <div className="container-fluid">
            {errors.unauthorized && (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
                </div>
            )}
            {!errors.unauthorized && (
                <div>
                    {/* Placeholder for ps-framework equivalent in React */}
                    <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
                        {/* Placeholder for ps-menu equivalent in React */}
                        <div>
                            <MenuItem label="Home" route="dashboard" icon="fa-dashboard" />
                            <MenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
                            <MenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
                            <MenuItem label="Auditing" route="auditing" displayCondition={["Admin", "SuperAdmin"].includes(activityRight)} icon="fa-bars" />
                            <MenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
                            <MenuItem label="Security" route="security" displayCondition={["Admin", "SuperAdmin"].includes(activityRight)} icon="fa-lock" />
                            <MenuItem label="Utilities" route="confirmservicerequest" displayCondition={activityRight === 'SuperAdmin'} icon="fa-wrench" />
                            <MenuItem label="Access Request" route="AccessRequest" displayCondition={canManageAccessReq} icon="fa-key" />
                            <MenuItem label="Help" route="help" icon="fa-info-circle" onClick={() => console.log('Open help popup')} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;