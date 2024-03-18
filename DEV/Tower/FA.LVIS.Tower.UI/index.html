import React, { useState, useEffect } from 'react';
// Assuming you have a way to get these props similar to how AngularJS would have served them
interface AppProps {
    currentuser: string;
    tenantname: string;
    activityright: string;
    canmanageaccessreq: boolean;
    errors: {
        unauthorized: string;
    };
}
const App: React.FC<AppProps> = ({ currentuser, tenantname, activityright, canmanageaccessreq, errors }) => {
    // Your state and effects here, e.g., authentication status or fetching data
    return (
        <div className="container-fluid">
            <div antiforgerytoken=""></div>
            {errors.unauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
                </div>
            ) : (
                <div>
                    <ps-framework icon-file="images/FirstAmericanLogo.png" currentuser={currentuser} tenantname={tenantname}>
                        <ps-menu>
                            <ps-menu-item label="Home" route="dashboard" icon="fa-dashboard"></ps-menu-item>
                            <ps-menu-item label="Reporting" route="reporting" icon="fa-line-chart"></ps-menu-item>
                            <ps-menu-item label="Mapping Tables" route="Customermappings" icon="fa-cogs"></ps-menu-item>
                            {['Admin', 'SuperAdmin'].includes(activityright) && (
                                <ps-menu-item label="Auditing" route="auditing" icon="fa-bars"></ps-menu-item>
                            )}
                            <ps-menu-item label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></ps-menu-item>
                            {['Admin', 'SuperAdmin'].includes(activityright) && (
                                <ps-menu-item label="Security" route="security" icon="fa-lock"></ps-menu-item>
                            )}
                            {activityright === 'SuperAdmin' && (
                                <ps-menu-item label="Utilities" route="confirmservicerequest" icon="fa-wrench"></ps-menu-item>
                            )}
                            {canmanageaccessreq && (
                                <ps-menu-item label="Access Request" route="AccessRequest" icon="fa-key"></ps-menu-item>
                            )}
                            <ps-menu-item label="Help" route="help" icon="fa-info-circle" /* ng-click="OpenPopupWindow()" */ ></ps-menu-item>
                        </ps-menu>
                    </ps-framework>
                </div>
            )}
        </div>
    );
};
export default App;