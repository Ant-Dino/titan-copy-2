import React, { useState, useEffect } from 'react';
interface PsAuditingComponentProps {
  disableDate: boolean,
  fromDate: string,
  throughDate: string,
  filterSection: any,
  dateFilterSelection: Array<{ value: string, title: string }>,
  busy: boolean,
  validateError: boolean,
  search: () => void,
  changeSelect: (value: any) => void,
const PsAuditingComponent: React.FC<PsAuditingComponentProps> = ({
  disableDate,
  fromDate,
  throughDate,
  filterSection,
  dateFilterSelection,
  busy,
  validateError,
  search,
  changeSelect,
  const [startDate, setStartDate] = useState<string>(fromDate);
  const [endDate, setEndDate] = useState<string>(throughDate);
  useEffect(() => {
    setStartDate(fromDate);
    setEndDate(throughDate);
  }, [fromDate, throughDate]);
  return (
    <div className="ps-dashboard-header">
      <ul className="breadcrumb">
        <li className="subbreadcrumb">
          {/* No direct equivalent for ps-sub-menu and ps-sub-menu-item in React, you would typically build or use a third-party component */}
          <div>Auditing Summary</div>
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Auditing Summary</li>
          </ul>

          {/* Growl equivalent notifications can be handled using libraries like notistack */}

          <div className="form-group">
            <label>Start Date: </label>
            <input disabled={disableDate} value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" />
            <label> End Date: </label>
            <input disabled={disableDate} value={endDate} onChange={(e) => setEndDate(e.target.value)} type="date" />
            <label>Date Filter:</label>
            <select value={filterSection} onChange={(e) => changeSelect(e.target.value)}>
              {dateFilterSelection.map((obj, index) => (
                <option key={index} value={obj.value}>{obj.title}</option>
              ))}
            </select>

            <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={search}>
              {!busy && <i className="fa fa-search"></i>}
            </div>
            <div style={{ display: 'inline-block', margin: '0 auto' }}>
              {busy && <i className="fa fa-spinner fa-spin"></i>}
            </div>
            {validateError && <span className="help-block with-errors">
              End date cannot be earlier than the Start date
            </span>}
          </div>

          {/* ui-grid equivalent in React could be implemented using libraries like ag-Grid, react-table, or useTable hook for custom grids */}

        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};
export default PsAuditingComponent;