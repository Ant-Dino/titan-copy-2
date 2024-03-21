import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Importing components for each route based on the provided configuration.
import Dashboard from './components/Dashboard';
import Reporting from './components/Reporting';
import Auditing from './components/Auditing';
import Security from './components/Security';
import ManageExternalRefNumber from './components/ManageExternalRefNumber';
import ManageServiceRequest from './components/ManageServiceRequest';
import EndPointAccess from './components/EndPointAccess';
import ConfirmServiceRequest from './components/ConfirmServiceRequest';
import ProviderMappings from './components/ProviderMappings';
import FastOfficeMappings from './components/FastOfficeMappings';
// Additional components import goes here...

const AppRouter = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [unauthorized, setUnauthorized] = useState(false);

  useEffect(() => {
    // Mock function to fetch user data
    const fetchUserData = async () => {
      setCurrentUser("John Doe");
      setTenantName("Tenant 1");
      setActivityRight("Admin");
      // You might want to fetch these user details from an API or your backend
    };

    fetchUserData().catch(console.error);
  }, []);

  return (
    <Router>
      <div>
        {unauthorized ? (
          <div className="alert alert-danger">
            Unauthorized Access
          </div>
        ) : (
          <>
            <nav>
              {/* Links for navigation */}
              <Link to="/dashboard">Home</Link>
              <Link to="/reporting">Reporting</Link>
              {/* Additional links for other components */}
            </nav>
            <Switch>
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/reporting" component={Reporting} />
              <Route path="/auditing" component={Auditing} />
              <Route path="/security" component={Security} />
              <Route path="/manageexternalrefnumber" component={ManageExternalRefNumber} />
              {/* Define more routes here */}
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
};

export default AppRouter;