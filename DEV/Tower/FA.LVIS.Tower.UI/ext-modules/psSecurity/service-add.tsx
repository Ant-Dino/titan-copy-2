import React, { useState, useEffect } from 'react';
interface Props {
    fetchData: () => Promise<any[]>;
    saveData: (data: any) => Promise<any>;
    closeHandler: () => void;
    manageTenantAccess: boolean;
    hasExceptionManageAccess: boolean;
    hasAccessRightAccess: boolean;
}
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
export const AddUserForm: React.FC<Props> = ({
    fetchData,
    saveData,
    closeHandler,
    manageTenantAccess,
    hasExceptionManageAccess,
    hasAccessRightAccess
}) => {
    const [userData, setUserData] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isSaving, setIsSaving] = useState(false);
    useEffect(() => {
        fetchData().then(setUserData);
    }, [fetchData]);
    const handleSave = async () => {
        if (selectedUser) {
            setIsSaving(true);
            try {
                await saveData(selectedUser);
                closeHandler();
            } catch (error) {
                console.error('Failed to save user', error);
            } finally {
                setIsSaving(false);
            }
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: keyof User) => {
        setSelectedUser((prev) => ({
            ...prev!,
            [field]: e.target.value
        }));
    };
    return (
        <div>
            <div className="widget-header">
                <button type="button" className="close" aria-hidden="true" onClick={closeHandler}>&times;</button>
                <i className="fa fa-user-plus"></i>
                <h3>Add New User</h3>
            </div>
            <div className="widget-content">
                <div className="row">
                    <div className="col-lg-5">
                        {/* Content for user search and select goes here */}
                    </div>
                    <div className="col-lg-7">
                        <form className="serviceForm">
                            <div className="well well-sm">
                                <b> User Profile</b>
                            </div>
                            <div className="form-group">
                                <label>User Id</label>
                                <input className="input" type="text" disabled value={selectedUser?.UserName || ''} />
                            </div>
                            {/* More form controls and inputs here */}
                            <div className="modal-footer">
                                <button className="btn btn-success" onClick={handleSave} disabled={isSaving}>Save</button>
                                <button className="btn btn-primary" onClick={closeHandler}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};