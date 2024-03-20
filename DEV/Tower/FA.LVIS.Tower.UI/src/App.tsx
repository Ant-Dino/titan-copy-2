import React, { useState, useEffect } from 'react';
import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './towercss';
// You might need to adapt the import paths according to your setup
const App: React.FC = () => {
    const [unauthorized, setUnauthorized] = useState(false);
    const [currentUser, setCurrentUser] = useState<string | null>(null);
    const [tenantName, setTenantName] = useState<string | null>(null);
    const [activityRight, setActivityRight] = useState<string | null>(null);
    const [canManageAccessReq, setCanManageAccessReq] = useState(false);
    useEffect(() => {
        // Here you would fetch user data and set states accordingly
        // This is just an example. Replace with actual data retrieval logic.
        setCurrentUser('John Doe');
        setTenantName('TenantXYZ');
        setActivityRight('Admin');
        setCanManageAccessReq(true);
    }, []);
    const openPopupWindow = () => {
        console.log('Popup window opened');
    };
    return (
        <div className="container-fluid">
            <div antiforgerytoken=""></div>
            {unauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access </i></div>
                </div>
            ) : (
                <div>
                    {/* PSFramework component to be replaced with React equivalent */}
                    {/* Menu items rendered based on state */}
                    {activityRight === 'Admin' || activityRight === 'SuperAdmin' ? (
                        <>
                            <div>Home</div>
                            <div>Reporting</div>
                            <div>Mapping Tables</div>
                            <div>Auditing</div>
                            <div>Exceptions</div>
                            <div>Security</div>
                            {activityRight === 'SuperAdmin' && <div>Utilities</div>}
                            {canManageAccessReq && <div>Access Request</div>}
                            <div onClick={openPopupWindow}>Help</div>
                        </>
                    ) : (
                        <>
                            <div>Home</div>
                            <div>Reporting</div>
                            <div>Mapping Tables</div>
                            <div>Exceptions</div>
                            <div onClick={openPopupWindow}>Help</div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
export default App;