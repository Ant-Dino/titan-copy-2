import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';

type AuditingProps = {
  getData: () => Promise<any>,
  initialFilter?: any,
};
type DateFilterSection = {
  value: string,
  title: string,
};

const AuditingSummary: React.FC<AuditingProps> = ({ getData, initialFilter }) => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [throughDate, setThroughDate] = useState<Date | null>(null);
  const [busy, setBusy] = useState<boolean>(false);
  const [validateError, setValidateError] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [dateFilterSection, setDateFilterSection] = useState<DateFilterSection[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setBusy(true);
      try {
        const response = await getData();
        setData(response);
        // Assuming response includes date filter selection options
        setDateFilterSection(response.dateFilterOptions || []);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setBusy(false);
      }
    };
    fetchData();
  }, [getData]);

  const handleFromDateChange = (date: Date) => {
    setFromDate(date);
  };
  const handleThroughDateChange = (date: Date) => {
    setThroughDate(date);
  };
  const handleDateFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };
  const search = () => {
    // Example search function
    setBusy(true);
    setTimeout(() => {
      // Simulated search operation
      console.log('Search completed');
      setBusy(false);
    }, 2000);
  };

  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">Auditing Summary</li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <DatePicker
            selected={fromDate}
            onChange={handleFromDateChange}
            dateFormat="MM/dd/yyyy"
          />
          <DatePicker
            selected={throughDate}
            onChange={handleThroughDateChange}
            dateFormat="MM/dd/yyyy"
          />
          <select value={selectedFilter} onChange={handleDateFilterChange}>
            {dateFilterSection.map((option) => (
              <option key={option.value} value={option.value}>{option.title}</option>
            ))}
          </select>

          <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={!busy ? search : undefined}>
            <FontAwesomeIcon icon={!busy ? faSearch : faSpinner} spin={busy} />
          </div>
          <span className="help-block with-errors" style={{ display: validateError ? 'block' : 'none' }}>
            End date cannot be earlier than the Start date
          </span>
          <Grid
            data={process(data, initialFilter)}
            {...initialFilter}
          >
            <GridToolbar>
              Export to Excel
            </GridToolbar>
            {/* Define columns as needed */}
          </Grid>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default AuditingSummary;