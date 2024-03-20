import React, { useState, useEffect } from 'react';
// Dummy types for demonstration, adjust according to actual implementation
type MenuItem = {
  label: string;
  route: string;
  icon: string;
  show?: boolean;
// Placeholder for antiforgerytoken part, implement according to your project requirements
const AntiForgeryToken = () => {
  return <div>Antiforgery Token Placeholder</div>;
const App = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('User'); // Assuming default right is "User"
  const [errors, setErrors] = useState<{ unauthorized?: string }>({});
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  // Simulate fetching user rights and errors, replace with actual fetching/logic
  useEffect(() => {
    // Fetch data here and set states accordingly
  }, []);
  const openPopupWindow = () => {
    // Implement popup opening logic
  };
  const menuItems: MenuItem[] = [
    { label: "Home", route: "dashboard", icon: "fa-dashboard" },
    { label: "Reporting", route: "reporting", icon: "fa-line-chart" },
    { label: "Mapping Tables", route: "Customermappings", icon: "fa-cogs" },
    { label: "Auditing", route: "auditing", icon: "fa-bars", show: activityRight === 'Admin' || activityRight === 'SuperAdmin' },
    { label: "Exceptions", route: "businessexception", icon: "fa-exclamation-triangle" },
    { label: "Security", route: "security", icon: "fa-lock", show: activityRight === 'Admin' || activityRight === 'SuperAdmin' },
    { label: "Utilities", route: "confirmservicerequest", icon: "fa-wrench", show: activityRight === 'SuperAdmin' },
    { label: "Access Request", route: "AccessRequest", icon: "fa-key", show: canManageAccessReq },
    { label: "Help", route: "help", icon: "fa-info-circle", show: true },
  ];
  return (
    <div className="container-fluid">
      <AntiForgeryToken />
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban">{errors.unauthorized}</i></div>
        </div>
      )}
      {!errors.unauthorized && (
        <div>
          {/* PsFramework and PsMenu components are placeholders, replace with your actual menu components */}
          {/* This could be a complex component depending on how your application is structured */}
          <div iconFile="images/FirstAmericanLogo.png" currentUser={currentUser} tenantName={tenantName}>
            <div>
              {menuItems.filter(item => item.show !== false).map((item, index) => (
                <div key={index} label={item.label} route={item.route} icon={item.icon} onClick={item.label === 'Help' ? openPopupWindow : undefined}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;