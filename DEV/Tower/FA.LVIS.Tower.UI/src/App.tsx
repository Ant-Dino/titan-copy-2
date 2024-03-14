import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/dashboard';
import Help from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/help';
// Define the App component using a functional component pattern with TypeScript
const App: React.FC = () => {
  // React Hooks and other logic would go here. For this basic example, none are used.
  return (
    <Router>
      <div>
        {/* The Switch component looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          {/* A default route can be added for unknown paths */}
          <Route path="*">
            <div>404 Not found</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;