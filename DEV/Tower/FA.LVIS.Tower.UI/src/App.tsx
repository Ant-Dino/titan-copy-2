import React, { useState, useEffect } from 'react';
import './App.css'; // Assume your CSS files are imported like this based on the original HTML file
// This is an example. You need to replace FontAwesome, bootstrap, ui-grid, etc., with React Compatible alternatives or import them appropriately.
const App: React.FC = () => {
    const [unauthorized, setUnauthorized] = useState(false); // Simulating unauthorized state
    const [currentuser, setCurrentUser] = useState<string>('');
    const [tenantname, setTenantName] = useState<string>('');
    const [activityright, setActivityRight] = useState<string>(''); // This should actually come from your auth context or a similar state management logic
    const [canmanageaccessreq, setCanManageAccessReq] = useState(false); // Managing access request visibility 
    useEffect(() => {
        // Placeholder for any side effects, fetching initial data, etc.
    }, []);
    const OpenPopupWindow = () => {
        // Function to handle Popup Window Opening
        console.log('Popup window opened');
    };
    return (
        <div className="container-fluid">
            <div>{/* Add antiforgerytoken component or logic here */}</div>
            {unauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"></i>Unauthorized Access Detected</div>
                </div>
            ) : (
                <div>
                    {/* Assuming ps-framework, ps-menu, and ps-menu-item are components to be created or replaced with React components */}
                    <div iconFile="images/FirstAmericanLogo.png" currentUser={currentuser} tenantName={tenantname}>
                        <div>
                            <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                            <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                            <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                            {['Admin', 'SuperAdmin'].includes(activityright) && <div label="Auditing" route="auditing" icon="fa-bars"></div>}
                            <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                            {['Admin', 'SuperAdmin'].includes(activityright) && <div label="Security" route="security" icon="fa-lock"></div>}
                            {'SuperAdmin' === activityright && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>}
                            {canmanageaccessreq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div>}
                            <div label="Help" route="help" icon="fa-info-circle" onClick={OpenPopupWindow}></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default App;