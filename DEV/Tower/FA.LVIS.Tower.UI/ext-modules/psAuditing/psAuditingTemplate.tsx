import React, { useState } from 'react';
type AuditingSummaryProps = {
  fromdate: string,
  throughDate: string,
  disableDate: boolean,
  filterSection: any,
  dateFilterSelection: Array<{value: any, title: string}>,
  busy: boolean,
  validateError: boolean,
  search: () => void,
  changeSelect: (value: any) => void,
const AuditingSummary = ({
  fromdate, 
  throughDate, 
  disableDate, 
  filterSection, 
  dateFilterSelection, 
  busy, 
  validateError, 
  search, 
  changeSelect,
  const [startDate, setStartDate] = useState(fromdate);
  const [endDate, setEndDate] = useState(throughDate);
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
           {/* React equivalent of ps-sub-menu and ps-sub-menu-item, possibly a React component */}
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Auditing Summary</li>
          </ul>
          
          {/* Growl equivalent in React TBD */}
          
          <div className="form-group">
            <label>Start Date: </label>
            <input disabled={disableDate} value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" />
            <label> End Date: </label>
            <input disabled={disableDate} name="input" value={endDate} onChange={(e) => setEndDate(e.target.value)} type="date" />
            <label>Date Filter:</label>
            <select value={filterSection} onChange={(e) => changeSelect(e.target.value)}>
              {dateFilterSelection.map(option => (
                <option key={option.value} value={option.value}>{option.title}</option>
              ))}
            </select>

            <div style={{display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer'}} onClick={!busy ? search : undefined}>
              {busy ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-search"></i>}
            </div>
            {validateError && 
              <span className="help-block with-errors">
                End date cannot be earlier than the Start date
              </span>
            }
          </div>
          
          {/* Grid equivalent in React TBD */}
          
        </div>
        <div className="col-lg-1"></div>
      </div>        
    </div>
  );
};
export default AuditingSummary;