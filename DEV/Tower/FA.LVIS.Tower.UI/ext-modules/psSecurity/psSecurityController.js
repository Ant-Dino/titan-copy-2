import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal'; // This is a placeholder for wherever your Modal component is.

function PsSecurityComponent() {
    const [activityRight, setActivityRight] = useState('');
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasModifyAccess, setHasModifyAccess] = useState(false);
    const [tenant, setTenant] = useState('');
    const [serviceGridData, setServiceGridData] = useState([]);
    const [isBusy, setIsBusy] = useState(false);

    useEffect(() => {
        // Assuming you have another mechanism to get user info, replace with real implementation
        getUserInfo().then(userInfo => {
            const { ActivityRight, CanManageTEQ, CanManageBEQ } = userInfo;
            setActivityRight(ActivityRight);
            setCanManageTEQ(CanManageTEQ);
            setCanManageBEQ(CanManageBEQ);
            checkAccessRights(ActivityRight);
        });

        getTenant();
        getServiceGridData();
    }, []);
    
    function getUserInfo() {
        return axios.get('/Security/GetCurrentUser/')
            .then(response => response.data)
            .catch(error => console.error("Error fetching user info", error));
    }

    function checkAccessRights(activityRight) {
        if (!["Admin", "SuperAdmin"].includes(activityRight)) {
            setHasAccess(false);
            window.location.pathname = '/dashboard'; // Redirect to dashboard
        } else {
            setHasAccess(true);
            if (activityRight === "SuperAdmin") {
                setHasModifyAccess(true);
            }
        }
    }

    function getTenant() {
        axios.get('/Security/GetTenant')
            .then(response => {
                setTenant(response.data);
            });
    }

    function getServiceGridData() {
        if (activityRight) {
            axios.get('/Security/GetUsers')
                .then(response => {
                    setServiceGridData(response.data);
                });
        }
    }

    // Add more functions to handle API calls (add, remove, update rows) here.

    return (
        <div>
            {hasAccess ? (
                <div>
                    {/* Render your grid component with serviceGridData */}
                    <button onClick={() => console.log('Add row')}>Add Row</button>
                    <button onClick={() => console.log('Edit row')}>Edit Row</button>
                </div>
             ) : (
                <p>You do not have access to view this page.</p>
            )}
        </div>
    );
}

export default PsSecurityComponent;

// Note: This is a very basic example to guide you on how to convert AngularJS to React.
// Make sure to adapt the conversions based on specific project requirements and React best practices.