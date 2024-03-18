import React, { useState, useEffect } from 'react';
export const UserForm = () => {
    const [identity, setIdentity] = useState('CORP');
    const [txtUser, setTxtUser] = useState('');
    const [busy, setBusy] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [searchdata, setSearchdata] = useState([]);
    const [entity, setEntity] = useState({
    const [showTenants, setShowTenants] = useState(false);
    const [manageTenantAccess, setManageTenantAccess] = useState(false);
    const [hasExceptionManageAccess, setHasExceptionManageAccess] = useState(false);
    const [hasAccessrightAccess, setHasAccessrightAccess] = useState(false);
    const [applicationRoles] = useState(['User', 'Admin']);
    const [tenants, setTenants] = useState([{ TenantId: '1', TenantName: 'Tenant1' }, { TenantId: '2', TenantName: 'Tenant2' }]);
    const search = () => {
    const save = () => {
    const close = () => {
    useEffect(() => {
    return (
        <div>
            <div className="widget-header">
                <button type='button' className='close' onClick={close} aria-hidden='true'>&times;</button>
                <i className="fa fa-user-plus"></i>
                <h3>Add New User</h3>
            </div>
            <div className="widget-content">
                <div className="row">
                    <div className="col-lg-5">
                        <div>
                            {/* Formerly growl component */}
                            <label>Find user: </label>
                            <select name="SelectIdentity" id="singleIdentity" value={identity} onChange={e => setIdentity(e.target.value)}>
                                <option value="CORP">CORP</option>
                                <option value="INTL">INTL</option>
                            </select>
                            <input className="input" type="text" value={txtUser} onChange={e => setTxtUser(e.target.value)} />
                            <div style={{display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer'}} onClick={search}>
                                {!busy ? <i className="fa fa-search"></i> : <i className="fa fa-spinner fa-spin"></i>}
                            </div>
                        </div>
                        <br />
                        {searchdata.length > 0 && (
                            <div>
                                <label>List of Matched users: </label>
                                <select style={{width: '100%'}} size="7" value={currentItem} onChange={e => setCurrentItem(e.target.value)} multiple>
                                    {searchdata.map(opt => (
                                        <option key={opt.Name} value={opt.Name}>
                                            {opt.Name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                    <div className="col-lg-7">
                        <form name="serviceAddForm" className="serviceForm">
                            <div className="well well-sm">
                                <b> User Profile</b>
                            </div>
                            <div className="form-group">
                                <label>User Id</label>
                                <input className="input" type="text" disabled value={entity.UserName} />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="input" type="text" name="UserName" disabled required value={entity.Name} />
                            </div>
                            {showTenants && (
                                <div className="form-group">
                                    <label>Tenant</label>
                                    <select disabled={!manageTenantAccess} value={entity.TenantId} onChange={e => setEntity({...entity, TenantId: e.target.value})}>
                                        {tenants.map(obj => (
                                            <option key={obj.TenantId} value={obj.TenantId}>
                                                {obj.TenantName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            <div className="form-group">
                                <label style={{textAlign: 'left', width: '150px', verticalAlign: 'top'}}>Activity Rights</label>
                                <div style={{display: 'inline-block', margin: '0 auto'}} id="TadioButtonList">
                                    {applicationRoles.map(Rights => (
                                        <label className="radio-inline" key={Rights}>
                                            <input type="radio" name="ActivityRadio" value={Rights} checked={entity.Role === Rights} onChange={() => setEntity({...entity, Role: Rights})} />
                                            {Rights}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="well well-sm" style={{display: hasExceptionManageAccess ? 'block' : 'none'}}>
                                <b>User Rights</b>
                            </div>
                            {hasExceptionManageAccess && (
                                <div className="form-group">
                                    <label className="label-lg">Manage TEQ
                                        <input type="checkbox" checked={entity.ManageTEQ} onChange={() => setEntity({...entity, ManageTEQ: !entity.ManageTEQ})} />
                                    </label>
                                </div>
                            )}
                            {hasExceptionManageAccess && (
                                <div className="form-group">
                                    <label className="label-lg">Manage BEQ
                                        <input className="input" type="checkbox" checked={entity.ManageBEQ} onChange={() => setEntity({...entity, ManageBEQ: !entity.ManageBEQ})} />
                                    </label>
                                </div>
                            )}
                            {hasAccessrightAccess && (
                                <div className="form-group">
                                    <label className="label-lg">Manage Access Request
                                        <input className="input" type="checkbox" checked={entity.ManageAccessREQ} onChange={() => setEntity({...entity, ManageAccessREQ: !entity.ManageAccessREQ})} />
                                    </label>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button className="btn btn-success" onClick={save}>Save</button>
                <button className="btn btn-primary" onClick={close}>Cancel</button>
            </div>
        </div>
    );
};