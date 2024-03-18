import React, { useState, useEffect } from 'react';

interface UserProfileProps {
    entity: {
        UserName: string;
        Name: string;
        TenantId: string;
        Role: string;
        IsActive: boolean;
        ManageTEQ: boolean;
        ManageBEQ: boolean;
        ManageAccessREQ: boolean;
    };
    Tenants: Array<{ TenantId: string; TenantName: string }>;
    ApplicationRoles: Array<string>;
    ShowTenants: boolean;
    ManageTenantAccess: boolean;
    hasExceptionManageAccess: boolean;
    hasAccessrightAccess: boolean;
    hasModifyAccess: boolean;
    save: () => void;
    close: () => void;
}

const UserProfileEdit: React.FC<UserProfileProps> = ({
    entity,
    Tenants,
    ApplicationRoles,
    ShowTenants,
    ManageTenantAccess,
    hasExceptionManageAccess,
    hasAccessrightAccess,
    hasModifyAccess,
    save,
    close,
}) => {
    const [isFormDirty, setIsFormDirty] = useState(false);

    useEffect(() => {
        // Assuming there's a way to detect form changes, possibly via a custom hook or useEffect
        // Placeholder for form change detection logic to set isFormDirty
    }, []);

    const isFormInvalid = () => {
        // Placeholder for form validation logic
        return false; // Assuming form is valid for simplification
    }

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
                        <input className="input" type="text"  disabled value={entity.UserName} required />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="input" type="text" disabled value={entity.Name}  required/>
                    </div>
                    {ShowTenants && (
                        <div className="form-group">
                            <label>Tenant</label>
                            <select value={entity.TenantId} disabled={!ManageTenantAccess} onChange={(e) => console.log(e.target.value)}>
                                {Tenants.map((obj) => (
                                    <option key={obj.TenantId} value={obj.TenantId}>
                                        {obj.TenantName}
                                    </option>
                                ))}
                            </select> 
                        </div>
                    )}
                    <div className="form-group">
                        <label className="label-md">Activity Rights</label>
                        {ApplicationRoles.map((Rights, index) => (
                            <label className="radio-inline radio-inline-modified" key={index}>
                                <input className="input" type="radio" name="ActivityRadio" checked={entity.Role === Rights} onChange={() => console.log(Rights)} required/>{Rights}
                            </label>
                        ))}
                    </div>

                    <div className="form-group">
                        <label style={{width: '145px'}}>
                            Active
                            <input className="input" type="checkbox" checked={entity.IsActive} onChange={() => console.log('Toggle Active')} />
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
                                    <input type="checkbox" checked={entity.ManageTEQ} onChange={() => console.log('Toggle Manage TEQ')} />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="label-lg">
                                    Manage BEQ
                                    <input className="input" type="checkbox" checked={entity.ManageBEQ} onChange={() => console.log('Toggle Manage BEQ')} />
                                </label>
                            </div>
                        </>
                    )}
                    {hasAccessrightAccess && (
                        <div className="form-group">
                            <label className="label-lg">
                                Manage Access Request
                                <input className="input" type="checkbox" checked={entity.ManageAccessREQ} onChange={() => console.log('Toggle Manage Access Request')} />
                            </label>
                        </div>
                    )}

                </form>

            </div>
            <div className="modal-footer">
                <button className="btn btn-success" disabled={isFormInvalid() && !hasModifyAccess || !isFormDirty} onClick={save}>Save</button>
                <button className="btn btn-primary" onClick={close}>Cancel</button>
            </div>
        </div>
    );
};

export default UserProfileEdit;