import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming the CSS from AngularJS is ported to a file named App.css

// Custom components (assuming these have been rewritten for React, if they are complex they will need their own hooks and logic)
// import PsMenu from './components/PsMenu';
// import PsMenuItem from './components/PsMenuItem';

export const App: React.FC = () => {
    const [isUnauthorized, setIsUnauthorized] = useState<boolean>(false); // Example state, replace logic as necessary
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [activityRight, setActivityRight] = useState<string>('');
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

    // Add useEffect for side effects or fetching data if necessary
    useEffect(() => {
        // Fetch user info, rights etc.
        // Example:
        // setCurrentUser('John Doe');
        // setTenantName('Company XYZ');
        // setActivityRight('Admin');
        // setCanManageAccessReq(true);

        // Simulate fetching and setting unauthorized status
        setIsUnauthorized(false); // Update with actual logic
    }, []);

    // Function to handle Popup Opening - For demonstration
    const openPopupWindow = () => {
        alert('Popup Opened');
    };

    return (
        <div className="App container-fluid">
            <div>{/* AntiforgeryToken placeholder, implement as needed */}</div>
            {isUnauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access </i></div>
                </div>
            ) : (
                <div>
                    {/* PsFramework, PsMenu, and PsMenuItem are assumed custom components needing port-to-React */}
                    {/* This section should be replaced with the actual component implementation once ported */}
                    {/* For demonstration, only static content is provided */}
                    <div>
                        <img src="images/FirstAmericanLogo.png" alt="Logo" />
                        <div>Current User: {currentUser}</div>
                        <div>Tenant Name: {tenantName}</div>
                        <div>
                            <button onClick={openPopupWindow}>Open Popup</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};