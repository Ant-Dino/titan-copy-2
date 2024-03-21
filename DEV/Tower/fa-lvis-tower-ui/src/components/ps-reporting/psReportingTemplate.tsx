import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faBars, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

interface Props {
  loggedTenant: string;
  togglingTenant: string;
  title: string;
  hasAccess: boolean;
  inValidBtnEnable: boolean;
  dataFetching: Function;
  stateHandling?: Function;
  uiControlMethod?: Function;
}

export const ReportingComponent: React.FC<Props> = ({ loggedTenant, togglingTenant, title, hasAccess, inValidBtnEnable, dataFetching }) => {
  const [showDates, setShowDates] = useState(false);
  const [showRefNum, setShowRefNum] = useState(false);
  const [busy, setBusy] = useState(false);
  const [busyRef, setBusyRef] = useState(false);
  const [fromDate, setFromDate] = useState<string>('');
  const [throughDate, setThroughDate] = useState<string>('');
  const [filterSection, setFilterSection] = useState<string>('');
  const [filterReferenceNoSection, setFilterReferenceNoSection] = useState<string>('');
  const [referenceNo, setReferenceNo] = useState<string>('');
  const [validateError, setValidateError] = useState(false);

  const handleSearch = () => {
    dataFetching();
  };

  const ShowHide = (param: string) => {
    if (param === 'showdates') {
      setShowDates(!showDates);
    } else if (param === 'showrefnum') {
      setShowRefNum(!showRefNum);
    }
  };

  return (
    <div>
      <div className="ps-dashboard-header">
        <ul className="breadcrumb">
          <li className="subbreadcrumb">
            {loggedTenant === 'LVIS' && (
              <>
                {togglingTenant === 'LVIS' && <div>Orders Summary</div>}
                {togglingTenant === 'RF' && <div>Orders Summary</div>}
                {togglingTenant === 'LVIS' && <div>RF Orders Summary</div>}
                {togglingTenant === 'RF' && <div>RF Orders Summary</div>}
              </>
            )}
            {loggedTenant !== 'LVIS' && <div>Orders Summary</div>}
          </li>
        </ul>
        <div className="wrapper">
          <div className="col-lg-10">
            <ul className="ps-page-title">
              <li>{title}</li>
            </ul>
            <div className="form-group">
              <div className="form-group" style={{ display: 'inline-block' }}>
                <FontAwesomeIcon icon={faCalendar} style={{ cursor: 'pointer' }} title="Search By Date Range" onClick={() => ShowHide('showdates')} />|
                <FontAwesomeIcon icon={faBars} style={{ cursor: 'pointer' }} title="Search By Reference Number" onClick={() => ShowHide('showrefnum')} />
              </div>
              {showDates && (
                <div className="form-group" name="OrderActivityForm" style={{ display: 'inline-block' }}>
                  <label>Start Date: </label>
                  {/* Input for Start Date: Use third-party date picker library */}
                  <label> End Date: </label>
                  {/* Input for End Date: Use third-party date picker library */}
                  <label>Date Filter:</label>
                  {/* Date Filter Select: Use standard HTML select */}
                  <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={handleSearch}>
                    <FontAwesomeIcon icon={busy ? faSpinner : faSearch} spin={busy} />
                  </div>
                  <span className="help-block with-errors">
                    {validateError && 'End date cannot be earlier than the Start date'}
                  </span>
                </div>
              )}
              {showRefNum && (
                <div className="form-group" style={{ display: 'inline-block' }}>
                  <label>Search By</label>
                  {/* Reference No Filter Select: Use standard HTML select */}
                  <input className="input" disabled={busyRef} type="text" required value={referenceNo} />
                  <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={handleSearch}>
                    <FontAwesomeIcon icon={busyRef ? faSpinner : faSearch} spin={busyRef} />
                  </div>
                </div>
              )}
              <div style={{ display: 'inline-block', float: 'right', cursor: 'pointer' }}>
                {hasAccess && (
                  <button className="btn btn-sm" disabled={inValidBtnEnable}>Invalidate Order</button>
                )}
              </div>
            </div>
            {/* ServiceGrid: Use third-party grid or table component */}
          </div>
        </div>
      </div>
    </div>
  );
};