import React, { useState, useEffect } from 'react';
export interface UserProfileProps {
  user: any; // This should ideally be a more detailed interface/type based on your data structure
  saveUser: (user: any) => void;
  close: () => void;
  manageTenantAccess: boolean;
  hasExceptionManageAccess: boolean;
  hasAccessrightAccess: boolean;
  tenants: any[]; // This should be a more detailed type or interface
  applicationRoles: string[];
}
const UserProfile: React.FC<UserProfileProps> = ({
  user,
  saveUser,
  close,
  manageTenantAccess,
  hasExceptionManageAccess,
  hasAccessrightAccess,
  tenants,
  applicationRoles,
}) => {
  const [localUser, setLocalUser] = useState(user);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLocalUser({
      ...localUser,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const isFormDirty = () => JSON.stringify(user) !== JSON.stringify(localUser);
  const isFormValid = () => true; // Implement according to requirements
  return (
    <div>    
      <div className="widget-header">
        <button type="button" className="close" aria-hidden="true" onClick={close}>&times;</button>
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
            <input className="input" type="text" disabled name="userName" value={localUser.userName} required />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input className="input" type="text" disabled name="name" onChange={handleInputChange} value={localUser.name} required/>
          </div>
          {manageTenantAccess && (
            <div className="form-group">
              <label>Tenant</label>
              <select name="tenantId" disabled={!manageTenantAccess} value={localUser.tenantId} onChange={handleInputChange}>
                {tenants.map(tenant => (
                  <option key={tenant.TenantId} value={tenant.TenantId}>{tenant.TenantName}</option>
                ))}
              </select> 
            </div>
          )}
          <div className="form-group">
            <label className="label-md">Activity Rights</label>
            {applicationRoles.map(role => (
              <label className="radio-inline radio-inline-modified" key={role}>
                <input className="input" type="radio" name="role" onChange={handleInputChange} value={role} checked={localUser.role === role} required/>{role}
              </label>
            ))}
          </div>
          <div className="form-group">
            <label style={{width: '145px'}}>
              Active
              <input className="input" type="checkbox" name="isActive" onChange={handleInputChange} checked={localUser.isActive}/>
            </label>
          </div>
          {hasExceptionManageAccess && (
            <>
              <div className="well well-sm">
                <b>User Rights</b>
              </div>
              <div className="form-group">
                <label className="label-lg">
                  Manage TEQ
                  <input type="checkbox" name="manageTEQ" onChange={handleInputChange} checked={localUser.manageTEQ}/>
                </label>
              </div>
              <div className="form-group">
                <label className="label-lg">
                  Manage BEQ
                  <input className="input" type="checkbox" name="manageBEQ" onChange={handleInputChange} checked={localUser.manageBEQ}/>
                </label>
              </div>
            </>
          )}
          {hasAccessrightAccess && (
            <div className="form-group">
              <label className="label-lg">
                Manage Access Request
                <input className="input" type="checkbox" name="manageAccessREQ" onChange={handleInputChange} checked={localUser.manageAccessREQ}/>
              </label>
            </div>
          )}
        </form>
      </div>
      <div className="modal-footer">
        <button className="btn btn-success" disabled={!isFormValid() || !isFormDirty()} onClick={() => saveUser(localUser)}>Save</button>
        <button className="btn btn-primary" onClick={close}>Cancel</button>
      </div>
    </div>
  );
};
export default UserProfile;