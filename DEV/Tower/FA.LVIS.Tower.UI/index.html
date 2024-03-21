import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Reporting from './components/Reporting';
import CustomerMappings from './components/CustomerMappings';
import Auditing from './components/Auditing';
import BusinessException from './components/BusinessException';
import Security from './components/Security';
import ConfirmServiceRequest from './components/ConfirmServiceRequest';
import AccessRequest from './components/AccessRequest';
import Help from './components/Help';
import './App.css'; // Assuming you have some global styles
function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [errors, setErrors] = useState({ unauthorized: false });
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  useEffect(() => {
    // Here you can fetch user details and set states accordingly
  }, []);
  const OpenPopupWindow = () => {
    window.alert('Help Popup Placeholder');
  };
  return (
    <Router>
      <div className="container-fluid">
        {errors.unauthorized ?
          <div className="alert alert-danger">
            <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
          </div>
          :
          <div>
            <div antiforgerytoken=""></div>
            <div className="appFramework">
              <div className="appMenu">
                <a href="/dashboard" className="menuItem"><i className="fa fa-dashboard"></i> Home</a>
                <a href="/reporting" className="menuItem"><i className="fa fa-line-chart"></i> Reporting</a>
                <a href="/Customermappings" className="menuItem"><i className="fa fa-cogs"></i> Mapping Tables</a>
                {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                  <a href="/auditing" className="menuItem"><i className="fa fa-bars"></i> Auditing</a>
                )}
                <a href="/businessexception" className="menuItem"><i className="fa fa-exclamation-triangle"></i> Exceptions</a>
                {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                  <a href="/security" className="menuItem"><i className="fa fa-lock"></i> Security</a>
                )}
                {(activityRight === 'SuperAdmin') && (
                  <a href="/confirmservicerequest" className="menuItem"><i className="fa fa-wrench"></i> Utilities</a>
                )}
                {canManageAccessReq && (
                  <a href="/AccessRequest" className="menuItem"><i className="fa fa-key"></i> Access Request</a>
                )}
                <a href="/help" className="menuItem" onClick={OpenPopupWindow}><i className="fa fa-info-circle"></i> Help</a>
              </div>
            </div>
          </div>
        }
      </div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/reporting" component={Reporting} />
        <Route path="/Customermappings" component={CustomerMappings} />
        <Route path="/auditing" component={Auditing} />
        <Route path="/businessexception" component={BusinessException} />
        <Route path="/security" component={Security} />
        <Route path="/confirmservicerequest" component={ConfirmServiceRequest} />
        <Route path="/AccessRequest" component={AccessRequest} />
        <Route path="/help" component={Help} />
      </Switch>
    </Router>
  );
}

export default App;