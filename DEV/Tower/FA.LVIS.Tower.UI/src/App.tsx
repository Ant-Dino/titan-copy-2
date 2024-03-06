// App.tsx
import React, { useState, useEffect } from 'react';
import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './towercss.css';
// Assuming "ps-framework", "ps-menu", "ps-menu-item" components are already defined for React
import PSFramework from './components/PSFramework';
import PSMenu from './components/PSMenu';
import PSMenuItem from './components/PSMenuItem';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  // Simulating fetching user data and error states
  useEffect(() => {
    // Here, you would fetch user data and errors
    // For demonstration, using hardcoded values
    setCurrentUser('John Doe');
    setTenantName('Some Tenant');
    setActivityRight('Admin');
    setUnauthorizedError(''); // Assuming no unauthorized error initially
    setCanManageAccessReq(true);
    }, []);

  const OpenPopupWindow = () => {
    console.log('Help popup opened');
    };

  return (
    <div className="container-fluid">
      {unauthorizedError && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
        )}
      {!unauthorizedError && (
        <PSFramework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
          <PSMenu>
            <PSMenuItem label="Home" route="dashboard" icon="fa-dashboard" />
            <PSMenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
            <PSMenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
            <PSMenuItem label="Auditing" route="auditing" icon="fa-bars" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} />
            <PSMenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
            <PSMenuItem label="Security" route="security" icon="fa-lock" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} />
            <PSMenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityRight === 'SuperAdmin'} />
            <PSMenuItem label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq} />
            <PSMenuItem label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow} />
          </PSMenu>
        </PSFramework>
        )}
    </div>
    );
};

export default App;