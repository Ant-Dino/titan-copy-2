import React, { useState, useEffect } from 'react';
import axios from 'axios';

const psAuditingComponent = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [throughDate, setThroughDate] = useState('');
  const [dateFilterSelection, setDateFilterSelection] = useState([
    { title: 'Custom', value: '1' },
    { title: 'Last 90 Days', value: '90' },
    { title: 'Last 60 Days', value: '60' },
    { title: 'Last 30 Days', value: '30' },
    { title: 'Last 15 Days', value: '15' },
    { title: 'Last 7 Days', value: '7' },
    { title: '24 hrs', value: '24' },
    { title: 'Today', value: '0' }
  ]);
  const [filterSection, setFilterSection] = useState('7');
  const [disableDate, setDisableDate] = useState(true);
  const [auditData, setAuditData] = useState([]);
  const [validateError, setValidateError] = useState(false);
  const [busy, setBusy] = useState(false);

  // Initial setup
  useEffect(() => {
    const initialDate = new Date().toDateString();
    setFromDate(initialDate);
    setThroughDate(initialDate);
    checkAccess();
    search(); // Perform an initial search
  }, []);

  // Check access rights and update state accordingly
  const checkAccess = async () => {
    try {
      const response = await axios.get('/path/to/access/rights');
      const rights = response.data?.activityright;
      if (['Admin', 'SuperAdmin'].includes(rights)) {
        setHasAccess(true);
      } else {
        setHasAccess(false);
        // Logic to redirect or inform the user if necessary
      }
    } catch (error) {
      console.error('Error fetching access rights', error);
      // Handle error
    }
  };

  const validateDate = () => {
    const startDate = new Date(fromDate);
    const endDate = new Date(throughDate);
    setValidateError(endDate < startDate);
  };

  const search = async () => {
    setBusy(true);

    try {
      let url = 'api/audit/GetAuditDetails/';
      let data = null;

      if (filterSection === "1") {
        validateDate();
        if (validateError) {
          alert("End date cannot be earlier than the Start date");
          setBusy(false);
          return;
        }
        data = { search: '', Fromdate: fromDate, ThroughDate: throughDate };
      } else {
        url += filterSection; // Append filter section to the URL
      }

      const response = await axios.post(url, data);
      setAuditData(response.data);
    } catch (error) {
      console.error('Error fetching audit data', error);
      // Handle error e.g., display a message
    } finally {
      setBusy(false);
    }
  };

  const changeSelect = (item) => {
    setDisableDate(item !== '1');
  };

  return (
    <div>
      <h2>Audit Log</h2>
      {/* UI components and logic to display audit logs */}
      {/* Ensure that you include necessary event handlers and state variables */}
    </div>
  );
};

export default psAuditingComponent;