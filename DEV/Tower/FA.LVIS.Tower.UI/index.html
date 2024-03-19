import React, { useState, useEffect } from 'react';

/*
  Assuming the original AngularJS application made use of certain services, 
  controllers, directives, etc., the direct conversion to React will inherently 
  be a simplification as React and AngularJS manage state, side effects, and 
  component structuring in markedly different ways. 
  
  For the Directives and AngularJS specific attributes like ng-show, ng-controller, 
  a direct mapping to React equivalent will be necessary. This will often involve 
  useState for state management and useEffect for lifecycle hooks if needed.
  
  This example will also assume some liberties in the interpretation of how AngularJS 
  specifics translate into React, especially because custom directives/components in 
  AngularJS like <ps-framework>, <ps-menu>, <ps-menu-item> don't have direct React equivalents 
  without seeing their implementations. 
  Placeholders for these will be used and should be implemented according to their AngularJS behavior.
*/

interface MenuItemProps {
    label: string;
    route: string;
    icon: string;
    show?: boolean;  // Optional, to handle ng-show
}

const MenuItem: React.FC<MenuItemProps> = ({ label, route, icon, show = true }) => {
    if (!show) return null;
    // Placeholder for actual navigation logic and icon rendering
    return (
        <div>
            <i className={icon}></i> {label}
        </div>
    );
}

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<string | null>(null);
    const [tenantName, setTenantName] = useState<string | null>(null);
    const [unauthorized, setUnauthorized] = useState<boolean>(false);
    const [activityRight, setActivityRight] = useState<'Admin' | 'SuperAdmin' | 'None'>('None');
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

    useEffect(() => {
        // Example useEffect to mimic Angular controller's initial data fetching or setup
        // Simulating fetching data
        setCurrentUser('ExampleUser');
        setTenantName('ExampleTenant');
        setUnauthorized(false); // Assuming some check goes here
        setActivityRight('Admin');
        setCanManageAccessReq(true);
    }, []);

    return (
        <div className="container-fluid">
            {unauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"></i> Unauthorized</div>
                </div>
            ) : (
                <div>
                    {/* Placeholder for <ps-framework> equivalent */}
                    <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
                        {/* Placeholder for <ps-menu> equivalent */}
                        <div>
                            <MenuItem label="Home" route="dashboard" icon="fa-dashboard" />
                            <MenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
                            <MenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
                            <MenuItem label="Auditing" route="auditing" icon="fa-bars" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} />
                            <MenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
                            <MenuItem label="Security" route="security" icon="fa-lock" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} />
                            <MenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={(activityRight === 'SuperAdmin')} />
                            <MenuItem label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq} />
                            <MenuItem label="Help" route="help" icon="fa-info-circle" show={true} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;