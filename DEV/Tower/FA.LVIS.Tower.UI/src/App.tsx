import React, { useState, useEffect } from 'react';
const App = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [errors, setErrors] = useState<{unauthorized: string}>({ unauthorized: '' });
  useEffect(() => {
    // Fetch data for currentUser, tenantName, activityRight, canManageAccessReq, errors, etc.
    // Since the original doesn't specify how data is retrieved, this is just a placeholder
    // For example:
    setCurrentUser("Jane Doe");
    setTenantName("Tenant XYZ");
    setActivityRight("Admin");
    setCanManageAccessReq(true);
    setErrors({ unauthorized: '' }); // assume no errors initially
  }, []);
  const openPopupWindow = () => {
    // Implement popup window open logic here
  };
  return (
    <div className="container-fluid">
      <div></div> {/* antiforgerytoken equivalent React logic would go here */}
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error">
            <i className="fa fa-lg fa-ban"> {errors.unauthorized}</i>
          </div>
        </div>
      )}
      {!errors.unauthorized && (
        <div>
          {/* Replace ps-framework and its children with equivalent React components */}
          {/* This pseudocode assumes components exist / are created to match the AngularJS directive structure */}
          <PsFramework iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <PsMenu>
              <PsMenuItem label="Home" route="dashboard" icon="fa-dashboard"/>
              <PsMenuItem label="Reporting" route="reporting" icon="fa-line-chart"/>
              <PsMenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs"/>
              <PsMenuItem label="Auditing" route="auditing" icon="fa-bars" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}/>
              <PsMenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"/>
              <PsMenuItem label="Security" route="security" icon="fa-lock" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}/>
              <PsMenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityRight === 'SuperAdmin'}/>
              <PsMenuItem label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq}/>
              <PsMenuItem label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}/>
            </PsMenu>
          </PsFramework>
        </div>
      )}
    </div>
  );
};
export default App;