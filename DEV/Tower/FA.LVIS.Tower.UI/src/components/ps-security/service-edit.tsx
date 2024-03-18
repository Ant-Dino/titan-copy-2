import React, { useState } from 'react';
interface UserProfileProps {
  entity: {
    UserName: string;
    Name: string;
    TenantId?: string;
    Role?: string;
    IsActive: boolean;
    ManageTEQ?: boolean;
    ManageBEQ?: boolean;
    ManageAccessREQ?: boolean;
  };
  ShowTenants: boolean;
  MangeTenantAccess: boolean;
  Tenants: Array<{ TenantId: string; TenantName: string }>;
  ApplicationRoles: Array<string>;
  hasExceptionManageAccess: boolean;
  hasAccessrightAccess: boolean;
  save: () => void;
  close: () => void;
}
const UserProfile: React.FC<UserProfileProps> = ({
  entity,
  ShowTenants,
  MangeTenantAccess,
  Tenants,
  ApplicationRoles,
  hasExceptionManageAccess,
  hasAccessrightAccess,
  save,
  close,
}) => {
  const [formDirty, setFormDirty] = useState(false);
  const handleChange = () => {
    setFormDirty(true);
  };
  return (
    <div>
      <div className="widget-header">
        <button type="button" className="close" aria-hidden="true" onClick={close}>&times;</button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Edit User Profile</h3>
      </div>
      <div className="widget-content">
        <div className="well well-sm">
          <b> User Profile</b>
        </div>
        <div className="form-group">
          <label>User Id</label>
          <input className="input" type="text"  disabled value={entity.UserName} required />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input className="input" type="text" disabled value={entity.Name} onChange={handleChange} required/>
        </div>
        {ShowTenants && (
          <div className="form-group">
            <label>Tenant</label>
            <select value={entity.TenantId} disabled={!MangeTenantAccess} onChange={handleChange}>
              {Tenants.map(tenant => (
                <option key={tenant.TenantId} value={tenant.TenantId}>{tenant.TenantName}</option>
              ))}
            </select>
          </div>
        )}
        <div className="form-group">
          <label className="label-md">Activity Rights</label>
          {ApplicationRoles.map(role => (
            <label className="radio-inline radio-inline-modified" key={role}>
              <input className="input" type="radio" name="ActivityRadio" value={role} checked={entity.Role === role} onChange={handleChange} required/>{role}
            </label>
          ))}
        </div>
        <div className="form-group">
          <label style={{ width: '145px' }}>
            Active
            <input className="input" type="checkbox" checked={entity.IsActive} onChange={(e) => handleChange()} />
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
                <input type="checkbox" checked={entity.ManageTEQ} onChange={(e) => handleChange()} />
              </label>
            </div>
            <div className="form-group">
              <label className="label-lg">
                Manage BEQ
                <input className="input" type="checkbox" checked={entity.ManageBEQ} onChange={(e) => handleChange()} />
              </label>
            </div>
          </>
        )}
        {hasAccessrightAccess && (
          <div className="form-group">
            <label className="label-lg">
              Manage Access Request
              <input className="input" type="checkbox" checked={entity.ManageAccessREQ} onChange={(e) => handleChange()} />
            </label>
          </div>
        )}
      </div>
      <div className="modal-footer">
        <button className="btn btn-success" disabled={!formDirty} onClick={save}>Save</button>
        <button className="btn btn-primary" onClick={close}>Cancel</button>
      </div>
    </div>
  );
};
export default UserProfile;