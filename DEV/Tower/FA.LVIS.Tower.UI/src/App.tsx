import React from 'react';
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
import './App.css';
// Assuming there exists CSS similar to what was utilized in Angular app

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/reporting" component={Reporting} />
          <Route path="/customermappings" component={CustomerMappings} />
          {/* Assume Auditing and Security are rendered conditionally based on user's rights */}
          <Route path="/auditing" component={Auditing} />
          <Route path="/businessexception" component={BusinessException} />
          <Route path="/security" component={Security} />
          {/* Assuming ConfirmServiceRequest and AccessRequest are shown conditionally */}
          <Route path="/confirmservicerequest" component={ConfirmServiceRequest} />
          <Route path="/accessrequest" component={AccessRequest} />
          <Route path="/help" component={Help} />
          {/* Redirect to Dashboard as a fallback */}
          <Route component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;