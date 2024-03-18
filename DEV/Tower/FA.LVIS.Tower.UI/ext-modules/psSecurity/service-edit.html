import React, { useState } from 'react';
interface UserProfile {
  UserName: string;
  Name: string;
  TenantId: string | null;
  Role: string;
  IsActive: boolean;
  ManageTEQ: boolean;
  ManageBEQ: boolean;
  ManageAccessREQ: boolean;
interface TenantOption {
  TenantId: string;
  TenantName: string;
const PsHelpComponent: React.FC = () => {
  const [entity, setEntity] = useState<UserProfile>({
    UserName: '',
    Name: '',
    TenantId: null,
    Role: '',
    IsActive: false,
    ManageTEQ: false,
    ManageBEQ: false,
    ManageAccessREQ: false,
  });
  const [showTenants, setShowTenants] = useState<boolean>(false);
  const [manageTenantAccess, setManageTenantAccess] = useState<boolean>(false);
  const [hasExceptionManageAccess, setHasExceptionManageAccess] = useState<boolean>(false);
  const [hasAccessRightAccess, setHasAccessRightAccess] = useState<boolean>(false);
  const [tenants, setTenants] = useState<TenantOption[]>([]);
  const [applicationRoles, setApplicationRoles] = useState<string[]>([]);
  
  const handleSave = () => {
    // Save logic here
  };
  const handleClose = () => {
    // Close logic here
  };
  
  return (
    <div>
      <div className="widget-header">
        <button type="button" className="close" onClick={handleClose} aria-hidden="true">&times;</button>
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
            <input className="input" type="text" disabled value={entity.UserName} required />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input className="input" type="text" disabled value={entity.Name} onChange={(e) => setEntity({...entity, Name: e.target.value})} required />
          </div>
          {showTenants && (
          <div className="form-group">
            <label>Tenant</label>
            <select value={entity.TenantId ?? ''} onChange={(e) => setEntity({...entity, TenantId: e.target.value})} disabled={!manageTenantAccess}>
              {tenants.map((option) => (
                <option key={option.TenantId} value={option.TenantId}>
                  {option.TenantName}
                </option>
              ))}
            </select> 
          </div>
          )}
          <div className="form-group">
            <label className="label-md">Activity Rights</label>
            {applicationRoles.map((Rights, index) => (
              <label key={index} className="radio-inline radio-inline-modified">
                <input className="input" type="radio" name="ActivityRadio" onChange={() => setEntity({...entity, Role: Rights})} checked={entity.Role === Rights} required />{Rights}
              </label>
            ))}
          </div>

          <div className="form-group">
            <label style={{width: '145px'}}>
              Active
              <input className="input" type="checkbox" checked={entity.IsActive} onChange={(e) => setEntity({...entity, IsActive: e.target.checked})}/>
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
                <input type="checkbox" checked={entity.ManageTEQ} onChange={(e) => setEntity({...entity, ManageTEQ: e.target.checked})}/>
              </label>
            </div>
            <div className="form-group">
              <label className="label-lg">
                Manage BEQ
                <input className="input" type="checkbox" checked={entity.ManageBEQ} onChange={(e) => setEntity({...entity, ManageBEQ: e.target.checked})}/>
              </label>
            </div>
          </>
          )}
          {hasAccessRightAccess && (
            <div className="form-group">
              <label className="label-lg">
                Manage Access Request
                <input className="input" type="checkbox" checked={entity.ManageAccessREQ} onChange={(e) => setEntity({...entity, ManageAccessREQ: e.target.checked})}/>
              </label>
            </div>
          )}
        </form>
      </div>
      <div className="modal-footer">
        <button className="btn btn-success" disabled={!entity.Name.trim()} onClick={handleSave}>Save</button>
        <button className="btn btn-primary" onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
};

export default PsHelpComponent;