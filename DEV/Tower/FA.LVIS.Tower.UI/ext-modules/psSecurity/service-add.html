import React, { useState, useEffect } from 'react';
interface UserProps {
  searchUsers: (identity: string, text: string) => Promise<any[]>;
  saveUser: (user: any) => void;
  closeForm: () => void;
  entity: any;
  manageTenantAccess: boolean;
  showTenants: boolean;
  tenants: any[];
  hasExceptionManageAccess: boolean;
  hasAccessRightAccess: boolean;
}
const UserForm: React.FC<UserProps> = ({
  searchUsers,
  saveUser,
  closeForm,
  entity,
  manageTenantAccess,
  showTenants,
  tenants,
  hasExceptionManageAccess,
  hasAccessRightAccess,
}) => {
  const [searchData, setSearchData] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [busy, setBusy] = useState(false);
  const [identity, setIdentity] = useState('CORP');
  const [txtUser, setTxtUser] = useState('');
  useEffect(() => {
    if (entity) {
      // Additional effects if necessary
    }
  }, [entity]);
  const handleSearch = async () => {
    setBusy(true);
    const results = await searchUsers(identity, txtUser);
    setSearchData(results);
    setBusy(false);
  };
  return (
    <div>
      <div className="widget-header">
        <button type="button" className="close" onClick={closeForm} aria-hidden="true">&times;</button>
        <i className="fa fa-user-plus"></i>
        <h3>Add New User</h3>
      </div>
      <div className="widget-content">
        <div className="row">
          <div className="col-lg-5">
            <div>
              <label>Find user: </label>
              <select name="SelectIdentity" id="singleIdentity" value={identity} onChange={(e) => setIdentity(e.target.value)}>
                <option value="CORP">CORP</option>
                <option value="INTL">INTL</option>
              </select>
              <input className="input" type="text" value={txtUser} onChange={(e) => setTxtUser(e.target.value)} />
              <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={!busy ? handleSearch : undefined}>
                <i className={`fa ${busy ? 'fa-spinner fa-spin' : 'fa-search'}`}></i>
              </div>
            </div>
            <br />
            {searchData.length > 0 && (
              <div>
                <label>List of Matched users: </label>
                <select style={{ width: '100%' }} size={7} value={currentItem} onChange={(e) => setCurrentItem(e.target.value)} multiple={false}>
                  {searchData.map((opt, index) => (
                    <option key={index} value={opt.Name}>{opt.Name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="col-lg-7">
            <div className="well well-sm">
              <b> User Profile</b>
            </div>
            <div className="form-group">
              <label>User Id</label>
              <input className="input" type="text" disabled value={entity.UserName || ''} />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input className="input" type="text" name="UserName" disabled required value={entity.Name || ''} />
            </div>
            {showTenants && (
              <div className="form-group">
                <label>Tenant</label>
                <select disabled={!manageTenantAccess} value={entity.TenantId} onChange={(e) => entity.TenantId = e.target.value}>
                  {tenants.map((obj, index) => (
                    <option key={index} value={obj.TenantId}>{obj.TenantName}</option>
                  ))}
                </select>
              </div>
            )}
            {/* Further form elements */}
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn btn-success" onClick={() => saveUser(entity)} disabled={!entity.UserName || entity.UserName.trim() === ''}>Save</button>
        <button className="btn btn-primary" onClick={closeForm}>Cancel</button>
      </div>
    </div>
  );
};
export default UserForm;