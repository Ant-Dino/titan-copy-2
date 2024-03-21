import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing CSS files
import 'Content/bootstrap.min.css';
import 'Content/ui-grid.css';
import 'Content/font-awesome.min.css';
import 'towercss';
// Define the routes as per appRouteConfig.js file
const appRoutes = [
    { path: '/dashboard', Component: psDashboard, activetab: 'dashboard' },
    { path: '/reporting', Component: psReporting, activetab: 'reporting' },
    { path: '/auditing', Component: psAuditing, activetab: 'auditing' },
    { path: '/security', Component: psSecurity, activetab: 'security' },
    // Add more routes here following the structure above
];
// Assuming component stubs are created or imported appropriately
const psDashboard = () => <div>Dashboard Component</div>;
const psReporting = () => <div>Reporting Component</div>;
const psAuditing = () => <div>Auditing Component</div>;
const psSecurity = () => <div>Security Component</div>;
const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          {appRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} exact>
              <Component />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}
export default App;