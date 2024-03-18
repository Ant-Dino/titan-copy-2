import React, { useState, useEffect } from 'react';
type UserEntity = {
  UserName: string,
  Name: string,
  EmailId: string,
  Employeeid: string,
  TenantId: number | string,
  Role: string,
  IsActive: boolean,
  ManageTEQ: boolean,
  ManageBEQ: boolean,
  ManageAccessREQ: boolean,
};
interface Option {
  TenantId: number | string,
  TenantName: string,
}
type Rights = 'User' | 'Admin'; // Assuming these are the roles
const PsHelpComponent = () => {
  const [identity, setIdentity] = useState<string>('CORP');
  const [txtUser, setTxtUser] = useState<string>('');
  const [busy, setBusy] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<string | undefined>();
  const [entity, setEntity] = useState<UserEntity>({} as UserEntity);
  const [showTenants, setShowTenants] = useState<boolean>(false);
  const [manageTenantAccess, setManageTenantAccess] = useState<boolean>(false);
  const [hasExceptionManageAccess, setHasExceptionManageAccess] = useState<boolean>(false);
  const [hasAccessRightAccess, setHasAccessRightAccess] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<UserEntity[]>([]);
  const [tenants, setTenants] = useState<Option[]>([]);
  const [applicationRoles, setApplicationRoles] = useState<Rights[]>(['User', 'Admin']);
  // Example function to simulate data fetching
  const fetchSearchData = async () => {
    // This would typically involve an API call
    setBusy(true);
    // Fake setTimeout to simulate network request
    setTimeout(() => {
      setSearchData([{ UserName: 'JohnD', Name: 'John Doe', EmailId: 'johnd@example.com', Employeeid: '12345', TenantId: '1', Role: 'User', IsActive: true, ManageTEQ: false, ManageBEQ: false, ManageAccessREQ: false }]);
      setBusy(false);
    }, 1000);
  };
  const search = () => {
    fetchSearchData();
  };
  const save = () => {
    // Placeholder for save logic
    console.log('Save function called', entity);
  };
  const closeModal = () => {
    // Placeholder for close modal logic
    console.log('Close modal');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEntity(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="widget-header">
        <button type="button" className="close" aria-hidden="true" onClick={closeModal}>&times;</button>
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
              <div style={{display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer'}} onClick={!busy ? search : undefined}>
                <i className="fa fa-search"></i>
              </div>
              <div style={{display: 'inline-block', margin: '0 auto'}} >
                {busy && <i className="fa fa-spinner fa-spin"></i>}
              </div>
            </div>
            <br />
            {searchData.length > 0 && (
              <div>
                <label>List of Matched users: </label>
                <select style={{width: '100%'}} size={7} value={currentItem} onChange={(e) => setCurrentItem(e.target.value)} multiple={false}>
                  {searchData.map((opt) => (
                    <option key={opt.UserName} value={opt.UserName}>{opt.Name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="col-lg-7">
            <form className="serviceForm">
              <div className="well well-sm">
                <b> User Profile</b>
              </div>
              <div className="form-group">
                <label>User Id</label>
                <input className="input" type="text" disabled value={entity.UserName || ''} />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input className="input" type="text" name="Name" disabled value={entity.Name || ''} onChange={handleChange} />
              </div>
              {/* Other input fields and functionality here */}
            </form>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn btn-success" onClick={save} disabled={!entity.Name}>Save</button>
        <button className="btn btn-primary" onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};
export default PsHelpComponent;