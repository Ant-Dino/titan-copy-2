// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/dashboard';
import Help from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/help';

const App: React.FC = () => {
  // State to manage authorization errors, for example
  const [isUnauthorized, setIsUnauthorized] = React.useState(false);
  // Example state that could impact visibility of menu items
  const [activityRight, setActivityRight] = React.useState('User');
  const [canManageAccessReq, setCanManageAccessReq] = React.useState(false);

  // Placeholder for method to open popup window, used in Help menu item
  const openPopupWindow = () => {
    console.log("Opening Help Popup Window");
  };

  return (
    <Router>
      <div className="container-fluid">
        {/* Placeholder element for anti-forgery token, assuming replacement with React logic */}
        {/* Conditional rendering based on authorization errors */}
        {isUnauthorized ? (
          <div className="alert alert-danger">
            <div className="error"><i className="fa fa-lg fa-ban"></i> Unauthorized Access</div>
          </div>
        ) : (
          <div>
            {/* Assuming ps-framework, ps-menu, and ps-menu-item are components to be created or replaced */}
            {/* Below demonstrates the kind of structure and logic conversion rather than direct AngularJS conversion */}
            <nav>
              <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/help" onClick={openPopupWindow}>Help</a></li>
                {/* Conditional rendering based on activityRight */}
                {['Admin', 'SuperAdmin'].includes(activityRight) && (
                  <li><a href="/security">Security</a></li>
                )}
                {/* Conditional rendering based on canManageAccessReq */}
                {canManageAccessReq && (
                  <li><a href="/accessrequest">Access Request</a></li>
                )}
                {/* Add more menu items as needed */}
              </ul>
            </nav>

            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
              {/* Define routes for other components as necessary */}
            </Switch>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;