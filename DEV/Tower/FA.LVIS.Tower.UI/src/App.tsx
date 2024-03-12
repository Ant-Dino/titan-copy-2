import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/dashboard';
import Help from 'DEV/Tower/FA.LVIS.Tower.UI/src/components/help';
import './App.css'; // Assuming your CSS is imported this way

// Assuming an existing Context or a method to fetch user rights which can conditionally render parts of the UI
// import { useUserRights } from './hooks/useUserRights';

const App: React.FC = () => {

  // Here, you would insert any state hooks or context providers that your app needs for its logic.
    // For example:  
    // const { activityRight, canManageAccessReq } = useUserRights();

  return (
    <Router>
      <div className="container-fluid">
        {/* Your antiforgery token logic here, assuming it's handled in a parent component or through another mechanism in React. */}
         {/* Error Handling UI */}
         {/* Assuming `useErrorState` is a custom hook for error state management. This is a placeholder comment. */}
            {/* const { unauthorized } = useErrorState(); */}
         {unauthorized && (
           <div className="alert alert-danger">
             <div className="error"><i className="fa fa-lg fa-ban">Unauthorized</i></div>
           </div>
         )}
         {!unauthorized && (
           <div>
             {/* Navigation Menu */}
             <nav>
               <ul>
                 {/* Link components for navigation. Replace href with to */}
                 <li>
                   <Link to="/dashboard">Home</Link>
                 </li>
                 {/* Conditional Rendering based on user rights */}
                  {/* {
                    (activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                      <li>
                        <Link to="/auditing">Auditing</Link>
                      </li>
                    )
                  } */}
                 <li>
                   <Link to="/help" onClick={() => {/* OpenPopupWindow function logic here */}}>Help</Link>
                 </li>
                 {/* Add additional menu items here */}
               </ul>
             </nav>

             {/* Route definitions */}
             <Switch>
               <Route path="/dashboard">
                 <Dashboard />
               </Route>
               <Route path="/help">
                 <Help />
               </Route>
               {/* Define additional routes */}
             </Switch>
           </div>
         )}
      </div>
    </Router>
  );
};

export default App;