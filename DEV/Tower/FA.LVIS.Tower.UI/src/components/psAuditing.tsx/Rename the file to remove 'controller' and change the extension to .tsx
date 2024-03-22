import React, { useState, useEffect } from 'react';

const useAccessRights = () => {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const userRights = { activityRight: 'Admin' }; // This should be fetched from context or API
    if (userRights.activityRight === 'SuperAdmin' || userRights.activityRight === 'Admin') {
      setHasAccess(true);
    } else {
      setHasAccess(false);
      // Redirect or show unauthorized message here
    }
  }, []);

  return hasAccess;
};

const useAuditData = (dateFilter) => {
  const [auditData, setAuditData] = useState([]);

  useEffect(() => {
    // Placeholder for fetching audit data based on date filter
    console.log('Fetching audit data...');
    // Update state with fetched data here
    // setAuditData(fetchedData);
  }, [dateFilter]);

  return auditData;
};

const AuditingComponent = () => {
  const hasAccess = useAccessRights();
  const [dateFilter, setDateFilter] = useState('7'); // Default to 'Last 7 Days'
  const [fromDate, setFromDate] = useState('');
  const [throughDate, setThroughDate] = useState('');
  const [validateError, setValidateError] = useState(false);
  const auditData = useAuditData(dateFilter);

  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
    // Optionally fetch data based on new filter
  };

  const validateDate = () => {
    const startDate = new Date(fromDate);
    const endDate = new Date(throughDate);
    if (endDate < startDate) {
      setValidateError(true);
    } else {
      setValidateError(false);
    }
  };

  if (!hasAccess) {
    return <div>You do not have access to view this page.</div>;
  }

  return (
    <div>
      <h2>Audit Log</h2>
      {/* Date filter and other controls */}
      <div>
        <label htmlFor="dateFilter">Date Filter:</label>
        <select id="dateFilter" value={dateFilter} onChange={handleDateFilterChange}>
          <option value="7">Last 7 Days</option>
          <option value="15">Last 15 Days</option>
          {/* Other options */}
        </select>
      </div>
      {validateError && <div className="error">End date cannot be earlier than the start date.</div>}
      {/* Display audit data */}
      <div>
        {/* Map through auditData to display it */}
      </div>
    </div>
  );
};

export default AuditingComponent;