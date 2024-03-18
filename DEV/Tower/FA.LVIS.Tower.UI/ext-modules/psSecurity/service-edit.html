import React, { useState, useEffect } from 'react';
interface UserProfileProps {
    entity: {
        UserName: string;
        Name: string;
        TenantId: string | number;
        Role: string;
        IsActive: boolean;
        ManageTEQ: boolean;
        ManageBEQ: boolean;
        ManageAccessREQ: boolean;
    };
    save: () => void;
    close: () => void;
    showTenants: boolean;
    manageTenantAccess: boolean;
    hasExceptionManageAccess: boolean;
    hasAccessrightAccess: boolean;
    hasModifyAccess: boolean;
    applicationRoles: string[];
    tenants: { TenantId: string; TenantName: string }[];
}
const UserProfile: React.FC<UserProfileProps> = ({ entity, save, close, showTenants, manageTenantAccess, hasExceptionManageAccess, hasAccessrightAccess, hasModifyAccess, applicationRoles, tenants }) => {
    const [isFormDirty, setIsFormDirty] = useState(false);
    useEffect(() => {
        // You might add any side effects here if necessary.
    }, []);
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
                    {/* Example for handling change to set form to dirty */}
                    <div className="form-group">
                        <label>User Id</label>
                        <input className="input" type="text"  disabled value={entity.UserName} required />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="input" type="text" disabled value={entity.Name} required onChange={() => setIsFormDirty(true)}/>
                    </div>
                    {showTenants && (
                        <div className="form-group">
                            <label>Tenant</label>
                            <select value={entity.TenantId} disabled={!manageTenantAccess} onChange={(e) => {entity.TenantId = e.target.value; setIsFormDirty(true);}}>
                                {tenants.sort((a, b) => a.TenantName.localeCompare(b.TenantName)).map(obj => (
                                    <option key={obj.TenantId} value={obj.TenantId}>{obj.TenantName}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="form-group">
                        <label className="label-md">Activity Rights</label>
                        {applicationRoles.map(Rights => (
                            <label key={Rights} className="radio-inline radio-inline-modified">
                                <input className="input" type="radio" name="ActivityRadio" checked={entity.Role === Rights} onChange={() => { entity.Role = Rights; setIsFormDirty(true); }} required/>{Rights}
                            </label>
                        ))}
                    </div>
                    <div className="form-group">
                        <label style={{width:'145px'}}>
                            Active
                            <input className="input" type="checkbox" checked={entity.IsActive} onChange={(e) => { entity.IsActive = e.target.checked; setIsFormDirty(true); }}/>
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
                                    <input type="checkbox" checked={entity.ManageTEQ} onChange={(e) => { entity.ManageTEQ = e.target.checked; setIsFormDirty(true); }}/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="label-lg">
                                    Manage BEQ
                                    <input className="input" type="checkbox" checked={entity.ManageBEQ} onChange={(e) => { entity.ManageBEQ = e.target.checked; setIsFormDirty(true); }}/>
                                </label>
                            </div>
                        </>
                    )}
                    {hasAccessrightAccess && (
                        <div className="form-group">
                            <label className="label-lg">
                                Manage Access Request
                                <input className="input" type="checkbox" checked={entity.ManageAccessREQ} onChange={(e) => { entity.ManageAccessREQ = e.target.checked; setIsFormDirty(true); }}/>
                            </label>
                        </div>
                    )}
                </form>
            </div>
            <div className="modal-footer">
                <button className="btn btn-success" disabled={!isFormDirty || !hasModifyAccess} onClick={save}>Save</button>
                <button className="btn btn-primary" onClick={close}>Cancel</button>
            </div>
        </div>
    );
};
export default UserProfile;