import React, { FunctionComponent, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/dashboard';
import Help from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/help';
import './App.css'; // Assuming you have an App.css file for global styles

const App: FunctionComponent = () => {
  // Placeholder for real authentication logic
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<string>('User');
  const [tenantName, setTenantName] = useState<string>('Tenant');
  const [activityRight, setActivityRight] = useState<string>('Admin');

  useEffect(() => {
    // Placeholder for real authorization/authentication fetching logic
    setIsAuthenticated(true);
    setCurrentUser('John Doe');
    setTenantName('Acme Corp');
    setActivityRight('Admin');
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Router>
      <div className="App">
        {/* Navigation could go here, example below */}
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </nav>
        {/* Routes for the application */}
        <Switch>
          <Route path="/" exact>
            {isAuthenticated ? <Dashboard currentUser={currentUser} tenantName={tenantName} activityRight={activityRight} /> : <div>Please log in</div>}
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          {/* Additional routes can go here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;