import React, { useState, useEffect } from 'react';
import './App.css'; // Assume your CSS imports are adjusted here

// Define the props interface if needed
interface AppProps {
  currentuser: string;
  tenantname: string;
}

const App: React.FC<AppProps> = () => {
  const [errors, setErrors] = useState<{ unauthorized: boolean }>({ unauthorized: false });
  const [activityright, setActivityRight] = useState<string>('User'); // Example default role
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(true); // Manage according to your logic

  // Simulate fetching data or any setup needed
  useEffect(() => {
    // Here you could fetch user rights, etc.
  }, []);

  return (
    <div className="container-fluid">
      <div antiforgerytoken="true"></div>
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error">
            <i className="fa fa-lg fa-ban"> Unauthorized Access </i>
          </div>
        </div>
      )}

      {!errors.unauthorized && (
        <div>
          {/* Assuming ps-framework and similar elements are components you'll need to create/import */}
          <div icon-file="images/FirstAmericanLogo.png" currentuser="{currentuser}" tenantname="{tenantname}">
            <div>
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              {['Admin', 'SuperAdmin'].includes(activityright) && (
                <div label="Auditing" route="auditing" icon="fa-bars"></div>
              )}
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              {['Admin', 'SuperAdmin'].includes(activityright) && (
                <div label="Security" route="security" icon="fa-lock"></div>
              )}
              {activityright === 'SuperAdmin' && (
                <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
              )}
              {canManageAccessReq && (
                <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
              )}
              <div label="Help" route="help" icon="fa-info-circle" onClick={() => console.log('OpenPopupWindow Placeholder')}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;