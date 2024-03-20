import React, { useState, useEffect } from 'react';
type MenuProps = {
  icon: string;
  label: string;
  route: string;
  show?: boolean;
};
const MenuItem: React.FC<MenuProps> = ({ icon, label, route, show = true }) => {
  if (!show) return null;
  // Assuming NavLink is used for routing. Adapt as necessary for your project.
  return (
    <div className={`menu-item ${route}`}>
      <i className={`fa ${icon}`}></i> {label}
    </div>
  );
};
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [tenantName, setTenantName] = useState<string>('');
  const [errors, setErrors] = useState({ unauthorized: false });
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  // Assume these values come from somewhere, e.g., an API call or global state
  useEffect(() => {
    // Mock fetching data
    setCurrentUser({ name: 'John Doe' });
    setTenantName('Example Tenant');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
    // Simulate an error
    // setErrors({unauthorized: true});
  }, []);
  return (
    <div className="container-fluid">
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"></i> Unauthorized Access</div>
        </div>
      ) : (
        <div>
          {/* Ignoring the antiforgerytoken for simplicity */}
          <div>
            {/* Mocked ps-framework. Add actual implementation. */}
            {/* Assuming ps-menu and ps-menu-item are components in your React app */}
            <div className="ps-framework">
              <div className="ps-menu">
                <MenuItem label="Home" route="dashboard" icon="fa-dashboard" />
                <MenuItem label="Reporting" route="reporting" icon="fa-line-chart" />
                <MenuItem label="Mapping Tables" route="Customermappings" icon="fa-cogs" />
                <MenuItem label="Auditing" route="auditing" icon="fa-bars" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} />
                <MenuItem label="Exceptions" route="businessexception" icon="fa-exclamation-triangle" />
                <MenuItem label="Security" route="security" icon="fa-lock" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')} />
                <MenuItem label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityRight === 'SuperAdmin'} />
                <MenuItem label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq} />
                <MenuItem label="Help" route="help" icon="fa-info-circle" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;