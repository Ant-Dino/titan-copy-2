tsx
import React, { useState, useEffect } from 'react';

interface MenuItem {
  label: string;
  route: string;
  icon: string;
  show?: () => boolean;
}

const TopLevelComponent: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);

  // Assume these values would be fetched or set in your real app
  useEffect(() => {
    setCurrentUser('Sample User');
    setTenantName('Sample Tenant Name');
    setActivityRight('Admin'); // Example setting
    setCanManageAccessReq(true); // Example setting
  }, []);

  const menuItems: MenuItem[] = [
    { label: "Home", route: "dashboard", icon: "fa-dashboard" },
    { label: "Reporting", route: "reporting", icon: "fa-line-chart" },
    { label: "Mapping Tables", route: "Customermappings", icon: "fa-cogs" },
    { 
      label: "Auditing", 
      route: "auditing", 
      icon: "fa-bars",
      show: () => activityRight === 'Admin' || activityRight === 'SuperAdmin',
    },
    { label: "Exceptions", route: "businessexception", icon: "fa-exclamation-triangle" },
    { 
      label: "Security", 
      route: "security", 
      icon: "fa-lock",
      show: () => activityRight === 'Admin' || activityRight === 'SuperAdmin',
    },
    { 
      label: "Utilities", 
      route: "confirmservicerequest", 
      icon: "fa-wrench",
      show: () => activityRight === 'SuperAdmin',
    },
    { 
      label: "Access Request", 
      route: "AccessRequest", 
      icon: "fa-key",
      show: () => canManageAccessReq,
    },
    { 
      label: "Help", 
      route: "help", 
      icon: "fa-info-circle",
    },
  ];

  const OpenPopupWindow = () => alert('Help Popup');

  return (
    <div className="container-fluid">
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban">{errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          { /* Your ps-framework equivalent UI and logic here */ }
          {menuItems.filter(mi => !mi.show || mi.show()).map((menuItem, index) => (
            <div key={index}>
              {menuItem.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopLevelComponent;
