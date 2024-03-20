import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// Assuming "towercss" and other CSS/JS files are similarly imported.
const App = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [tenantName, setTenantName] = useState('');
    const [activityRight, setActivityRight] = useState('');
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    const [errors, setErrors] = useState({ unauthorized: false });
    // Replace with actual logic to set the state
    useEffect(() => {
        // Mock setting of states
        setCurrentUser('John Doe');
        setTenantName('Example Tenant');
        setActivityRight('Admin');
        setCanManageAccessReq(true);
        setErrors({ unauthorized: false });
    }, []);
    const openPopupWindow = () => {
        console.log('Popup window logic here');
    };
    return (
        <div className="container-fluid">
            <div></div> {/* antiforgerytoken equivalent if needed */}
            {errors.unauthorized ?
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"></i> {errors.unauthorized}</div>
                </div>
                :
                <div>
                    <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
                        <div>
                            <div label="Home" route="dashboard" icon="fa-dashboard"></div>
                            <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
                            <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
                            {['Admin', 'SuperAdmin'].includes(activityRight) &&
                                <div label="Auditing" route="auditing" icon="fa-bars"></div>
                            }
                            <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
                            {['Admin', 'SuperAdmin'].includes(activityRight) &&
                                <div label="Security" route="security" icon="fa-lock"></div>
                            }
                            {activityRight === 'SuperAdmin' &&
                                <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div>
                            }
                            {canManageAccessReq &&
                                <div label="Access Request" route="AccessRequest" icon="fa-key"></div>
                            }
                            <div label="Help" route="help" icon="fa-info-circle" onClick={openPopupWindow}></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};
export default App;