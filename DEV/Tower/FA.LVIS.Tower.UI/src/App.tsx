import React, { useState, useEffect } from 'react';
import 'Content/bootstrap.min.css';
import 'Content/ui-grid.css';
import 'Content/font-awesome.min.css';
import './towercss'; // Assuming 'towercss' is a local CSS file
type AppProps = {
    // define props here if any, for now, it's empty as there's no clear props from AngularJS code
};
const AppComponent: React.FC<AppProps> = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [tenantName, setTenantName] = useState('');
    const [activityRight, setActivityRight] = useState('');
    const [unauthorizedError, setUnauthorizedError] = useState('');
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    useEffect(() => {
        // Here, fetch the necessary data or perform initialization
        // This replaces AngularJS controller logic
    }, []);
    const openPopupWindow = () => {
        // Simulate ng-click behaviour for opening a popup
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
                    <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
                        <ps-menu>
                            <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
                            <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
                            <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
                            <ps-menu-item label="Auditing" route="auditing" icon="fa-bars" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></ps-menu-item>
                            <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
                            <ps-menu-item label="Security" route="security" icon="fa-lock" show={(activityRight === 'Admin') || (activityRight === 'SuperAdmin')}></ps-menu-item>
                            <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench" show={activityRight === 'SuperAdmin'}></ps-menu-item>
                            <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key" show={canManageAccessReq}></ps-menu-item>
                            <ps-menu-item label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></ps-menu-item>
                        </ps-menu>
                    </ps-framework>
                </div>
            )}
        </div>
    );
};
export default AppComponent;