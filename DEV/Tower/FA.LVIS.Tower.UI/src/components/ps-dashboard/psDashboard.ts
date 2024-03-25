import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DashboardComponent = () => {
const [currentUser, setCurrentUser] = useState(null);
const [activityRight, setActivityRight] = useState('');
const [canManageTEQ, setCanManageTEQ] = useState(false);
const [canManageBEQ, setCanManageBEQ] = useState(false);
const [BEQSummaryList, setBEQSummaryList] = useState([]);
const [TEQSummaryList, setTEQSummaryList] = useState([]);
useEffect(() => {
getCurrentUser();
// Replace intervals with useEffect cleanup if needed
// eslint-disable-next-line
}, []);
const getCurrentUser = () => {
UserInfo.getUser()
.then((response) => {
// You might have to handle broadcast equivalent if needed for other components or logic
setActivityRight(response.ActivityRight);
setCanManageTEQ(response.CanManageTEQ);
setCanManageBEQ(response.CanManageBEQ);
LoadBEQExceptions();
LoadTEQExceptions();
})
.catch((error) => {
console.error('Error fetching user', error);
});
};
const LoadBEQExceptions = () => {
axios.get('Dashboard/BEQException/')
.then(({ data }) => setBEQSummaryList(data))
.catch(error => console.error('Error loading BEQ Exceptions', error));
};
const LoadTEQExceptions = () => {
axios.get('Dashboard/TEQException/')
.then(({ data }) => setTEQSummaryList(data))
.catch(error => console.error('Error loading TEQ Exceptions', error));
};
// logic for access determination can be embedded or made into a utility function
const hasAccess = activityRight === 'Admin' || activityRight === 'SuperAdmin';
const hasBEQAccess = canManageBEQ;
const hasTEQAccess = canManageTEQ;
const isUser = activityRight === 'Admin' || activityRight === 'SuperAdmin' || activityRight === 'User';
return (
<div>
{/* Render your component UI here */}
{/* Access and privileges UI here */}
{/* Example */}
{hasAccess && <div>User has admin access.</div>}
{hasBEQAccess && <div>Can manage BEQ.</div>}
{hasTEQAccess && <div>Can manage TEQ.</div>}
</div>
);
};
export default DashboardComponent;