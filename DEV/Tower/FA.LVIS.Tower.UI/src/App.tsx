import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Simulated routes config - normally you would fetch this or import from a separate file
const routeConfig = [
  { path: '/', component: () => <div>Dashboard</div>, label: 'Home', icon: 'fa-dashboard' },
  { path: '/reporting', component: () => <div>Reporting</div>, label: 'Reporting', icon: 'fa-line-chart' },
  { path: '/customermappings', component: () => <div>Mapping Tables</div>, label: 'Mapping Tables', icon: 'fa-cogs' },
  { path: '/auditing', component: () => <div>Auditing</div>, label: 'Auditing', icon: 'fa-bars', rights: ['Admin', 'SuperAdmin'] },
  { path: '/businessexception', component: () => <div>Exceptions</div>, label: 'Exceptions', icon: 'fa-exclamation-triangle' },
  { path: '/security', component: () => <div>Security</div>, label: 'Security', icon: 'fa-lock', rights: ['Admin', 'SuperAdmin'] },
  { path: '/confirmservicerequest', component: () => <div>Utilities</div>, label: 'Utilities', icon: 'fa-wrench', rights: ['SuperAdmin'] },
  { path: '/accessrequest', component: () => <div>Access Request</div>, label: 'Access Request', icon: 'fa-key' },
  { path: '/help', component: () => <div>Help</div>, label: 'Help', icon: 'fa-info-circle' },
const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          {routeConfig.map((route) => (
            <a key={route.path} href={route.path}>
              <i className={`fa ${route.icon}`}></i> {route.label}
            </a>
          ))}
        </nav>
        <Switch>
          {routeConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
};
export default App;