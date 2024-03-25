import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { Modal, Button, Alert } from 'react-bootstrap'; 
import { DatePicker, Select } from 'antd'; 
import 'antd/dist/antd.css'; 
const psAuditingController = () => { 
const [activityRight, setActivityRight] = useState(''); 
const [canManageTEQ, setCanManageTEQ] = useState(false); 
const [canManageBEQ, setCanManageBEQ] = useState(false); 
const [hasAccess, setHasAccess] = useState(false); 
const [fromDate, setFromDate] = useState(new Date()); 
const [throughDate, setThroughDate] = useState(new Date()); 
const [filterSection, setFilterSection] = useState('7'); 
const [disableDate, setDisableDate] = useState(true); 
const [busy, setBusy] = useState(false); 
const [validateError, setValidateError] = useState(false); 
const [auditData, setAuditData] = useState([]); 
const [showModal, setShowModal] = useState(false); 
const [modalContent, setModalContent] = useState(null); 
useEffect(() => { 
// Simulate fetching user rights from an API on component mount. 
getUserRights(); 
}, []); 
const getUserRights = async () => { 
try { 
const userRights = await axios.get('/api/user/rights'); 
setActivityRight(userRights.data.activityRight); 
setCanManageTEQ(userRights.data.canManageTEQ); 
setCanManageBEQ(userRights.data.canManageBEQ); 
checkAccess(userRights.data.activityRight); 
} catch (error) { 
console.error('Error fetching user rights', error); 
} 
}; 
const checkAccess = (activityRight) => { 
if (activityRight === 'SuperAdmin' || activityRight === 'Admin') { 
setHasAccess(true); 
} else { 
setHasAccess(false); 
handleShowModal('Attention', 'You are not authorized to view this page.'); 
} 
}; 
const handleFromDateChange = (date, dateString) => { 
setFromDate(dateString); 
}; 
const handleThroughDateChange = (date, dateString) => { 
setThroughDate(dateString); 
}; 
const handleFilterSelection = (value) => { 
setFilterSection(value); 
value === '1' ? setDisableDate(false) : setDisableDate(true); 
}; 
const handleShowModal = (title, message) => { 
setModalContent({ title, message }); 
setShowModal(true); 
}; 
const handleCloseModal = () => setShowModal(false); 
const searchAuditDetails = async () => { 
setBusy(true); 
try { 
// Here you would typically call an API to fetch audit data based on filter 
const response = await axios.post('/api/audit/details', { filterSection, fromDate, throughDate }); 
setAuditData(response.data); 
} catch (error) { 
console.error('Error fetching audit details', error); 
} finally { 
setBusy(false); 
} 
}; 
return ( 
<div> 
{hasAccess ? ( 
<div> 
<div> 
<Select defaultValue={filterSection} style={{ width: 120 }} onChange={handleFilterSelection}> 
<Select.Option value="1">Custom</Select.Option> 
{/* Other options */} 
</Select> 
</div> 
{filterSection === '1' && ( 
<div> 
<DatePicker onChange={handleFromDateChange} /> 
<DatePicker onChange={handleThroughDateChange} /> 
</div> 
)} 
<Button onClick={searchAuditDetails}>{busy ? 'Loading...' : 'Search'}</Button> 
</div> 
) : ( 
<div>You do not have access to view this content.</div> 
)} 
{showModal && ( 
<Modal show={showModal} onHide={handleCloseModal}> 
<Modal.Header closeButton> 
<Modal.Title>{modalContent.title}</Modal.Title> 
</Modal.Header> 
<Modal.Body>{modalContent.message}</Modal.Body> 
<Modal.Footer> 
<Button variant="secondary" onClick={handleCloseModal}> 
Close 
</Button> 
</Modal.Footer> 
</Modal> 
)} 
{/* Display Audit Data */} 
</div> 
); 
}; 
export default psAuditingController; 