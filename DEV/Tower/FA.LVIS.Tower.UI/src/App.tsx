import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have an App.css file for React app styling

// TypeScript interfaces for state
interface Errors {
  unauthorized: boolean;
}

interface MenuItem {
  label: string;
  route: string;
  icon: string;
  show?: boolean;
}

const App: React.FC = () => {
  // State hooks
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({ unauthorized: false });
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  // Menu items logic
  const menuItems: MenuItem[] = [
    { label: "Home", route: "dashboard", icon: "fa-dashboard" },
    { label: "Reporting", route: "reporting", icon: "fa-line-chart" },
    { label: "Mapping Tables", route: "Customermappings", icon: "fa-cogs" },
    {
      label: "Auditing",
      route: "auditing",
      icon: "fa-bars",
      show: activityRight === 'Admin' || activityRight === 'SuperAdmin',
    },
    { label: "Exceptions", route: "businessexception", icon: "fa-exclamation-triangle" },
    {
      label: "Security",
      route: "security",
      icon: "fa-lock",
      show: activityRight === 'Admin' || activityRight === 'SuperAdmin',
    },
    {
      label: "Utilities",
      route: "confirmservicerequest",
      icon: "fa-wrench",
      show: activityRight === 'SuperAdmin',
    },
    {
      label: "Access Request",
      route: "AccessRequest",
      icon: "fa-key",
      show: canManageAccessReq,
    },
    { label: "Help", route: "help", icon: "fa-info-circle" }, // Assuming OpenPopupWindow to be implemented separately
  ];

  return (
    <div className="container-fluid">
      <div>
        {!errors.unauthorized ? (
          <div>
            {/* Assuming `PsFramework`, `PsMenu`, and `PsMenuItem` components to be implemented */}
            {/* These components should handle props and render accordingly */}
            {/* This is a placeholder focusing on handling Logic */}
            <p>{tenantName}</p> 
            <p>{currentUser}</p>
            {menuItems.filter(item => item.show !== false).map((item, index) => (
              <div key={index}>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-danger">
            <div className="error">
              <i className="fa fa-lg fa-ban"> Unauthorized</i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;