import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/dashboard';
import Help from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/help';
// Define the App component using TypeScript and React hooks
const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Switch component is used to render only the first route that matches the location */}
        <Switch>
          {/* Define route for Dashboard component */}
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          {/* Define route for Help component */}
          <Route path='/help'>
            <Help />
          </Route>
          {/* Redirect to Dashboard as a default route */}
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;