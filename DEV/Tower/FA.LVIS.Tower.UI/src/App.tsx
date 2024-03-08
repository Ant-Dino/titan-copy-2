import React, { useState, useEffect } from 'react';
import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './Content/towercss.css';
// Assume scripts are transformed into React-compatible hooks or utilities
// and are imported accordingly 

const App: React.FC = () => {
 const [currentuser, setCurrentuser] = useState<string>('');
 const [tenantname, setTenantname] = useState<string>('');
 const [activityright, setActivityright] = useState<string>('');
 const [canmanageaccessreq, setCanmanageaccessreq] = useState<boolean>(false);
 const [errors, setErrors] = useState<{ unauthorized: string }>({ unauthorized: '' });

 // Assume useEffect hook fetches and sets state variables (currentuser, tenantname, etc.)
 // based on your project's logic

 const OpenPopupWindow = () => {
   // Logic for opening popup windows
 };

 return (
   <div className="container-fluid">
     <div antiforgerytoken></div>
     {errors.unauthorized ? (
       <div className="alert alert-danger">
         <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
       </div>
     ) : (
       <div>
         {/* Replace <ps-framework>, <ps-menu>, and <ps-menu-item> with appropriate JSX */}
         {/* Assuming ps-framework and related components are part of a larger component system you plan to use with React. */}
         {/* These components would need to be created as React components. */}
         <div>
           <div icon-file="images/FirstAmericanLogo.png" currentuser={currentuser} tenantname={tenantname}>
             <div>
               <div label="Home" route="dashboard" icon="fa-dashboard"></div>
               <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
               <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
               {(['Admin', 'SuperAdmin'].includes(activityright)) && 
                 <div label="Auditing" route="auditing" icon="fa-bars"></div>
               }
               <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
               {(['Admin', 'SuperAdmin'].includes(activityright)) && 
                 <div label="Security" route="security" icon="fa-lock"></div>
               }
               {activityright === 'SuperAdmin' && 
                 <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
               }
               {canmanageaccessreq && 
                 <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
               }
               <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
             </div>
           </div>
         </div>
       </div>
     )}
   </div>
 );
};

export default App;