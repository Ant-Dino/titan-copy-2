import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [unauthorized, setUnauthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);

  // Normally, you'd fetch this data from an API or your store/context
  useEffect(() => {
    // Placeholder: Update the state based on actual logic.
    setCurrentUser('John Doe');
    setTenantName('Tenant Company');
    setActivityRight('Admin');
    setCanManageAccessReq(true);
  }, []);

  const openPopupWindow = () => {
    // Placeholder: Open popup logic
    alert('Popup window opened');
  };

  return (
    <div className="container-fluid">
        <div>
            {unauthorized ? (
                <div className="alert alert-danger">
                    <div className="error"><i className="fa fa-lg fa-ban"> Unauthorized Access</i></div>
                </div>
            ) : (
                <div>
                    {/* Below components would be your React components equivalent to AngularJS directives/components */}
                    <p>Icon file: images/FirstAmericanLogo.png</p>
                    <p>Current user: {currentUser}</p>
                    <p>Tenant name: {tenantName}</p>
                    <button onClick={openPopupWindow}>Open Help</button>
                </div>
            )}
        </div>
    </div>
  );
};