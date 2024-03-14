import React, { useState, useEffect } from 'react';
const App = () => {
  const [currentUser, setCurrentUser] = useState<string>('');
  const [tenantName, setTenantName] = useState<string>('');
  const [activityRight, setActivityRight] = useState<string>('');
  const [canManageAccessReq, setCanManageAccessReq] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ unauthorized: string | null }>({ unauthorized: null });
  useEffect(() => {
    // Assuming fetchData is a function that fetches user data
    const fetchData = async () => {
      try {
        // You would replace these with actual API calls
        setCurrentUser('Your current user');
        setTenantName('Your tenant name');
        setActivityRight('Admin'); // Or 'SuperAdmin', etc.
        setCanManageAccessReq(true); // This would be dynamic based on the fetched data
        setErrors({ ...errors, unauthorized: null });
      } catch (error) {
        console.error('Error fetching data: ', error);
        setErrors({ ...errors, unauthorized: 'Unauthorized access detected' });
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container-fluid">
      {errors.unauthorized ? (
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> {errors.unauthorized}</i></div>
        </div>
      ) : (
        <div>
          {/* Placeholder for actual framework and menu components */}
          {/* You would replace these placeholders with your actual menu framework components */}
          <div>
            <p>Logo: <img src="images/FirstAmericanLogo.png" alt="Logo" /></p>
            Current User: {currentUser}
            Tenant Name: {tenantName}
            <div>
              <p>Menu:</p>
              <p label="Home" route="dashboard" icon="fa-dashboard">Home</p>
              <p label="Reporting" route="reporting" icon="fa-line-chart">Reporting</p>
              <p label="Mapping Tables" route="Customermappings" icon="fa-cogs">Mapping Tables</p>
              {(activityRight === 'Admin' || activityRight === 'SuperAdmin') && 
                <>
                  <p label="Auditing" route="auditing" icon="fa-bars">Auditing</p>
                  <p label="Security" route="security" icon="fa-lock">Security</p>
                </>
              }
              <p label="Exceptions" route="businessexception" icon="fa-exclamation-triangle">Exceptions</p>
              {activityRight === 'SuperAdmin' && 
                <p label="Utilities" route="confirmservicerequest" icon="fa-wrench">Utilities</p>
              }
              {canManageAccessReq && 
                <p label="Access Request" route="AccessRequest" icon="fa-key">Access Request</p>
              }
              {/* Assuming OpenPopupWindow is a function for handling clicks */}
              <p label="Help" route="help" icon="fa-info-circle" onClick={() => console.log('Open help')}>Help</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;