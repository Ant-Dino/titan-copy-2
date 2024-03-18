import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ unauthorized: string | null }>({ unauthorized: null });
  // Dummy authentication check (replace with actual logic)
  useEffect(() => {
    // This is just placeholder logic, replace with actual authentication and user fetching logic
    setCurrentUser('John Doe');
    setTenantName('Example Tenant');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
    setErrors({ unauthorized: null }); // or set appropriate error
  }, []);
  const openPopupWindow = () => {
    console.log('Opening help popup...');
  };
  return (
    <div className="container-fluid">
      <div> {/* AntiforgeryToken placeholder, handle accordingly in your React application. */}</div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban">{errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          {/* Replace ps-framework and related components with React components */}
          <div>
            <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
              {/* Assuming 'ps-menu' and 'ps-menu-item' are placeholder components */}
              <div>
                <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                {['Admin', 'SuperAdmin'].includes(activityRight) && (
                  <div label="Auditing" route="auditing" icon="fa-bars"></div>
                )}
                <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                {['Admin', 'SuperAdmin'].includes(activityRight) && (
                  <div label="Security" route="security" icon="fa-lock"></div>
                )}
                {activityRight === 'SuperAdmin' && (
                  <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
                )}
                {canManageAccessReq && (
                  <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
                )}
                <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
              </div>
            </div>
          </div>
        
        </div>
      )}
    </div>
  );
};
export default App;