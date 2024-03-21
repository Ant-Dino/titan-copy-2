import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Spinner, Button } from 'react-bootstrap'; // Assuming usage of React-Bootstrap for UI components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select'; // For the drop-down menu, assuming the use of the react-select
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

type Props = {
  fromDate: Date;
  throughDate: Date;
  dateFilterSelection: Array<{ value: string; title: string }>;
  onDateChange: (from: Date, to: Date) => void;
  onFilterChange: (value: string) => void;
  search: () => void;
  disableDate: boolean;
  busy: boolean;
  validateError: boolean;
  gridData: any[];
  gridColumns: any;
  gridOptions: any;
};

const AuditingSummaryComponent: React.FC<Props> = ({
  fromDate,
  throughDate,
  dateFilterSelection,
  onDateChange,
  onFilterChange,
  search,
  disableDate,
  busy,
  validateError,
  gridData,
  gridColumns,
  gridOptions,
}) => {
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
          {/* Placeholder for SubMenu */}
        </li>
      </ul>
      <div className="wrapper">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul className="ps-page-title">
            <li>Auditing Summary</li>
          </ul>

          {/* Inline messages or loaders */}
          <div className="form-group">
            <label>Start Date: </label>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              dateFormat="MM/dd/yyyy"
              disabled={disableDate}
            />
            <label> End Date: </label>
            <DatePicker
              selected={endDate}
              onChange={date => setEndDate(date)}
              dateFormat="MM/dd/yyyy"
              minDate={startDate}
              disabled={disableDate}
            />
            <label>Date Filter:</label>
            <Select
              options={dateFilterSelection.map(option => ({ value: option.value, label: option.title }))}
              onChange={option => onFilterChange(option.value)}
            />

            <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={() => search()}>
              {!busy ? (
                <FontAwesomeIcon icon={faSearch} />
              ) : (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
            </div>
            {validateError && (
              <div>
                <span className="help-block with-errors">
                  End date cannot be earlier than the Start date
                </span>
              </div>
            )}
          </div>

          {/* Data Grid */}
          <div id="serviceGrid">
            <BootstrapTable
              keyField='id'
              data={gridData}
              columns={gridColumns}
              pagination={paginationFactory()}
              {...gridOptions}
            />
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default AuditingSummaryComponent;