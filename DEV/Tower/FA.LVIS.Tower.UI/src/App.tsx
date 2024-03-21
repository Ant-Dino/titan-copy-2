import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Reporting from './components/Reporting';
import Auditing from './components/Auditing';
import Security from './components/Security';
import ManageExternalRefNumber from './components/ManageExternalRefNumber';
import ManageServiceRequest from './components/ManageServiceRequest';
import EndPointAccess from './components/EndPointAccess';
import ConfirmServiceRequest from './components/ConfirmServiceRequest';
import ProviderMappings from './components/ProviderMappings';
import ProductProviderMappings from './components/ProductProviderMappings';
import FastOfficeMappings from './components/FastOfficeMappings';
import FastFilePreferenceMappings from './components/FastFilePreferenceMappings';
import CustomerMappings from './components/CustomerMappings';
import OutDocumentMappings from './components/OutDocumentMappings';
import InDocumentMappings from './components/InDocumentMappings';
import LocationMappings from './components/LocationMappings';
import WebhooksMappings from './components/WebhooksMappings';
import CategoryMappings from './components/CategoryMappings';
import FastGabMappings from './components/FastGabMappings';
import OutEventMappings from './components/OutEventMappings';
import Exceptions from './components/Exceptions';
import BusinessException from './components/BusinessException';
import FastWebOrders from './components/FastWebOrders';
import TerminalLogInformation from './components/TerminalLogInformation';
import FastWorkFlowMappings from './components/FastWorkFlowMappings';
import FastTaskMappings from './components/FastTaskMappings';
import FastToLVISDocMappings from './components/FastToLVISDocMappings';
import LVISToFastDocMappings from './components/LVISToFastDocMappings';
import Subscription from './components/Subscription';
import ContactMappings from './components/ContactMappings';
import ContactProviderMappings from './components/ContactProviderMappings';
import AccessRequest from './components/AccessRequest';
const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [activityRight, setActivityRight] = useState("");
  const [errors, setErrors] = useState({ unauthorized: false });
  return (
    <div>
      <Router>
        <div>
          {/* Navigation Menu Placeholder */}
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/reporting" component={Reporting} />
            <Route path="/auditing" component={Auditing} />
            <Route path="/security" component={Security} />
            {/* Include other routes here */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;