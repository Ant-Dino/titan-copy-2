import React, { useState, useEffect } from 'react';
const useAuditRights = () => {
  const [hasAccess, setHasAccess] = useState(false);
  useEffect(() => {
    const userRights = { activityright: 'Admin' };
    if (userRights.activityright === 'SuperAdmin' || userRights.activityright === 'Admin') {
      setHasAccess(true);
    } else {
      setHasAccess(false);
    }
  }, []);
  return hasAccess;
};
const useDateValidation = () => {
  const [fromDate, setFromDate] = useState('');
  const [throughDate, setThroughDate] = useState('');
  const [validateError, setValidateError] = useState(false);

  const validateDate = () => {
    const startDate = new Date(fromDate);
    const endDate = new Date(throughDate);
    if (endDate < startDate) {
      setValidateError(true);
    } else {
      setValidateError(false);
    }
  };

  return { fromDate, throughDate, setFromDate, setThroughDate, validateError, validateDate };
};
const useAuditData = (dateFilter, validateError) => {
  const [auditData, setAuditData] = useState([]);

  const fetchAuditData = () => {
    if (validateError) {
      // Show error message
      return;
    }
    // Ideally fetch audit data based on selected filters here
  };

  useEffect(() => {
    fetchAuditData();
  }, [dateFilter, validateError]);

  return auditData;
};
const AuditingComponent = () => {
  const [dateFilter, setDateFilter] = useState('7');

  const hasAccess = useAuditRights();
  const { fromDate, throughDate, setFromDate, setThroughDate, validateError, validateDate } = useDateValidation();
  const auditData = useAuditData(dateFilter, validateError);

  const changeDateFilter = (event) => {
    setDateFilter(event.target.value);
    if (event.target.value === '1') {
      // Custom date range selected, enable date inputs
    } else {
      // Predefined date range selected, disable date inputs
    }
  };

  if (!hasAccess) {
    return <div>You do not have access to view this page.</div>;
  }

  return (
    <div>
      <h2>Audit Log</h2>
      <div>
        <select value={dateFilter} onChange={changeDateFilter}>
          <option value="1">Custom</option>
          <option value="90">Last 90 Days</option>
          <option value="60">Last 60 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="15">Last 15 Days</option>
          <option value="7">Last 7 Days</option>
          <option value="24">24 hrs</option>
          <option value="0">Today</option>
        </select>
        {/* Date inputs for custom range */}
      </div>
      {/* Display audit data */}
    </div>
  );
};

export default AuditingComponent;