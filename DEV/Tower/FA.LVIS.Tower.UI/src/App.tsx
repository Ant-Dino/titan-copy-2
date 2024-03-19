import React, { useState, useEffect } from 'react';
const TowerApp: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [errors, setErrors] = useState<{ unauthorized?: string }>({});
    const [activityRight, setActivityRight] = useState<string>('');
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
    useEffect(() => {
        // Initialize states or fetch data here, if necessary
        // This is a placeholder to imitate fetching current user or tenant name and other initial data
    }, []);
    return (
        <div className="container-fluid">
            {errors.unauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
                </div>
            ) : (
                <div>
                    <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
                        <div>
                            {/* Home Menu Item */}
                            <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                            {/* Reporting Menu Item */}
                            <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                            {/* Mapping Tables Menu Item */}
                            <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                            {/* Conditionally rendering based on activityRight */}
                            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                                <div label="Auditing" route="auditing" icon="fa-bars">
                                </div>
                            )}
                            <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                            {/* Security Menu Item */}
                            {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && (
                                <div label="Security" route="security" icon="fa-lock">
                                </div>
                            )}
                            {/* Utilities Menu Item */}
                            {activityRight === 'SuperAdmin' && (
                                <div label="Utilities" route="confirmservicerequest" icon="fa-wrench">
                                </div>
                            )}
                            {/* Access Request Menu Item */}
                            {canManageAccessReq && (
                                <div label="Access Request" route="AccessRequest" icon="fa-key">
                                </div>
                            )}
                            <div label="Help" route="help" icon="fa-info-circle" onClick={() => { console.log('OpenPopupWindow called'); }}>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default TowerApp;