import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [unauthorized, setUnauthorized] = useState(false);
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  useEffect(() => {
    // Fetch user data and auth states here
    // simulate fetching data
    setCurrentUser('John Doe');
    setTenantName('Tenant 1');
    setActivityRight('Admin');
    setUnauthorized(false);
    setCanManageAccessReq(true);
  }, []);
  return (
    <Router>
      <div className="container-fluid">
        {!unauthorized ? (
          <div>
            <div antiforgerytoken></div>
            <img src="images/FirstAmericanLogo.png" alt="Logo" />
            <div>Current User: {currentUser}</div>
            <div>Tenant Name: {tenantName}</div>
            <nav>
              <Link to="/dashboard">Home</Link>
              <Link to="/reporting">Reporting</Link>
              <Link to="/Customermappings">Mapping Tables</Link>
              {['Admin', 'SuperAdmin'].includes(activityRight) && <Link to="/auditing">Auditing</Link>}
              <Link to="/businessexception">Exceptions</Link>
              {['Admin', 'SuperAdmin'].includes(activityRight) && <Link to="/security">Security</Link>}
              {activityRight === 'SuperAdmin' && <Link to="/confirmservicerequest">Utilities</Link>}
              {canManageAccessReq && <Link to="/AccessRequest">Access Request</Link>}
              {/* More Links can be added here based on appRouteConfig.js routes */}
            </nav>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/reporting" component={Reporting} />
            <Route path="/Customermappings" component={CustomerMappings} />
            <Route path="/auditing" component={Auditing} />
            <Route path="/businessexception" component={BusinessException} />
            <Route path="/security" component={Security} />
            <Route path="/confirmservicerequest" component={ConfirmServiceRequest} />
            <Route path="/AccessRequest" component={AccessRequest} />
            {/* More Route components can be added here based on appRouteConfig.js routes */}
          </div>
        ) : (
          <div className="alert alert-danger">
            <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access</i></div>
          </div>
        )}
      </div>
    </Router>
  );
}
// Dummy components for the route demonstration. Replace these with actual component imports.
function Dashboard() { return <h2>Dashboard</h2>; }
function Reporting() { return <h2>Reporting</h2>; }
function CustomerMappings() { return <h2>Customer Mappings</h2>; }
function Auditing() { return <h2>Auditing</h2>; }
function BusinessException() { return <h2>Business Exception</h2>; }
function Security() { return <h2>Security</h2>; }
function ConfirmServiceRequest() { return <h2>Confirm Service Request</h2>; }
function AccessRequest() { return <h2>Access Request</h2>; }
export default App;