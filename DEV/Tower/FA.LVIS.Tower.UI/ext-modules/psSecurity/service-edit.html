import React, { useState, useEffect } from 'react';
type UserProfileProps = {
  userInfo: any;
  tenants: any[];
  applicationRoles: string[];
  manageTenantAccess: boolean;
  showTenants: boolean;
  hasExceptionManageAccess: boolean;
  hasAccessRightAccess: boolean;
  saveProfile: () => void;
  closeProfile: () => void;
const UserProfile: React.FC<UserProfileProps> = ({
  userInfo,
  tenants,
  applicationRoles,
  manageTenantAccess,
  showTenants,
  hasExceptionManageAccess,
  hasAccessRightAccess,
  saveProfile,
  closeProfile,
  const [user, setUser] = useState(userInfo);
  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.checked });
  };
  const handleSave = () => {
    saveProfile();
  };
  return (
    <div>
      <div className="widget-header">
        <button type="button" className="close" aria-hidden="true" onClick={closeProfile}>&times;</button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Edit User Profile</h3>
      </div>
      <div className="widget-content">
        <form className="serviceForm">
          <div className="well well-sm">
            <b> User Profile</b>
          </div>
          <div className="form-group">
            <label>User Id</label>
            <input className="input" type="text" disabled value={user.UserName} />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input className="input" type="text" disabled value={user.Name} />
          </div>
          {showTenants && (
            <div className="form-group">
              <label>Tenant</label>
              <select
                disabled={!manageTenantAccess}
                value={user.TenantId}
                onChange={(e) => setUser({ ...user, TenantId: e.target.value })}
              >
                {tenants.map((obj, index) => (
                  <option key={index} value={obj.TenantId}>
                    {obj.TenantName}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="form-group">
            <label>Activity Rights</label>
            {applicationRoles.map((Rights, index) => (
              <label className="radio-inline radio-inline-modified" key={index}>
                <input
                  type="radio"
                  name="ActivityRadio"
                  checked={user.Role === Rights}
                  onChange={() => setUser({ ...user, Role: Rights })}
                />
                {Rights}
              </label>
            ))}
          </div>
          <div className="form-group">
            <label>
              Active
              <input
                type="checkbox"
                name="IsActive"
                checked={user.IsActive}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
          {hasExceptionManageAccess && (
            <>
              <div className="well well-sm">
                <b>User Rights</b>
              </div>
              <div className="form-group">
                <label>
                  Manage TEQ
                  <input
                    type="checkbox"
                    name="ManageTEQ"
                    checked={user.ManageTEQ}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Manage BEQ
                  <input
                    type="checkbox"
                    name="ManageBEQ"
                    checked={user.ManageBEQ}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
            </>
          )}
          {hasAccessRightAccess && (
            <div className="form-group">
              <label>
                  Manage Access Request
                  <input
                    type="checkbox"
                    name="ManageAccessREQ"
                    checked={user.ManageAccessREQ}
                    onChange={handleCheckboxChange}
                  />
              </label>
            </div>
          )}
        </form>
      </div>
      <div className="modal-footer">
        <button className="btn btn-success" disabled={!user.IsActive} onClick={handleSave}>Save</button>
        <button className="btn btn-primary" onClick={closeProfile}>Cancel</button>
      </div>
    </div>
  );
};
export default UserProfile;