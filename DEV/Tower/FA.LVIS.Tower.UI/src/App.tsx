const [currentUser, setCurrentUser] = useState<string>('');
const [tenantName, setTenantName] = useState<string>('');
const [activityRight, setActivityRight] = useState<string>('');
const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
const [unauthorized, setUnauthorized] = useState<string>('');
// Simulating fetching user data and rights
useEffect(() => {
// Fetch and set currentUser, tenantName, activityRight, and canManageAccessReq from API
// This is a placeholder. In a real app, you would replace this with actual data fetching logic.
setCurrentUser('Demo User');
setTenantName('Demo Tenant');
setActivityRight('Admin'); // possible values: 'Admin', 'SuperAdmin', or other user roles
setCanManageAccessReq(true);
setUnauthorized(''); // This should be set based on the authentication and authorization logic
const OpenPopupWindow = () => {
// Logic to open a help popup window or navigate to help page
console.log('Help popup opened');
return (
  <div className="container-fluid">
    <div></div> {/* Placeholder for antiforgerytoken */}
    {unauthorized !== '' && (
      <div className="alert alert-danger">
        <div className="error"><i className="fa fa-lg fa-ban"> {unauthorized}</i></div>
      </div>
    )}
    {unauthorized === '' && (
      <div>
        {/* ps-framework equivalent in React */}
        <div className="ps-framework" data-icon-file="images/FirstAmericanLogo.png" data-currentuser={currentUser} data-tenantname={tenantName}>
          {/* ps-menu equivalent in React */}
          <div className="ps-menu">
            {/* ps-menu-item equivalent in React */}
            <div className="ps-menu-item" data-label="Home" data-route="dashboard" data-icon="fa-dashboard"></div>
            <div className="ps-menu-item" data-label="Reporting" data-route="reporting" data-icon="fa-line-chart"></div>
            <div className="ps-menu-item" data-label="Mapping Tables" data-route="Customermappings" data-icon="fa-cogs"></div>
            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
              <div className="ps-menu-item" data-label="Auditing" data-route="auditing" data-icon="fa-bars"></div>
            )}
            <div className="ps-menu-item" data-label="Exceptions" data-route="businessexception" data-icon="fa-exclamation-triangle"></div>
            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
              <div className="ps-menu-item" data-label="Security" data-route="security" data-icon="fa-lock"></div>
            )}
            {activityRight === 'SuperAdmin' && (
              <div className="ps-menu-item" data-label="Utilities" data-route="confirmservicerequest" data-icon="fa-wrench"></div>
            )}
            {canManageAccessReq && (
              <div className="ps-menu-item" data-label="Access Request" data-route="AccessRequest" data-icon="fa-key"></div>
            )}
            <div className="ps-menu-item" data-label="Help" data-route="help" data-icon="fa-info-circle" onClick={OpenPopupWindow}></div>
          </div>
        </div>
      </div>
    )}
  </div>
);