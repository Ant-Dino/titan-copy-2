import React, { useState, useEffect } from 'react';

interface AuditingProps {
  fromDate: string;
  throughDate: string;
  disableDate: boolean;
  busy: boolean;
  validateError: boolean;
  dateFilterSelection: Array<{ value: string, title: string }>;
  changeSelect: (filterSection: string) => void;
  search: () => void;
}

const AuditingSummary: React.FC<AuditingProps> = ({ fromDate, throughDate, disableDate, busy, validateError, dateFilterSelection, changeSelect, search }) => {
  const [startDate, setStartDate] = useState(fromDate);
  const [endDate, setEndDate] = useState(throughDate);

  useEffect(() => {
    setStartDate(fromDate);
    setEndDate(throughDate);
  }, [fromDate, throughDate]);

  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          {/* Replace ps-sub-menu with appropriate React component or custom implementation */}
          {/* ps-sub-menu-item should also be replaced accordingly */}
          <div>Auditing Summary</div>
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Auditing Summary</li>
          </ul>

          {/* Inline notifications or growls can be replaced with a React toast/notification library */}
          <div></div> 

          <div className="form-group">
            <label>Start Date: </label>
            <input disabled={disableDate} value={startDate} onChange={e => setStartDate(e.target.value)} type="date" />
            <label> End Date: </label>
            <input disabled={disableDate} value={endDate} onChange={e => setEndDate(e.target.value)} type="date" />
            <label>Date Filter:</label>
            <select onChange={e => changeSelect(e.target.value)} value={dateFilterSelection.find(obj => obj.value === startDate)?.value}>
              {dateFilterSelection.map((obj, index) => (
                <option key={index} value={obj.value}>{obj.title}</option>
              ))}
            </select>

            {/* Conditional rendering based on busy state */}
            <div style={{display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer'}} onClick={() => !busy && search()}>
              {!busy ? <i className="fa fa-search"></i> : <i className="fa fa-spinner fa-spin"></i>}
            </div>
            {validateError && (
              <span className="help-block with-errors">
                End date cannot be earlier than the Start date
              </span>
            )}
          </div>

          {/* ui-grid could be replaced with a React table library like react-table or ag-Grid */}
          <div id="serviceGrid" className="ui-grid-selectable">
            {/* Grid content */}
          </div>

        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default AuditingSummary;