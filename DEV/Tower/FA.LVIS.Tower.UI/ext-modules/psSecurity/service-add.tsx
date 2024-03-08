import React, { useState, useEffect } from 'react';

interface User {
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

interface Tenant {
 TenantId: string;
 TenantName: string;
}

const MyComponent: React.FC = () => {
 const [searchTerm, setSearchTerm] = useState('');
 const [currentUser, setCurrentUser] = useState<User>({
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
 const [searchResults, setSearchResults] = useState<User[]>([]);
 const [tenants, setTenants] = useState<Tenant[]>([]);
 const [busy, setBusy] = useState<boolean>(false);
 const [showTenants, setShowTenants] = useState<boolean>(false);
 const [hasExceptionManageAccess, setHasExceptionManageAccess] = useState<boolean>(false);
 const [hasAccessRightAccess, setHasAccessRightAccess] = useState<boolean>(false);
 const ApplicationRoles = ['User', 'Admin', 'SuperAdmin']; // Assume these roles

 const handleSearch = () => {
   // Implement search logic here
   setBusy(true);
   setTimeout(() => {
     setBusy(false);
     // Simulate search result
     setSearchResults([{ ...currentUser, Name: 'John Doe', UserName: 'johndoe' }]);
   }, 1000);
 };

 const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
   const { name, value } = event.target;
   setCurrentUser({ ...currentUser, [name]: value });
 };

 const save = () => {
   // Implement save functionality
   alert('User saved');
 };

 return (
   <div>
     <div className="widget-header">
       <button type="button" className="close" aria-hidden="true" onClick={() => console.log('Close')}>×</button>
       <i className="fa fa-user-plus"></i>
       <h3>Add New User</h3>
     </div>
     <div className="widget-content">
       <div className="row">
         <div className="col-lg-5">
           <div>
             <label>Find user: </label>
             <select name="TenantId" value={currentUser.TenantId || ''} onChange={handleChange}>
               <option value="CORP">CORP</option>
               <option value="INTL">INTL</option>
             </select>
             <input className="input" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
             <div style={{display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer'}} onClick={handleSearch}>
               {!busy ? <i className="fa fa-search"></i> : <i className="fa fa-spinner fa-spin"></i>}
             </div>
           </div>
           <br />
           {searchResults.length > 0 && (
             <div>
               <label>List of Matched users: </label>
               <select style={{width: '100%'}} size={7} multiple={false} value={currentUser.UserName} onChange={(e) => setCurrentUser(searchResults.find(user => user.UserName === e.target.value) || currentUser)}>
                 {searchResults.map((opt, idx) => (
                   <option key={idx} value={opt.UserName}>{opt.Name}</option>
                 ))}
               </select>
             </div>
           )}
         </div>
         <div className="col-lg-7">
           <div className="form-group">
             <label>User Id</label>
             <input className="input" type="text" disabled value={currentUser.UserName} />
           </div>
           <div className="form-group">
             <label>Name</label>
             <input className="input" type="text" name="Name" disabled value={currentUser.Name} onChange={handleChange} />
           </div>
           {/* Other form fields and logic */}
         </div>
       </div>
     </div>
     <div className="modal-footer">
       <button className="btn btn-success" onClick={save}>Save</button>
       <button className="btn btn-primary" onClick={() => console.log('Cancel')}>Cancel</button>
     </div>
   </div>
 );
};

export default MyComponent;