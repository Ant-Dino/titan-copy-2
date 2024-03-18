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
}
interface Tenant {
 TenantId: string;
 TenantName: string;
}
interface Props {
 search: () => void;
 save: () => void;
 close: () => void;
 searchdata: Array<any>;
 entity: User;
 Tenants: Array<Tenant>;
 hasExceptionManageAccess: boolean;
 hasAccessrightAccess: boolean;
 ApplicationRoles: Array<string>;
 ShowTenants: boolean;
 MangeTenantAccess: boolean;
}
const UserManagementComponent: React.FC<Props> = ({ search, save, close, searchdata, entity, Tenants, hasExceptionManageAccess, hasAccessrightAccess, ApplicationRoles, ShowTenants, MangeTenantAccess }) => {
 const [selectedIdentity, setSelectedIdentity] = useState<string>('CORP');
 const [currentItem, setCurrentItem] = useState<any>(null);
 const [busy, setBusy] = useState<boolean>(false);
 useEffect(() => {
   // This can be used to trigger any effect when the component mounts
 }, []); // The empty array means this effect runs once on mount
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
             {/* React does not have a direct equivalent to Angular's growl, consider using a toast library */}
             <label>Find user: </label>
             <select name="SelectIdentity" id="singleIdentity" value={selectedIdentity} onChange={e => setSelectedIdentity(e.target.value)}>
               <option value="CORP">CORP</option>
               <option value="INTL">INTL</option>
             </select>
             <input className="input" type="text" onKeyPress={event => event.key === 'Enter' ? search() : null} />
             <div style={{display: "inline-block", marginLeft: "0.5em", cursor: "pointer"}} onClick={() => search()}>
               <i className="fa fa-search"></i>
             </div>
             <div style={{display: "inline-block", margin: "0 auto"}}>{busy && <i className="fa fa-spinner fa-spin"></i>}</div>
           </div>
           <br />
           {searchdata.length > 0 && (
             <div>
               <label>List of Matched users: </label>
               <select style={{width: "100%"}} size={7} value={currentItem} onChange={e => setCurrentItem(e.target.value)} multiple={false}>
                 {searchdata.map(opt => (
                   <option key={opt.Name} value={opt}>{opt.Name}</option>
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
             {ShowTenants && (
               <div className="form-group">
                 <label>Tenant</label>
                 <select disabled={!MangeTenantAccess} value={entity.TenantId} onChange={e => entity.TenantId = e.target.value}>
                   {Tenants.map(obj => (
                     <option key={obj.TenantId} value={obj.TenantId}>{obj.TenantName}</option>
                   ))}
                 </select>  
               </div>
             )}
             <div className="form-group">
               <label style={{textAlign: 'left', width: '150px', verticalAlign: 'top'}}>Activity Rights </label>
               <div style={{display: "inline-block", margin: "0 auto"}} id="TadioButtonList">
                 {ApplicationRoles.map(Rights => (
                   <label key={Rights} className="radio-inline">
                     <input type="radio" name="ActivityRadio" checked={entity.Role === Rights} onChange={() => entity.Role = Rights} />
                     {Rights}
                   </label>
                 ))}
               </div>
             </div>
             <div>
               <label style={{width: '146px'}}>
                 Active
                 <input className="input" type="checkbox" checked={entity.IsActive} onChange={e => entity.IsActive = e.target.checked} />
               </label>
             </div>
             {hasExceptionManageAccess && (
               <React.Fragment>
                 <div className="well well-sm">
                   <b>User Rights</b>
                 </div>
                 <div className="form-group">
                   <label className="label-lg">
                     Manage TEQ
                     <input type="checkbox" checked={entity.ManageTEQ} onChange={e => entity.ManageTEQ = e.target.checked} />
                   </label>
                 </div>
                 <div className="form-group">
                   <label className="label-lg">
                     Manage BEQ
                     <input className="input" type="checkbox" checked={entity.ManageBEQ} onChange={e => entity.ManageBEQ = e.target.checked} />
                   </label>
                 </div>
               </React.Fragment>
             )}
             {hasAccessrightAccess && (
               <div className="form-group">
                 <label className="label-lg">
                   Manage Access Request
                   <input className="input" type="checkbox" checked={entity.ManageAccessREQ} onChange={e => entity.ManageAccessREQ = e.target.checked} />
                 </label>
               </div>
             )}
           </form>
         </div>
       </div>
     </div>
     <div className="modal-footer">
       <button className="btn btn-success" onClick={() => save()} disabled={/* some condition to disable save button */}>Save</button>
       <button className="btn btn-primary" onClick={() => close()}>Cancel</button>
     </div>
   </div>
 );
};
export default UserManagementComponent;