import React, { useState, useEffect } from 'react';
interface IUser {
    UserName: string;
    Name: string;
    EmailId: string;
    Employeeid: string;
    TenantId: string | null;
    Role: string;
    IsActive: boolean;
    ManageTEQ: boolean;
    ManageBEQ: boolean;
    ManageAccessREQ: boolean;
}
interface ITenant {
    TenantId: string;
    TenantName: string;
}
interface IRole {
    name: string; // Assuming roles are outlined by a name property for simplification
}
const AddNewUserComponent: React.FC = () => {
    const [tenants, setTenants] = useState<ITenant[]>([]);
    const [roles, setRoles] = useState<IRole[]>([]);
    const [user, setUser] = useState<IUser>({
        UserName: '',
        Name: '',
        EmailId: '',
        Employeeid: '',
        TenantId: null,
        Role: 'User',
        IsActive: false,
        ManageTEQ: false,
        ManageBEQ: false,
        ManageAccessREQ: false,
    });
    const [identity, setIdentity] = useState<string>('CORP');
    const [searchData, setSearchData] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [busy, setBusy] = useState<boolean>(false);
    const [showTenants, setShowTenants] = useState<boolean>(false);
    const [hasExceptionManageAccess, setHasExceptionManageAccess] = useState<boolean>(false);
    const [hasAccessRightAccess, setHasAccessRightAccess] = useState<boolean>(false);
    // Sample method to simulate search functionality
    const search = () => {
        // Example search logic here
        setBusy(true);
        setTimeout(() => {
            setSearchData([{ Name: 'John Doe', UserName: 'johndoe' }, { Name: 'Jane Doe', UserName: 'janedoe' }]);
            setBusy(false);
        }, 2000); // Just simulating an async search call
    };
    const getValue = () => {
        // Logic to get value from search data or any other operation
    };
    const save = () => {
        // Save logic goes here, including possible validation and API calls
    };
    const close = () => {
        // Handle modal close logic here
    };
    useEffect(() => {
        // Simulate fetching roles and tenants
        setRoles([{ name: 'User' }, { name: 'Admin' }]);
        setTenants([{ TenantId: '1', TenantName: 'Tenant A' }, { TenantId: '2', TenantName: 'Tenant B' }]);
    }, []);
    return (
        <div>
            <div className="widget-header">
                <button type="button" className="close" onClick={() => close()} aria-hidden="true">&times;</button>
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
                            <input className="input" type="text" onChange={(e) => setUser({...user, UserName: e.target.value})} />
                            <div style={{display: busy ? 'none' : 'inline-block', marginLeft: '0.5em', cursor: 'pointer'}} onClick={() => search()}>
                                <i className="fa fa-search"></i>
                            </div>
                            <div style={{display: busy ? 'inline-block' : 'none', margin: '0 auto'}}>
                                <i className="fa fa-spinner fa-spin"></i>
                            </div>
                        </div>
                        <br />
                        <div style={{display: searchData.length ? 'block' : 'none'}}>
                            <label>List of Matched users: </label>
                            <select style={{width: '100%'}} size={7} value={currentUser} onChange={(e) => setCurrentUser(e.target.value)} multiple={false}>
                                {searchData.map((item, index) => (
                                    <option key={index} value={item.UserName}>{item.Name}</option>
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
                                <input className="input" type="text" disabled value={user.UserName} />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="input" type="text" name="UserName" disabled required value={user.Name} />
                                {/* Hidden inputs for EmailId and Employeeid */}
                            </div>
                            <div className="form-group" style={{display: showTenants ? 'block' : 'none'}}>
                                <label>Tenant</label>
                                <select disabled={!user.TenantId} value={user.TenantId || ''} onChange={(e) => setUser({...user, TenantId: e.target.value})}>
                                    {tenants.map((tenant) => (
                                        <option key={tenant.TenantId} value={tenant.TenantId}>{tenant.TenantName}</option>
                                    ))}
                                </select>   
                            </div>
                            <div className="form-group">
                                <label style={{textAlign:'left', width:'150px',verticalAlign:'top'}}>Activity Rights </label>
                                <div id="TadioButtonList">
                                    {roles.map((role, index) => (
                                        <label key={index} className="radio-inline">
                                            <input type="radio" name="ActivityRadio" value={role.name} onChange={() => setUser({...user, Role: role.name})} checked={user.Role === role.name} />
                                            {role.name}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label style={{width:'146px'}}>
                                    Active
                                    <input className="input" type="checkbox" checked={user.IsActive} onChange={(e) => setUser({...user, IsActive: e.target.checked})} />
                                </label>
                            </div>
                            {/* Repeat for ManageTEQ, ManageBEQ, and ManageAccessREQ with similar logic */}
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button className="btn btn-success" onClick={() => save()} disabled={/* Add logic to disable based on form validity */ false}>Save</button>
                <button className="btn btn-primary" onClick={() => close()}>Cancel</button>
            </div>
        </div>
    );
};
export default AddNewUserComponent;