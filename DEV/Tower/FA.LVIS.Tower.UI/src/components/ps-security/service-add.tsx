import React, { useState, useEffect } from 'react';
interface User {
  UserName: string;
  Name: string;
  EmailId: string;
  Employeeid: string;
  TenantId: any;
  Role: string;
  IsActive: boolean;
  ManageTEQ: boolean;
  ManageBEQ: boolean;
  ManageAccessREQ: boolean;
interface Tenant {
  TenantId: any;
  TenantName: string;
interface Props {
  searchdata: User[];
  tenants: Tenant[];
  showTenants: boolean;
  hasExceptionManageAccess: boolean;
  hasAccessrightAccess: boolean;
  manageTenantAccess: boolean;
  applicationRoles: string[];
  onSave: (entity: User) => void;
  onCancel: () => void;
}
const UserForm: React.FC<Props> = ({
  searchdata,
  tenants,
  showTenants,
  hasExceptionManageAccess,
  hasAccessrightAccess,
  manageTenantAccess,
  applicationRoles,
  onSave,
  onCancel,
  const [entity, setEntity] = useState<User>({
    UserName: '',
    Name: '',
    EmailId: '',
    Employeeid: '',
    TenantId: '',
    Role: 'User',
    IsActive: false,
    ManageTEQ: false,
    ManageBEQ: false,
    ManageAccessREQ: false,
  });
  const [currentItem, setCurrentItem] = useState<string | undefined>();
  const [isSaving, setIsSaving] = useState<boolean>(true);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntity({ ...entity, TenantId: e.target.value });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setEntity({ ...entity, [name]: val });
  };
  const handleSave = () => {
    setIsSaving(true);
    onSave(entity);
  };
  return (
    <div>
      <div className="widget-header">
        <button type="button" className="close" onClick={onCancel} aria-hidden="true">&times;</button>
        <i className="fa fa-user-plus"></i>
        <h3>Add New User</h3>
      </div>
      <div className="widget-content">
        <div className="row">
          <div className="col-lg-5">
            <div>
              <label>Find user: </label>
              <select 
                name="SelectIdentity" 
                id="singleIdentity" 
                value={currentItem} 
                onChange={(e) => setCurrentItem(e.target.value)}
              >
                <option value="CORP">CORP</option>
                <option value="INTL">INTL</option>
              </select>
              {/* Additional interactive elements can be added here */}
            </div>
            {searchdata.length > 0 && (
              <div>
                <label>List of Matched users: </label>
                <select
                  style={{ width: '100%' }}
                  size={7}
                  value={currentItem}
                  onChange={(e) => setCurrentItem(e.target.value)}
                >
                  {searchdata.map((opt) => (
                    <option key={opt.Employeeid} value={opt.Employeeid}>
                      {opt.Name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="col-lg-7">
            <div className="well well-sm">
              <b> User Profile</b>
            </div>
            {/* Form fields go here */}
            <button className="btn btn-success" onClick={handleSave} disabled={!isSaving}>Save</button>
            <button className="btn btn-primary" onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserForm;