import React, { useState, useEffect } from 'react';
interface AuditingSummaryProps {
  fetchData: () => Promise<any>;
  onDateChange: (fromDate: Date, toDate: Date) => void;
  onFilterChange: (filterValue: string) => void;
  busy: boolean;
  validateError: boolean;
  disableDate: boolean;
  dateFilterOptions: { value: string; title: string }[];
}
const AuditingSummary: React.FC<AuditingSummaryProps> = ({
  fetchData,
  onDateChange,
  onFilterChange,
  busy,
  validateError,
  disableDate,
  dateFilterOptions,
}) => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [filterSection, setFilterSection] = useState<string>('');
  useEffect(() => {
    fetchData().then(() => {
      // Handle fetched data here
    });
  }, [fetchData]);
  const handleSearch = () => {
    if (fromDate && toDate) {
      onDateChange(fromDate, toDate);
    }
  };
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSection(event.target.value);
    onFilterChange(event.target.value);
  };
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          Auditing Summary
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Auditing Summary</li>
          </ul>
          <div className={`form-group ${validateError ? 'has-error' : ''}`}>
            <label>Start Date: </label>
            <input
              disabled={disableDate}
              type="date"
              value={fromDate ? fromDate.toISOString().substring(0, 10) : ''}
              onChange={e => setFromDate(new Date(e.target.value))}
            />
            <label> End Date: </label>
            <input
              disabled={disableDate}
              type="date"
              value={toDate ? toDate.toISOString().substring(0, 10) : ''}
              onChange={e => setToDate(new Date(e.target.value))}
            />
            <label>Date Filter:</label>
            <select
              value={filterSection}
              onChange={handleFilterChange}>
              {dateFilterOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>
            <div
              style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }}
              onClick={handleSearch}>
              {busy ? (
                <i className="fa fa-spinner fa-spin"></i>
              ) : (
                <i className="fa fa-search"></i>
              )}
            </div>
            {validateError && (
              <span className="help-block with-errors">
                End date cannot be earlier than the Start date
              </span>
            )}
          </div>
          {/* Placeholder for serviceGrid or any equivalent data display component */}
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};
export default AuditingSummary;