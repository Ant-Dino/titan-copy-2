import React from 'react';
const App: React.FC = () => {
  const [unauthorizedError, setUnauthorizedError] = React.useState<string | null>(null);
  const [currentUser, setCurrentUser] = React.useState<string>('John Doe');
  const [tenantName, setTenantName] = React.useState<string>('TenantName');
  const [activityRight, setActivityRight] = React.useState<string>('Admin'); // 'Admin' or 'SuperAdmin' or another role
  const [canManageAccessReq, setCanManageAccessReq] = React.useState<boolean>(true);
  const errors = {
    unauthorized: unauthorizedError,
  };
  return (
    <div className="container-fluid">
      <div antiforgerytoken></div>
      {errors.unauthorized && (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      )}
      {!errors.unauthorized && (
        <div>
          {/* Replacement for ps-framework and its children */}
          {/* Add your framework and menu components here */}
          {/* Example placeholder below */}
          <div>Your Main Content Here</div>
        </div>
      )}
    </div>
  );
};
export default App;