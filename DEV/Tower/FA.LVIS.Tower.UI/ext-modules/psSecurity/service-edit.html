import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UserProfileEdit: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [entity, setEntity] = useState<any>({});
    const [tenants, setTenants] = useState<any[]>([]);
    const [applicationRoles, setApplicationRoles] = useState<any[]>([]);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [showTenants, setShowTenants] = useState(false);
    const [hasExceptionManageAccess, setHasExceptionManageAccess] = useState(false);
    const [hasAccessrightAccess, setHasAccessrightAccess] = useState(false);
    useEffect(() => {
        // Simulate fetching user data
        axios.get('/api/user/data')
            .then(response => {
                setEntity(response.data.entity);
                setTenants(response.data.tenants);
                setApplicationRoles(response.data.applicationRoles);
                setHasModifyAccess(response.data.hasModifyAccess);
                setShowTenants(response.data.showTenants);
                setHasExceptionManageAccess(response.data.hasExceptionManageAccess);
                setHasAccessrightAccess(response.data.hasAccessrightAccess);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the user data: ', error);
                setIsLoading(false);
            });
    }, []);
    const handleSave = () => {
        console.log('Save user profile');
        // Implement save logic here
    };
    if (isLoading) return <div>Loading...</div>;
    
    return (
        <div>
            <div className="widget-header">
                <button type="button" className="close" aria-hidden="true">&times;</button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>Edit User Profile</h3>
            </div>
            <div className="widget-content">
                <form className="serviceForm">
                    <div className="well well-sm">
                        <b>User Profile</b>
                    </div>
                    <div className="form-group">
                        <label>User Id</label>
                        <input className="input" type="text" disabled value={entity.UserName} />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="input" type="text" disabled value={entity.Name} />
                    </div>
                    {showTenants && (
                        <div className="form-group">
                            <label>Tenant</label>
                            <select disabled={!entity.MangeTenantAccess} value={entity.TenantId} onChange={e => setEntity({...entity, TenantId: e.target.value})}>
                                {tenants.map(tenant => (
                                    <option key={tenant.TenantId} value={tenant.TenantId}>{tenant.TenantName}</option>
                                ))}
                            </select> 
                        </div>
                    )}
                    <div className="form-group">
                        <label className="label-md">Activity Rights</label>
                        {applicationRoles.map((Rights, index) => (
                            <label key={index} className="radio-inline radio-inline-modified">
                                <input className="input" type="radio" name="ActivityRadio" checked={entity.Role === Rights} onChange={() => setEntity({...entity, Role: Rights})} />
                                {Rights}
                            </label>
                        ))}
                    </div>
                    <div className="form-group">
                        <label style={{width: '145px'}}>
                            Active
                            <input className="input" type="checkbox" checked={entity.IsActive} onChange={e => setEntity({...entity, IsActive: e.target.checked})} />
                        </label>
                    </div>
                    {hasExceptionManageAccess && (
                        <div>
                            <div className="well well-sm">
                                <b>User Rights</b>
                            </div>
                            <div className="form-group">
                                <label className="label-lg">
                                    Manage TEQ
                                    <input type="checkbox" checked={entity.ManageTEQ} onChange={e => setEntity({...entity, ManageTEQ: e.target.checked})} />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="label-lg">
                                    Manage BEQ
                                    <input className="input" type="checkbox" checked={entity.ManageBEQ} onChange={e => setEntity({...entity, ManageBEQ: e.target.checked})} />
                                </label>
                            </div>
                        </div>
                    )}
                    {hasAccessrightAccess && (
                        <div className="form-group">
                            <label className="label-lg">
                                Manage Access Request
                                <input className="input" type="checkbox" checked={entity.ManageAccessREQ} onChange={e => setEntity({...entity, ManageAccessREQ: e.target.checked})} />
                            </label>
                        </div>
                    )}
                </form>
            </div>
            <div className="modal-footer">
                <button className="btn btn-success" disabled={!hasModifyAccess} onClick={handleSave}>Save</button>
                <button className="btn btn-primary" onClick={() => console.log('Cancel')}>Cancel</button>
            </div>
        </div>
    );
};
export default UserProfileEdit;