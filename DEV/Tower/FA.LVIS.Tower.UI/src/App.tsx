import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming your CSS files are imported here as needed
type MenuProps = {
  iconFile: string;
  currentUser: string;
  tenantName: string;
  activityRight: string;
  canManageAccessReq: boolean;
};
const App = () => {
  const [unauthorizedError, setUnauthorizedError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  // Placeholder for your authentication and initialization logic
  useEffect(() => {
    // Simulate fetching data
    setCurrentUser("Example User");
    setTenantName("Example Tenant");
    setActivityRight("Admin");
    setCanManageAccessReq(true);
    // Simulate an authorization check
    setUnauthorizedError(null);
  }, []);
  const openPopupWindow = () => {
    // Placeholder for opening a popup window
    alert('Popup window opened');
  };
  return (
    <div className="App">
      <div>
        {unauthorizedError ? (
          <div className="alert alert-danger">
            <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
          </div>
        ) : (
          <div>
            <div>
              <img src="images/FirstAmericanLogo.png" alt="Logo" />
              <div>Current User: {currentUser}</div>
              <div>Tenant Name: {tenantName}</div>
              {/* Assuming ps-framework and ps-menu are components you will need to create */}
              {/* Menu structure here has been simplified for the transition */}
              <div>
                <button>Home</button>
                <button>Reporting</button>
                <button>Mapping Tables</button>
                {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <button>Auditing</button>}
                <button>Exceptions</button>
                {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <button>Security</button>}
                {canManageAccessReq && <button>Access Request</button>}
                <button onClick={openPopupWindow}>Help</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;