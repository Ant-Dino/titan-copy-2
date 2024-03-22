import React, { useState, useEffect } from 'react';

const useAccessRights = () => {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const checkAccessRights = () => {
      const userHasAccess = true;
      setHasAccess(userHasAccess);
    };
    checkAccessRights();
  }, []);

  return hasAccess;
};

const useAuditData = (initialFilter) => {
  const [auditData, setAuditData] = useState([]);
  const [dateFilter, setDateFilter] = useState(initialFilter);

  const fetchAuditData = (filter) => {
    console.log(`Fetching audit data with filter: ${filter}`);
    const exampleData = [
      { id: 1, user: 'User1', activityType: 'Login', date: '2023-04-01' },
      { id: 2, user: 'User2', activityType: 'Logout', date: '2023-04-02' }
    ];
    setAuditData(exampleData);
  };

  useEffect(() => {
    fetchAuditData(dateFilter);
  }, [dateFilter]);

  return { auditData, setDateFilter };
};

const useDateValidation = () => {
  const [fromDate, setFromDate] = useState('');
  const [throughDate, setThroughDate] = useState('');
  const [validateError, setValidateError] = useState(false);

  const validateDateRange = () => {
    const startDate = new Date(fromDate);
    const endDate = new Date(throughDate);
    if (endDate < startDate) {
      setValidateError(true);
    } else {
      setValidateError(false);
    }
  };

  return { fromDate, setFromDate, throughDate, setThroughDate, validateError, validateDateRange };
};

const AuditingComponent = () => {
  const hasAccess = useAccessRights();
  const { auditData, setDateFilter } = useAuditData('7');
  const { fromDate, setFromDate, throughDate, setThroughDate, validateError, validateDateRange } = useDateValidation();

  const handleDateFilterChange = (event) => {
    const newFilter = event.target.value;
    setDateFilter(newFilter);
  };

  // Render component
  return (
    <div>
      {hasAccess ? (
        <div>
          <h2>Audit Data</h2>
          <div>
            <label htmlFor="dateFilter">Date Filter:</label>
            <select id="dateFilter" value={dateFilter} onChange={handleDateFilterChange}>
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              {/* Add other options as needed */}
            </select>
          </div>
          <div>
            {auditData.map((data) => (
              <div key={data.id}>
                {data.user} - {data.activityType} - {data.date}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>You do not have access to view this page.</p>
      )}
    </div>
  );
};

export default AuditingComponent;