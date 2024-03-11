import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
 const [currentUser, setCurrentUser] = useState('');
 const [tenantName, setTenantName] = useState('');
 const [activityRight, setActivityRight] = useState('');
 const [unauthorizedError, setUnauthorizedError] = useState('');
 const [canManageAccessReq, setCanManageAccessReq] = useState(false);

 useEffect(() => {
   // Placeholder for any initial AJAX calls to fetch user data
   // This would likely include logic to determine currentUser, tenantName, activityRight, unauthorizedError, and canManageAccessReq
 }, []);

 const openPopupWindow = () => {
   // Placeholder for logic to open a popup window
 };

 return (
   <div className="container-fluid">
     <div></div> {/* Placeholder for antiforgerytoken */}
     {unauthorizedError && (
       <div className="alert alert-danger">
         <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
       </div>
     )}
     {!unauthorizedError && (
       <div>
         {/* Assuming ps-framework, ps-menu, ps-menu-item are components you will need to create or replace */}
         <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
           <div>
             <div label="Home" route="dashboard" icon="fa-dashboard"></div>
             <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
             <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
             {(['Admin', 'SuperAdmin'].includes(activityRight)) && (
               <div label="Auditing" route="auditing" icon="fa-bars"></div>
             )}
             <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
             {(['Admin', 'SuperAdmin'].includes(activityRight)) && (
               <div label="Security" route="security" icon="fa-lock"></div>
             )}
             {activityRight === 'SuperAdmin' && (
               <div label="Utilities" route="confirmservicerequest" icon="fa-wrench" ></div>
             )}
             {canManageAccessReq && (
               <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
             )}
             <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
           </div>
         </div>
       </div>
     )}
   </div>
 );
};

export default App;