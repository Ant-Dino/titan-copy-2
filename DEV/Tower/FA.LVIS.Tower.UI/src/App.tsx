import React, { useState, useEffect } from 'react';
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
import FirstAmericanLogo from './images/FirstAmericanLogo.png';
// Assuming that the appRouteConfig.js file has been translated into a JS object or directly importable here
function App() {
    // Placeholder state for authentication and role-based UI elements
    const [currentUser, setCurrentUser] = useState("");
    const [tenantName, setTenantName] = useState("");
    const [activityRight, setActivityRight] = useState("");
    const [unauthorized, setUnauthorized] = useState(false);
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    useEffect(() => {
        // Placeholder for any initialization logic, e.g., fetching user details, handling auth
    }, []);
    const OpenPopupWindow = () => {
        // Placeholder for opening the Help popup
    };
    return (
        <Router>
            <div className="container-fluid">
                {!unauthorized ? (
                    <div>
                        <div className="ps-framework" iconFile={FirstAmericanLogo} currentUser={currentUser} tenantName={tenantName}>
                            <div className="ps-menu">
                                <div className="ps-menu-item" label="Home" route="/" icon="fa-dashboard">
                                    <Dashboard />
                                </div>
                                <div className="ps-menu-item" label="Reporting" route="/reporting" icon="fa-line-chart">
                                    <Reporting />
                                </div>
                                <div className="ps-menu-item" label="Mapping Tables" route="/customermappings" icon="fa-cogs">
                                    <CustomerMappings />
                                </div>
                                {["Admin", "SuperAdmin"].includes(activityRight) && (
                                    <div className="ps-menu-item" label="Auditing" route="/auditing" icon="fa-bars">
                                        <Auditing />
                                    </div>
                                )}
                                <div className="ps-menu-item" label="Exceptions" route="/businessexception" icon="fa-exclamation-triangle">
                                    <BusinessException />
                                </div>
                                {["Admin", "SuperAdmin"].includes(activityRight) && (
                                    <div className="ps-menu-item" label="Security" route="/security" icon="fa-lock">
                                        <Security />
                                    </div>
                                )} 
                                {activityRight === "SuperAdmin" && (
                                    <div className="ps-menu-item" label="Utilities" route="/confirmservicerequest" icon="fa-wrench">
                                        <ConfirmServiceRequest />
                                    </div>
                                )}
                                {canManageAccessReq && (
                                    <div className="ps-menu-item" label="Access Request" route="/accessrequest" icon="fa-key">
                                        <AccessRequest />
                                    </div>
                                )}
                                <div className="ps-menu-item" label="Help" route="/help" icon="fa-info-circle" onClick={OpenPopupWindow}>
                                    <Help />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="alert alert-danger">
                        <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access </i></div>
                    </div>
                )}
            </div>
        </Router>
    );
}
export default App;