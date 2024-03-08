import React, { useState } from 'react';

interface IUser {
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

const AddNewUser: React.FC = () => {
 const [searchData, setSearchData] = useState<Array<{ Name: string }>>([]);
 const [currentItem, setCurrentItem] = useState<string>('');
 const [busy, setBusy] = useState<boolean>(false);
 const [entity, setEntity] = useState<IUser>({
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

 const hasExceptionManageAccess = true; // assuming the access is determined somewhere in your app and passed as props
 const hasAccessrightAccess = true; // assuming this also
 const manageTenantAccess = true; // assuming this also
 const showTenants = true; // assuming this also
 const tenants = [{ TenantId: '1', TenantName: 'Tenant 1' }, { TenantId: '2', TenantName: 'Tenant 2' }]; // assuming tenant data
 const applicationRoles = ['User', 'Admin', 'Viewer']; // assuming roles data

 const handleSearch = () => {
   // Placeholder for search function
   console.log('Searching...');
 };

 const save = () => {
   // Placeholder for save function
   console.log('Saving...');
 };

 const closeModal = () => {
   // Placeholder for close modal function
   console.log('Modal closed');
 };

 return (
   <div>
     <div className="widget-header">
       <button type="button" className="close" onClick={closeModal} aria-hidden="true">&times;</button>
       <i className="fa fa-user-plus"></i>
       <h3>Add New User</h3>
     </div>
     <div className="widget-content">
       <div className="row">
         <div className="col-lg-5">
           <div>
             <label>Find user: </label>
             <select name="SelectIdentity" id="singleIdentity" value={entity.TenantId} onChange={e => setEntity({ ...entity, TenantId: e.target.value })}>
               <option value="CORP">CORP</option>
               <option value="INTL">INTL</option>
             </select>
             <input className="input" type="text" value={entity.Name} onChange={e => setEntity({ ...entity, Name: e.target.value })} />
             <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={handleSearch}>
               {!busy ? <i className="fa fa-search"></i> : <i className="fa fa-spinner fa-spin"></i>}
             </div>
           </div>
           <br />
           {searchData.length > 0 && (
             <div>
               <label>List of Matched users: </label>
               <select style={{ width: '100%' }} size={7} value={currentItem} onChange={e => setCurrentItem(e.target.value)} multiple={false}>
                 {searchData.map((opt, index) => (
                   <option key={index} value={opt.Name}>
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
                 <select disabled={!manageTenantAccess} value={entity.TenantId} onChange={e => setEntity({ ...entity, TenantId: e.target.value })}>
                   {tenants.map((obj, index) => (
                     <option key={index} value={obj.TenantId}>
                       {obj.TenantName}
                     </option>
                   ))}
                 </select>
               </div>
             )}
             <div className="form-group">
               <label style={{ textAlign: 'left', width: '150px', verticalAlign: 'top' }}>Activity Rights </label>
               <div style={{ display: 'inline-block', margin: '0 auto' }} id="TadioButtonList">
                 {applicationRoles.map((rights, index) => (
                   <label className="radio-inline" key={index}>
                     <input type="radio" name="ActivityRadio" checked={entity.Role === rights} onChange={() => setEntity({ ...entity, Role: rights })} />
                     {rights}
                   </label>
                 ))}
               </div>
             </div>
             <div>
               <label style={{ width: '146px' }}>
                 Active
                 <input className="input" type="checkbox" checked={entity.IsActive} onChange={e => setEntity({ ...entity, IsActive: e.target.checked })} />
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
                     <input type="checkbox" checked={entity.ManageTEQ} onChange={e => setEntity({ ...entity, ManageTEQ: e.target.checked })} />
                   </label>
                   <label className="label-lg">
                     Manage BEQ
                     <input className="input" type="checkbox" checked={entity.ManageBEQ} onChange={e => setEntity({ ...entity, ManageBEQ: e.target.checked })} />
                   </label>
                 </div>
               </React.Fragment>
             )}
             {hasAccessrightAccess && (
               <div className="form-group">
                 <label className="label-lg">
                   Manage Access Request
                   <input className="input" type="checkbox" checked={entity.ManageAccessREQ} onChange={e => setEntity({ ...entity, ManageAccessREQ: e.target.checked })} />
                 </label>
               </div>
             )}
           </form>
         </div>
       </div>
     </div>
     <div className="modal-footer">
       <button className="btn btn-success" onClick={save} disabled={!entity.UserName || !entity.Name}>Save</button>
       <button className="btn btn-primary" onClick={closeModal}>Cancel</button>
     </div>
   </div>
 );
};

export default AddNewUser;