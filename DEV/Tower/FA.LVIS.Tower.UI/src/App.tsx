// Import statements for required packages and components
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/dashboard';
import Help from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/help';
import './App.css'; // Assuming CSS imports are combined into App.css for simplicity

// The App functional component
const App: React.FC = () => {
  // State to manage authorization errors and user rights, with initial states set
  const [unauthorizedError, setUnauthorizedError] = useState<string | null>(null);
  const [activityRight, setActivityRight] = useState<'Admin' | 'SuperAdmin' | ''>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

// Example useEffect to simulate fetching user rights or handling auth errors
  useEffect(() => {
    // Fetch user rights or check for authorization errors here
    // This is where you might set states based on actual conditions
    // For demonstration, defaults are kept
    setActivityRight('Admin'); // Example setting
    setCanManageAccessReq(true); // Example setting
  }, []); // Empty dependency array ensures this runs once on mount

// JSX for the App component
  return (
    <Router>
      <div className="app">
        {unauthorizedError ? (
          <div className="alert alert-danger">
            <div className="error">
              <i className="fa fa-lg fa-ban"> {unauthorizedError}</i>
            </div>
          </div>
        ) : (
          <>
            <nav>
              <Link to="/dashboard">Home</Link>
              {/* Additional navigation links can be added here */}
            </nav>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
              {/* Define additional routes as needed */}
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
};

// Export the App component for use in the wider application
export default App;