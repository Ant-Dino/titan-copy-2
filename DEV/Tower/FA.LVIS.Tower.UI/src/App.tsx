import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  useEffect(() => {
    // Simulate fetching data
    // You would replace this with your actual logic to fetch and set the states
    setCurrentUser('JohnDoe');
    setTenantName('TenantName');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
    setErrors({ unauthorized: '' }); // Simulate no errors
  }, []);
  return (
    <div className="container-fluid">
      <div antiforgerytoken=""></div>
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error">
            <i className="fa fa-lg fa-ban"> {errors.unauthorized}</i>
          </div>
        </div>
      ) : (
        <div>
          SecondFramework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <SecondMenu>
              <SecondMenuItem label="Home" route="dashboard" icon="fa-dashboard" />
              <SecondMenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
              <SecondMenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
              <SecondMenuItem label="Auditing" route="auditing" icon="fa-bars" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} />
              <SecondMenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
              <SecondMenuItem label="Security" route="security" icon="fa-lock" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} />
              <SecondMenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityRight === 'SuperAdmin'} />
              <SecondMenuItem label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq} />
              <SecondMenuItem label="Help" route="help" icon="fa-info-circle" onClick={() => alert('Opening help...')} />
            </SecondMenu>
          </SecondFramework>
        </div>
      )}
    </div>
  );
};
export default App;