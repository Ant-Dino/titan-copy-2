import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
interface AuditingSummaryProps {
  fromDate: Date;
  throughDate: Date;
  disableDate: boolean;
  busy: boolean;
  validateError: boolean;
  dateFilterOptions: {value: string; title: string;}[];
  onDateChange: (dateType: 'from' | 'to', date: Date) => void;
  onFilterSectionChange: (filterSection: string) => void;
  onSearch: () => void;
  serviceGridData: any[];
}
const AuditingSummary: React.FC<AuditingSummaryProps> = ({
  fromDate,
  throughDate,
  disableDate,
  busy,
  validateError,
  dateFilterOptions,
  onDateChange,
  onFilterSectionChange,
  onSearch,
  serviceGridData,
}) => {
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          <div>Auditing Summary</div>
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Auditing Summary</li>
          </ul>

          {busy ? (
            <div style={{ display: "inline-block", margin: "0 auto" }}>
              <FontAwesomeIcon icon={faSpinner} spin />
            </div>
          ) : (
            <div style={{ display: "inline-block", marginLeft: "0.5em", cursor: "pointer" }} onClick={onSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          )}
          <div className="form-group">
            <label>Start Date: </label>
            <DatePicker
              selected={fromDate}
              onChange={(date:Date) => onDateChange('from', date)}
              dateFormat="MM/dd/yyyy"
              disabled={disableDate}
            />
            <label> End Date: </label>
            <DatePicker
              selected={throughDate}
              onChange={(date:Date) => onDateChange('to', date)}
              dateFormat="MM/dd/yyyy"
              disabled={disableDate}
            />
            <label>Date Filter:</label>
            <select onChange={(e) => onFilterSectionChange(e.target.value)} value={dateFilterOptions.find(opt => opt.title === from) || dateFilterOptions[0].value}>
              {dateFilterOptions.map(option => (
                <option key={option.value} value={option.value}>{option.title}</option>
              ))}
            </select>
            {validateError && (
              <span className="help-block with-errors">
                End date cannot be earlier than the Start date
              </span>
            )}
          </div>
          <Grid data={serviceGridData}>
            {/* Configure Grid Columns here as per your data */}
          </Grid>
        </div>
        <div className="col-lg-1"></div>
      </div>  
    </div>
  );
};
export default AuditingSummary;