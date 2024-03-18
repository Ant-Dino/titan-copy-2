import './Content/bootstrap.min.css';
import './Content/ui-grid.css';
import './Content/font-awesome.min.css';
import './towercss';
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [tenantName, setTenantName] = useState('');
  const [activityRight, setActivityRight] = useState('');
  const [unauthorizedError, setUnauthorizedError] = useState('');
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);
  // Mimic fetching data or any other setup needed on component mount
  useEffect(() => {
    // Example setup
    setCurrentUser('exampleUser');
    setTenantName('exampleTenant');
    setActivityRight('Admin'); // Should be fetched/set based on actual user rights
    setUnauthorizedError('');  // Would be set based on auth errors if any
    setCanManageAccessReq(true); // Example condition, should be fetched or calculated
  }, []);
  return (
    <div className="container-fluid">
      <div antiforgerytoken=""></div>
      { unauthorizedError &&
        <div className="alert alert-danger">
          <div className="error"><i className="fa fa-lg fa-ban"> { unauthorizedError }</i></div>
        </div>
      }
      { !unauthorizedError &&
        <div>
          <div icon-file="images/FirstAmericanLogo.png" currentuser={currentUser} tenantname={tenantName}>
            {/* ps-framework equivalent in React */}
            <div>
              {/* ps-menu equivalent in React */}
              {/* ps-menu-item equivalent in React */}
              <div label="Home" route="dashboard" icon="fa-dashboard"></div>
              <div label="Reporting" route="reporting" icon="fa-line-chart"></div>
              <div label="Mapping Tables" route="Customermappings" icon="fa-cogs"></div>
              { (activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Auditing" route="auditing" icon="fa-bars"></div> }
              <div label="Exceptions" route="businessexception" icon="fa-exclamation-triangle"></div>
              { (activityRight === 'Admin' || activityRight === 'SuperAdmin') && <div label="Security" route="security" icon="fa-lock"></div> }
              { activityRight === 'SuperAdmin' && <div label="Utilities" route="confirmservicerequest" icon="fa-wrench"></div> }
              { canManageAccessReq && <div label="Access Request" route="AccessRequest" icon="fa-key"></div> }
              {/* Assuming OpenPopupWindow is a function you'll implement */}
              <div label="Help" route="help" icon="fa-info-circle" onClick={() => {/* OpenPopupWindow logic */}}>Help</div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
export default App;