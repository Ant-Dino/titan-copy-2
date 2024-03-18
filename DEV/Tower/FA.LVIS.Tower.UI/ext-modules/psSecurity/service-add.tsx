import React, { useState, useEffect } from 'react';
interface User {
  UserName: string;
  Name: string;
  EmailId: string;
  Employeeid: string;
  TenantId: string;
  Role: string;
  IsActive: boolean;
  ManageTEQ: boolean;
  ManageBEQ: boolean;
  ManageAccessREQ: boolean;
interface Tenant {
  TenantId: string;
  TenantName: string;
const PsHelpComponent: React.FC = () => {
  const [entities, setEntities] = useState<User[]>([]);
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [currentEntity, setCurrentEntity] = useState<User>({
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
  const [searchData, setSearchData] = useState<User[]>([]);
  const [showTenants, setShowTenants] = useState(false);
  const [hasExceptionManageAccess, setHasExceptionManageAccess] = useState(false);
  const [hasAccessRightAccess, setHasAccessRightAccess] = useState(false);
  const [busy, setBusy] = useState(false);
  // Mock function to simulate search
  const search = () => {
    setBusy(true);
    setTimeout(() => {
      const mockData: User[] = []; // Replace with actual search logic
      setSearchData(mockData);
      setBusy(false);
    }, 3000);
  // Mock function for saving data
  const save = () => {
    // Implement saving logic here
  return (
    <div>
      <div className="widget-header">
        <button type="button" className="close" aria-hidden="true" onClick={() => console.log('Close Clicked')}>&times;</button>
        <i className="fa fa-user-plus"></i>
        <h3>Add New User</h3>
      </div>
      <div className="widget-content">
        <div className="row">
          <div className="col-lg-5">
            <div>
              <div>{/* This would be replaced by a growl-like component for notifications */}</div>
              <label>Find user: </label>
              <select name="SelectIdentity" id="singleIdentity" value={currentEntity.TenantId} onChange={e => setCurrentEntity({ ...currentEntity, TenantId: e.target.value })}>
                <option value="CORP">CORP</option>
                <option value="INTL">INTL</option>
              </select>
              <input className="input" type="text" value={currentEntity.UserName} onChange={e => setCurrentEntity({ ...currentEntity, UserName: e.target.value })} />
              <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={!busy ? search : undefined}>
                <i className="fa fa-search"></i>
              </div>
              <div style={{ display: 'inline-block', margin: '0 auto' }} hidden={!busy}>
                <i className="fa fa-spinner fa-spin"></i>
              </div>
            </div>
            <br />
            <div hidden={searchData.length === 0}>
              <label>List of Matched users: </label>
              <select style={{ width: '100%' }} size={7} value={currentEntity.UserName} multiple={false} onChange={e => setCurrentEntity(searchData.find(user => user.UserName === e.target.value) || currentEntity)}>
                {searchData.map(opt => (
                  <option key={opt.UserName} value={opt.UserName}>{opt.Name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-lg-7">
            <form name="serviceAddForm" className="serviceForm">
              <div className="well well-sm">
                <b> User Profile</b>
              </div>
              <div className="form-group">
                <label>User Id</label>
                <input className="input" type="text" disabled value={currentEntity.UserName} />
              </div>
              <div className={`form-group`}>
                <label>Name</label>
                <input className="input" type="text" name="UserName" disabled required value={currentEntity.Name} onChange={e => setCurrentEntity({ ...currentEntity, Name: e.target.value })} />
                <input type="hidden" name="EmailId" value={currentEntity.EmailId} />
                <input type="hidden" name="Employeeid" value={currentEntity.Employeeid} />
              </div>
              <div className="form-group" hidden={!showTenants}>
                <label>Tenant</label>
                <select disabled={!showTenants} value={currentEntity.TenantId} onChange={e => setCurrentEntity({ ...currentEntity, TenantId: e.target.value })}>
                  {tenants.map(obj => (
                    <option key={obj.TenantId} value={obj.TenantId}>{obj.TenantName}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label style={{ textAlign: 'left', width: '150px', verticalAlign: 'top' }}>Activity Rights </label>
                <div style={{ display: 'inline-block', margin: '0 auto' }} id="radioButtonList">
                  {currentEntity.Role && ['Admin', 'User', 'Viewer'].map(Rights => (
                    <label className="radio-inline" key={Rights}>
                      <input type="radio" name="ActivityRadio" checked={currentEntity.Role === Rights} onChange={() => setCurrentEntity({ ...currentEntity, Role: Rights })} />
                      {Rights}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ width: '146px' }}>
                  Active
                  <input className="input" type="checkbox" checked={currentEntity.IsActive} onChange={e => setCurrentEntity({ ...currentEntity, IsActive: e.target.checked })} />
                </label>
              </div>
             
              <div className="well well-sm" hidden={!hasExceptionManageAccess}>
                <b>User Rights</b>
              </div>
              <div className="form-group" hidden={!hasExceptionManageAccess}>
                <label className="label-lg">
                  Manage TEQ
                  <input type="checkbox" checked={currentEntity.ManageTEQ} onChange={e => setCurrentEntity({ ...currentEntity, ManageTEQ: e.target.checked })} />
                </label>
              </div>
              <div className="form-group" hidden={!hasExceptionManageAccess}>
                <label className="label-lg">
                  Manage BEQ
                  <input className="input" type="checkbox" checked={currentEntity.ManageBEQ} onChange={e => setCurrentEntity({ ...currentEntity, ManageBEQ: e.target.checked })} />
                </label>
              </div>  
              <div className="form-group" hidden={!hasAccessRightAccess}>
                <label className="label-lg">
                  Manage Access Request
                  <input className="input" type="checkbox" checked={currentEntity.ManageAccessREQ} onChange={e => setCurrentEntity({ ...currentEntity, ManageAccessREQ: e.target.checked })} />
                </label>
              </div>                  
            </form>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn btn-success" onClick={save} disabled={!currentEntity.Name}>Save</button>
        <button className="btn btn-primary" onClick={() => console.log('Cancel')}>Cancel</button>
      </div>
    </div>
  );
export default PsHelpComponent;