import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components Import (Assuming these are already converted to React components)
// Note: The names used here need to match with your actual component names.
import PsDashboard from './components/PsDashboard';
import PsReporting from './components/PsReporting';
import PsAuditing from './components/PsAuditing';
import PsSecurity from './components/PsSecurity';
import PsManageExternalRefNumber from './components/PsManageExternalRefNumber';
import PsManageServiceRequest from './components/PsManageServiceRequest';
import PsEndPointAccess from './components/PsEndPointAccess';
import PsConfirmServiceRequest from './components/PsConfirmServiceRequest';
import PsProviderMappings from './components/PsProviderMappings';
import PsProductProviderMappings from './components/PsProductProviderMappings';
import PsFastOfficeMappings from './components/PsFastOfficeMappings';
import PsFastFilePreferenceMappings from './components/PsFastFilePreferenceMappings';
import PsCustomerMappings from './components/PsCustomerMappings';
import PsOutDocumentMappings from './components/PsOutDocumentMappings';
import PsInDocumentMappings from './components/PsInDocumentMappings';
import PsLocationMappings from './components/PsLocationMappings';
import PsWebhooksMappings from './components/PsWebhooksMappings';
import PsCategoryMappings from './components/PsCategoryMappings';
import PsFastGabMappings from './components/PsFastGabMappings';
import PsOutEventMappings from './components/PsOutEventMappings';
import PsException from './components/PsException';
import PsBusinessException from './components/PsBusinessException';
import PsFastWebOrders from './components/PsFastWebOrders';
import PsTerminalLogInformations from './components/PsTerminalLogInformations';
import PsFastWorkFlowMappings from './components/PsFastWorkFlowMappings';
import PsFastTaskMappings from './components/PsFastTaskMappings';
import PsFasttoLvisDocumentMappings from './components/PsFasttoLvisDocumentMappings';
import PsLvisToFastDocumentMappings from './components/PsLvisToFastDocumentMappings';
import PsSubscription from './components/PsSubscription';
import PsContactMappings from './components/PsContactMappings';
import PsContactProviderMappings from './components/PsContactProviderMappings';
import PsAccessRequest from './components/PsAccessRequest';
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={PsDashboard} />
        <Route path="/reporting" component={PsReporting} />
        <Route path="/auditing" component={PsAuditing} />
        <Route path="/security" component={PsSecurity} />
        <Route path="/manageexternalrefnumber" component={PsManageExternalRefNumber} />
        <Route path="/manageservicerequest" component={PsManageServiceRequest} />
        <Route path="/endpointaccess" component={PsEndPointAccess} />
        <Route path="/confirmservicerequest" component={PsConfirmServiceRequest} />
        {/* Including Routes with Params */}
        <Route path="/providermappings/:ExternalID?" component={PsProviderMappings} />
        <Route path="/productprovidermappings/:ProviderID" component={PsProductProviderMappings} />
        <Route path="/fastofficemappings/:ExternalID" component={PsFastOfficeMappings} />
        <Route path="/fastfilepreferencemappings" component={PsFastFilePreferenceMappings} />
        <Route path="/Customermappings/:CustomerName?" component={PsCustomerMappings} />
        <Route path="/outdocmappings/:LenderName/:isGroups" component={PsOutDocumentMappings} />
        <Route path="/indocmappings" component={PsInDocumentMappings} />
        <Route path="/Locationmappings/:CustomerName" component={PsLocationMappings} />
        <Route path="/webhooksMappings/:CustomerName" component={PsWebhooksMappings} />
        <Route path="/Categorymappings" component={PsCategoryMappings} />
        <Route path="/fastgabmappings/:LocationName" component={PsFastGabMappings} />
        <Route path="/outeventmappings/:LenderName" component={PsOutEventMappings} />
        <Route path="/Exceptions/:ExceptionType?" component={PsException} />
        <Route path="/businessexception/:ExceptionType?" component={PsBusinessException} />
        <Route path="/fastweborders" component={PsFastWebOrders} />
        <Route path="/terminalloginformation" component={PsTerminalLogInformations} />
        <Route path="/FastWorkFlowMappings" component={PsFastWorkFlowMappings} />
        <Route path="/FastTaskMappings" component={PsFastTaskMappings} />
        <Route path="/FastToLVISDocMappings" component={PsFasttoLvisDocumentMappings} />
        <Route path="/LVISToFastDocMappings" component={PsLvisToFastDocumentMappings} />
        <Route path="/subscription/:CustomerName/:isCategory" component={PsSubscription} />
        <Route path="/Contactmappings/:LocationName" component={PsContactMappings} />
        <Route path="/ContactProvidermappings/:CustomerId" component={PsContactProviderMappings} />
        <Route path="/AccessRequest/:emailid?" component={PsAccessRequest} />
        {/* Redirect to /dashboard when no other route matches */}
        <Route component={PsDashboard} />
      </Switch>
    </Router>
  );
};

export default App;