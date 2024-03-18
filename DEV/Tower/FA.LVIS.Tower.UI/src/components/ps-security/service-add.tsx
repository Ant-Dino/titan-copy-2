import React, { useState, useEffect } from 'react';
type Props = {
  identityOptions: Array<{ value: string; label: string }>;
  searchUsers: (identity: string, searchText: string) => Promise<any[]>;
  userEntity: any; // Define more specific type based on actual entity structure
  saveUser: () => void;
  onClose: () => void;
  hasExceptionManageAccess?: boolean;
  hasAccessRightAccess?: boolean;
  tenants: Array<{ TenantId: string; TenantName: string }>;
  manageTenantAccess?: boolean;
};
const UserAddModal: React.FC<Props> = ({
  identityOptions,
  searchUsers,
  userEntity,
  saveUser,
  onClose,
  hasExceptionManageAccess = false,
  hasAccessRightAccess = false,
  tenants,
  manageTenantAccess = false,
}) => {
  const [identity, setIdentity] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [searchData, setSearchData] = useState<any[]>([]);
  const [busy, setBusy] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<any>(null);
  useEffect(() => {
    setIdentity(identityOptions[0].value);
  }, [identityOptions]);
  const handleSearch = async () => {
    setBusy(true);
    const data = await searchUsers(identity, searchText);
    setSearchData(data);
    setBusy(false);
  };
  return (
    <div>
      <div className="widget-header">
        <button type="button" className="close" onClick={onClose} aria-hidden="true">&times;</button>
        <i className="fa fa-user-plus"></i>
        <h3>Add New User</h3>
      </div>
      <div className="widget-content">
        <div className="row">
          <div className="col-lg-5">
            <div>
              <label>Find user: </label>
              <select name="SelectIdentity" id="singleIdentity" value={identity} onChange={(e) => setIdentity(e.target.value)}>
                {identityOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <input className="input" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
              <div style={{display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer'}} onClick={handleSearch}>
                {!busy ? <i className="fa fa-search"></i> : <i className="fa fa-spinner fa-spin"></i>}
              </div>
            </div>
            {searchData.length > 0 && (
              <div>
                <label>List of Matched users: </label>
                <select style={{width: '100%'}} size={7} value={currentItem} onChange={(e) => setCurrentItem(e.target.value)} multiple={false}>
                  {searchData.map((user, index) => (
                    <option key={index} value={user}>{user.Name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="col-lg-7">
            <form name="serviceAddForm" className="serviceForm">
              <div className="well well-sm">
                <b>User Profile</b>
              </div>
              {/* Form fields based on userEntity and other props */}
            </form>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn btn-success" onClick={saveUser}>Save</button>
        <button className="btn btn-primary" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};
export default UserAddModal;