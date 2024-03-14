import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UserFormComponent: React.FC = () => {
    const [identity, setIdentity] = useState<string>('CORP');
    const [txtUser, setTxtUser] = useState<string>('');
    const [currentItem, setCurrentItem] = useState<any>(null);
    const [searchData, setSearchData] = useState<any[]>([]);
    const [busy, setBusy] = useState<boolean>(false);
    const [entity, setEntity] = useState<any>({});
    const [showTenants, setShowTenants] = useState<boolean>(false);
    const [tenants, setTenants] = useState<any[]>([]);
    const [applicationRoles, setApplicationRoles] = useState<any[]>([]);
    const [hasExceptionManageAccess, setHasExceptionManageAccess] = useState<boolean>(false);
    const [hasAccessrightAccess, setHasAccessrightAccess] = useState<boolean>(false);
    // Assuming we have an endpoint to fetch searchData/applicationRoles/tenants/etc.
    useEffect(() => {
        // Example of fetching data and setting state
        setBusy(true);
        axios.get('/api/searchData') // The API endpoint to retrieve searchData
            .then((response) => {
                setSearchData(response.data);
                setBusy(false);
            });
        // Similar fetchData calls for applicationRoles, tenants, etc.
    }, []); // Empty dependency array means this effect runs only once after the initial render
    const handleSave = () => {
        console.log('Save entity', entity);
        // Implement save functionality, potentially updating the state/backend
    };
    const handleSelectIdentityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIdentity(event.target.value);
    };
    const handleSearch = () => {
        console.log('Implement search functionality based on', txtUser, 'and', identity);
        // Typically, you would set 'busy' to true, perform the search, and then update your search data
    };
    return (
        <div>
            
            <div className="widget-header">
                <button type="button" className="close" aria-hidden="true">&times;</button>
                <i className="fa fa-user-plus"></i>
                <h3>Add New User</h3>
            </div>
            <div className="widget-content">
                <div className="row">
                    <div className="col-lg-5">
                        <div>
                            <div></div> {/* Placeholder for growl notifications */}
                            <label>Find user: </label>
                            <select name="SelectIdentity" id="singleIdentity" value={identity} onChange={handleSelectIdentityChange}>
                                <option value="CORP">CORP</option>
                                <option value="INTL">INTL</option>
                            </select>
                            <input className="input" type="text" value={txtUser} onChange={(e) => setTxtUser(e.target.value)} />
                            <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={handleSearch}>
                                {!busy ? <i className="fa fa-search"></i> : <i className="fa fa-spinner fa-spin"></i>}
                            </div>
                        </div>
                        <br />
                        {searchData.length > 0 && (
                            <div>
                                <label>List of Matched users: </label>
                                <select style={{ width: '100%' }} size={7} value={currentItem} onChange={(e) => setCurrentItem(e.target.value)} multiple>
                                    {searchData.map((opt) => (
                                        <option key={opt.Name} value={opt.Name}>
                                            {opt.Name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                    </div>
                    {/* Additional form field */}
                </div>
            </div>
            <div className="modal-footer">
                <button className="btn btn-success" onClick={handleSave} disabled={!entity.UserName}>Save</button>
                <button className="btn btn-primary">Cancel</button>
            </div>
        </div>
    );
};
export default UserFormComponent;