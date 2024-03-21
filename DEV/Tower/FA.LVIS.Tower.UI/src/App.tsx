import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const appRoutes = [
  { path: '/dashboard', Component: () => <>Dashboard</>, activeTab: 'dashboard' },
  { path: '/reporting', Component: () => <>Reporting</>, activeTab: 'reporting' },
  { path: '/auditing', Component: () => <>Auditing</>, activeTab: 'auditing' },
  { path: '/security', Component: () => <>Security</>, activeTab: 'security' },
  { path: '/confirmservicerequest', Component: () => <>Confirm Service Request</>, activeTab: 'confirmservicerequest' },
  // Add other routes based on your appRouteConfig.js content
];

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [errors, setErrors] = useState({ unauthorized: false });

  useEffect(() => {
    // Example of fetching data and setting state
    setCurrentUser("John Doe");
    setTenantName("Tenant 1");
    // Handle errors or unauthorized access in real scenarios
  }, []);

  return (
    <Router>
      <div className="container-fluid">
        {errors.unauthorized ? (
          <div className="alert alert-danger">
            <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access </i></div>
          </div>
        ) : (
          <>
            <header>
              {currentUser && <img src="images/FirstAmericanLogo.png" alt="Logo" />}
              <h1>Welcome, {currentUser}</h1>
              <p>Tenant: {tenantName}</p>
            </header>
            <nav>
              {/* Menu items would be dynamically generated based on the routes */}
              {appRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} exact>
                  <Component />
                </Route>
              ))}
            </nav>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;