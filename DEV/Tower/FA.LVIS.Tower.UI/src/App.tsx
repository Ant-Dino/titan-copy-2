import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Reporting from './components/Reporting';
import CustomerMappings from './components/CustomerMappings';
import Auditing from './components/Auditing';
import BusinessException from './components/BusinessException';
import Security from './components/Security';
import ConfirmServiceRequest from './components/ConfirmServiceRequest';
import AccessRequest from './components/AccessRequest';
import Help from './components/Help';
import './App.css'; // Assuming you have a CSS file for basic styles
const App = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [unauthorized, setUnauthorized] = useState(false);
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  useEffect(() => {
    // Perform initialization and fetch the necessary data here
    // For example, setting currentUser, tenantName, etc.
    // This example sets dummy values
    setCurrentUser('John Doe');
    setTenantName('Company XYZ');
    setActivityRight('Admin');
    setUnauthorized(false); // Simulate authorized access
    setCanManageAccessReq(true);
  }, []);
  return (
    <Router>
      <div className="container-fluid">
        {unauthorized ? (
          <div className="alert alert-danger">
            <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access</i></div>
          </div>
        ) : (
          <div>
            <div className="antiforgerytoken"></div>
            <div>
              {/* Assuming ps-framework translates to a sidebar or similar component*/}
              {/* Menu items become Links */}
              <nav>
                <Link to="/dashboard">Home</Link>
                <Link to="/reporting">Reporting</Link>
                <Link to="/customermappings">Mapping Tables</Link>
                {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <Link to="/auditing">Auditing</Link>}
                <Link to="/businessexception">Exceptions</Link>
                {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && <Link to="/security">Security</Link>}
                {activityRight === 'SuperAdmin' && <Link to="/confirmservicerequest">Utilities</Link>}
                {canManageAccessReq && <Link to="/accessrequest">Access Request</Link>}
                <Link to="/help" onClick={() => {/* OpenPopupWindow function here */}}>Help</Link>
              </nav>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/reporting" component={Reporting} />
                <Route path="/customermappings" component={CustomerMappings} />
                <Route path="/auditing" component={Auditing} />
                <Route path="/businessexception" component={BusinessException} />
                <Route path="/security" component={Security} />
                <Route path="/confirmservicerequest" component={ConfirmServiceRequest} />
                <Route path="/accessrequest" component={AccessRequest} />
                <Route path="/help" component={Help} />
              </Switch>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};
export default App;