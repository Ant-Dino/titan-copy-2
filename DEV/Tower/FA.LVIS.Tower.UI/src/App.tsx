import React, { useState, useEffect } from 'react';

const App = () => {
 // Simulate fetching user rights and other necessary states which were originally managed by AngularJS's controllers
 const [currentUser, setCurrentUser] = useState('');
 const [tenantName, setTenantName] = useState('');
 const [activityRight, setActivityRight] = useState('');
 const [unauthorizedError, setUnauthorizedError] = useState('');
 const [canManageAccessReq, setCanManageAccessReq] = useState(false);

 useEffect(() => {
   // Here you would fetch and set the user and tenant information, user rights, and any errors
   // Simulating fetching data and setting state
   setCurrentUser('John Doe');
   setTenantName('Example Tenant');
   setActivityRight('Admin');
   setUnauthorizedError(''); // Suppose no error initially
   setCanManageAccessReq(true);
 }, []);

 const OpenPopupWindow = () => {
   console.log('Opening Help Popup');
 };

 return (
   <div className="container-fluid">
     {unauthorizedError && (
       <div className="alert alert-danger">
         <div className="error"><i className="fa fa-lg fa-ban"> {unauthorizedError}</i></div>
       </div>
     )}
     {!unauthorizedError && (
       <div>
         {/* Simulating the <ps-framework> behavior with React components */}
         <div>
           {/* Menu should be a separate component */}
           <ul>
             <li>Home</li>
             <li>Reporting</li>
             <li>Mapping Tables</li>
             {(activityRight === 'Admin') || (activityRight === 'SuperAdmin') && <li>Auditing</li>}
             <li>Exceptions</li>
             {(activityRight === 'Admin') || (activityRight === 'SuperAdmin') && <li>Security</li>}
             {activityRight === 'SuperAdmin' && <li>Utilities</li>}
             {canManageAccessReq && <li>Access Request</li>}
             <li onClick={() => OpenPopupWindow()}>Help</li>
           </ul>
         </div>
       </div>
     )}
   </div>
 );
};

export default App;