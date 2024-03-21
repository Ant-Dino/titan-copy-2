import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const appRouteConfig = [
{'url': '/dashboard', 'template': 'DashboardComponent', 'activetab': 'dashboard'}, {'url': '/reporting', 'template': 'ReportingComponent', 'activetab': 'reporting'}, {'url': '/auditing', 'template': 'AuditingComponent', 'activetab': 'auditing'}, {'url': '/security', 'template': 'SecurityComponent', 'activetab': 'security'}, {'url': '/manageexternalrefnumber', 'template': 'ManageExternalRefNumberComponent', 'activetab': 'manageexternalrefnumber'}, {'url': '/manageservicerequest', 'template': 'ManageServiceRequestComponent', 'activetab': 'manageservicerequest'}, {'url': '/endpointaccess', 'template': 'EndPointAccessComponent', 'activetab': 'endpointaccess'}, {'url': '/confirmservicerequest', 'template': 'ConfirmServiceRequestComponent', 'activetab': 'confirmservicerequest'}, {'url': '/providermappings', 'template': 'ProviderMappingsComponent', 'activetab': 'providermappings'}, {'url': '/providermappings/:ExternalID', 'template': 'ProviderMappingsComponent', 'activetab': 'providermappings'}, {'url': '/productprovidermappings/:ProviderID', 'template': 'ProductProviderMappingsComponent', 'activetab': 'productprovidermappings'}, {'url': '/fastofficemappings/:ExternalID', 'template': 'FastOfficeMappingsComponent', 'activetab': 'fastofficemappings'}, {'url': '/fastfilepreferencemappings', 'template': 'FastFilePreferenceMappingsComponent', 'activetab': 'fastfilepreferencemappings'}, {'url': '/Customermappings/:CustomerName?', 'template': 'CustomerMappingsComponent', 'activetab': 'Customermappings'}, {'url': '/outdocmappings/:LenderName/:isGroups', 'template': 'OutDocumentMappingsComponent', 'activetab': 'outdocmappings'}, {'url': '/indocmappings', 'template': 'InDocumentMappingsComponent', 'activetab': 'indocmappings'}, {'url': '/Locationmappings/:CustomerName', 'template': 'LocationMappingsComponent', 'activetab': 'Locationmappings'}, {'url': '/webhooksMappings/:CustomerName', 'template': 'WebhooksMappingsComponent', 'activetab': 'webhooksMappings'}, {'url': '/Categorymappings', 'template': 'CategoryMappingsComponent', 'activetab': 'Categorymappings'}, {'url': '/fastgabmappings/:LocationName', 'template': 'FastGABMappingsComponent', 'activetab': 'fastgabmappings'}, {'url': '/outeventmappings/:LenderName', 'template': 'OutEventMappingsComponent', 'activetab': 'outeventmappings'}, {'url': '/Exceptions/:ExceptionType?', 'template': 'ExceptionComponent', 'activetab': 'Exceptions'}, {'url': '/businessexception/:ExceptionType?', 'template': 'BusinessExceptionComponent', 'activetab': 'BusinessExceptions'}, {'url': '/fastweborders', 'template': 'FastWebOrdersComponent', 'activetab': 'FastWebOrders'}, {'url': '/businessexception', 'template': 'BusinessExceptionComponent', 'activetab': 'BusinessExceptions'}, {'url': '/terminalloginformation', 'template': 'TerminalLogInformationComponent', 'activetab': 'Terminalloginformation'}, {'url': '/FastWorkFlowMappings', 'template': 'FastWorkFlowMappingsComponent', 'activetab': 'FastWorkFlowMappings'}, {'url': '/FastTaskMappings', 'template': 'FastTaskMappingsComponent', 'activetab': 'FastTaskMappings'}, {'url': '/FastToLVISDocMappings', 'template': 'FastToLVISDocMappingsComponent', 'activetab': 'FastToLVISDocMappings'}, {'url': '/LVISToFastDocMappings', 'template': 'LVISToFastDocMappingsComponent', 'activetab': 'LVISToFastDocMappings'}, {'url': '/subscription/:CustomerName/:isCategory', 'template': 'SubscriptionComponent', 'activetab': 'Subscription'}, {'url': '/Contactmappings/:LocationName', 'template': 'ContactMappingsComponent', 'activetab': 'Contactmappings'}, {'url': '/ContactProvidermappings/:CustomerId', 'template': 'ContactProviderMappingsComponent', 'activetab': 'ContactProvidermappings'}, {'url': '/AccessRequest', 'template': 'AccessRequestComponent', 'activetab': 'AccessRequest'}, {'url': '/AccessRequest/:emailid', 'template': 'AccessRequestComponent', 'activetab': 'AccessRequest'}
];
function App() {
  const [currentUser, setCurrentUser] = useState('');
  useEffect(() => {
    // Assume a function to fetch user data is available
    fetchCurrentUser().then(data => {
      setCurrentUser(data);
    });
  }, []);
  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          {appRouteConfig.map((route, index) => (
            <Route key={index} path={route.url} component={React.lazy(() => import(`./components/${route.template}`))} exact />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
export default App;