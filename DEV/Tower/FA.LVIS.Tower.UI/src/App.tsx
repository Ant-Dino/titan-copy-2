// Importing necessary libraries and components from React, React Router, and others
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/dashboard';
import Help from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/help';

// App component definition using TypeScript and React Functional Component with Hooks
const App: React.FC = () => {
  // App component return statement
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          {/* Redirect to Dashboard as a default route */}
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

// Exporting the App component
export default App;