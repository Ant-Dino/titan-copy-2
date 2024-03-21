import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Defining route components (assuming components already exist or will be created)
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Reporting = React.lazy(() => import('./components/Reporting'));
const Auditing = React.lazy(() => import('./components/Auditing'));
const Security = React.lazy(() => import('./components/Security'));
// Other component imports similar to the above for the rest of the routes
const App = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [errors, setErrors] = useState({ unauthorized: false });
  // Simulating fetching user and tenant data and handling errors
  useEffect(() => {
    // Dummy function to simulate fetching data
    const fetchUserData = async () => {
      try {
        // Simulated fetch call
        const currentUserData = 'Sample User';
        const tenantNameData = 'Sample Tenant';
        setCurrentUser(currentUserData);
        setTenantName(tenantNameData);
        setErrors({ ...errors, unauthorized: false });
      } catch (error) {
        setErrors({ ...errors, unauthorized: true });
      }
    };
    fetchUserData();
  }, []);
  // Importing routes from appRouteConfig
  const appRoutes = [
    { path: '/dashboard', Component: Dashboard, activetab: 'dashboard' },
    { path: '/reporting', Component: Reporting, activetab: 'reporting' },
    { path: '/auditing', Component: Auditing, activetab: 'auditing' },
    { path: '/security', Component: Security, activetab: 'security' },
    // Other routes similar to the above based on appRouteConfig.js content
  ];
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="container-fluid">
          <div antiforgerytoken></div>
          {errors.unauthorized ? (
            <div className="alert alert-danger">
              <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access</i></div>
            </div>
          ) : (
            <Switch>
              {appRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} exact>
                  <Component />
                </Route>
              ))}
            </Switch>
          )}
        </div>
      </React.Suspense>
    </Router>
  );
};
export default App;