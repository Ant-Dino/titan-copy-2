import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<string>('');
    const [tenantName, setTenantName] = useState<string>('');
    const [activityRight, setActivityRight] = useState<string>('');
    const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ unauthorized?: string }>({});

    // Replace the following useEffect with your actual data fetching or authentication logic
    useEffect(() => {
        // Simulate fetching user and tenant data
        setCurrentUser('John Doe');
        setTenantName('Tenant Name');
        setActivityRight('Admin');
        setCanManageAccessReq(true);

        // Simulate an error case
        // setErrors({ unauthorized: "Unauthorized access attempted." });
    }, []);

    const openPopupWindow = () => {
        console.log("Opening Help Popup...");
    };

    return (
        <div className="container-fluid">
            {errors.unauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
                </div>
            ) : (
                <div>
                    <div>
                        {/* This is a placeholder for your ps-framework component conversion */}
                        {/* You would need to convert your Angular components like ps-menu, ps-menu-item into React components */}
                        <div>
                            <p>Icon File would be here</p>
                            <p>Current User: {currentUser}</p>
                            <p>Tenant Name: {tenantName}</p>
                            {/* Convert ps-menu and ps-menu-item components similarly */}
                            <div>
                                <button onClick={() => openPopupWindow()}>Help</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;