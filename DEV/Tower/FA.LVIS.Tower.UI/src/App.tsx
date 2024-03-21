import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import FastGABMappings from './components/FastGABMappings';
import OutEventMappings from './components/OutEventMappings';
import Exceptions from './components/Exceptions';
import BusinessException from './components/BusinessException';
import FastWebOrders from './components/FastWebOrders';
import TerminalLogInformation from './components/TerminalLogInformation';
import FastWorkflowMappings from './components/FastWorkflowMappings';
import FastTaskMappings from './components/FastTaskMappings';
import FastToLVISDocMappings from './components/FastToLVISDocMappings';
import LVISToFastDocMappings from './components/LVISToFastDocMappings';
import Subscription from './components/Subscription';
import ContactMappings from './components/ContactMappings';
import ContactProviderMappings from './components/ContactProviderMappings';
import AccessRequest from './components/AccessRequest';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/reporting" component={Reporting} />
        <Route path="/auditing" component={Auditing} />
        <Route path="/security" component={Security} />
        <Route path="/manageexternalrefnumber" component={ManageExternalRefNumber} />
        <Route path="/manageservicerequest" component={ManageServiceRequest} />
        <Route path="/endpointaccess" component={EndPointAccess} />
        <Route path="/confirmservicerequest" component={ConfirmServiceRequest} />
        <Route path="/providermappings" component={ProviderMappings} />
        <Route path="/providermappings/:ExternalID" component={ProviderMappings} />
        <Route path="/productprovidermappings/:ProviderID" component={ProductProviderMappings} />
        <Route path="/fastofficemappings/:ExternalID" component={FastOfficeMappings} />
        <Route path="/fastfilepreferencemappings" component={FastFilePreferenceMappings} />
        <Route path="/Customermappings/:CustomerName?" component={CustomerMappings} />
        <Route path="/outdocmappings/:LenderName/:isGroups" component={OutDocumentMappings} />
        <Route path="/indocmappings" component={InDocumentMappings} />
        <Route path="/Locationmappings/:CustomerName" component={LocationMappings} />
        <Route path="/webhooksMappings/:CustomerName" component={WebhooksMappings} />
        <Route path="/Categorymappings" component={CategoryMappings} />
        <Route path="/fastgabmappings/:LocationName" component={FastGABMappings} />
        <Route path="/outeventmappings/:LenderName" component={OutEventMappings} />
        <Route path="/Exceptions/:ExceptionType?" component={Exceptions} />
        <Route path="/businessexception/:ExceptionType?" component={BusinessException} />
        <Route path="/fastweborders" component={FastWebOrders} />
        <Route path="/terminalloginformation" component={TerminalLogInformation} />
        <Route path="/FastWorkFlowMappings" component={FastWorkflowMappings} />
        <Route path="/FastTaskMappings" component={FastTaskMappings} />
        <Route path="/FastToLVISDocMappings" component={FastToLVISDocMappings} />
        <Route path="/LVISToFastDocMappings" component={LVISToFastDocMappings} />
        <Route path="/subscription/:CustomerName/:isCategory" component={Subscription} />
        <Route path="/Contactmappings/:LocationName" component={ContactMappings} />
        <Route path="/ContactProvidermappings/:CustomerId" component={ContactProviderMappings} />
        <Route path="/AccessRequest" exact component={AccessRequest} />
        <Route path="/AccessRequest/:emailid" component={AccessRequest} />
      </Switch>
    </Router>
  );
};
export default App;