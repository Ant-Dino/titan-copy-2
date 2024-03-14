import React, { useState, useEffect } from 'react';
const TowerComponent: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [unauthorizedError, setUnauthorizedError] = useState<string>('');
  // Simulate fetching data or any startup logic
  useEffect(() => {
    // Placeholder: Fetch data here and update state
    // This is an example
    setCurrentUser("Example User");
    setTenantName("Example Tenant");
    setActivityRight("Admin");
    setCanManageAccessReq(true);
    setUnauthorizedError(""); // Assuming we fetch and find an error, update accordingly
  }, []);
  return (
    <div className="container-fluid">
      {unauthorizedError ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
        </div>
      ) : (
        <div>
          {/* Simulate ps-framework and ps-menu components from Angular version */}
          <div>
            <div>Icon Here: <img src="images/FirstAmericanLogo.png" alt="Logo" /></div>
            <div>Current User: {currentUser}</div>
            <div>Tenant Name: {tenantName}</div>
            <nav>
              <ul>
                <li>Home</li>
                <li>Reporting</li>
                <li>Mapping Tables</li>
                { (activityRight === 'Admin' || activityRight === 'SuperAdmin') && <li>Auditing</li> }
                <li>Exceptions</li>
                { (activityRight === 'Admin' || activityRight === 'SuperAdmin') && <li>Security</li> }
                { activityRight === 'SuperAdmin' && <li>Utilities</li> }
                { canManageAccessReq && <li>Access Request</li> }
                <li onClick={() => alert('Popup Window Placeholder')}>Help</li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
export default TowerComponent;