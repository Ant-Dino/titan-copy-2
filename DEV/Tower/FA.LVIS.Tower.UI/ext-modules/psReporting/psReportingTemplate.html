import React, { useState } from 'react';
type Props = {
  loggedTenant: string;
  togglingTenant: string;
  title: string;
  dateFilterSelection: Array<{ value: string; title: string }>;
  referencenoFilterSelection: Array<{ value: string; title: string }>;
  hasAccess: boolean;
  inValidBtnEnable: boolean;
  onSwitchGridInfo: (type: string) => void;
  onSearch: () => void;
  onLoadRFOrder: () => void;
  onSearchByReferenceNo: () => void;
  onInValidateConfirm: () => void;
};
const DashboardHeader: React.FC<Props> = ({
  loggedTenant,
  togglingTenant,
  title,
  dateFilterSelection,
  referencenoFilterSelection,
  hasAccess,
  inValidBtnEnable,
  onSwitchGridInfo,
  onSearch,
  onLoadRFOrder,
  onSearchByReferenceNo,
  onInValidateConfirm,
}) => {
const [showDates, setShowDates] = useState(false);
const [showRefNum, setShowRefNum] = useState(false);
const [fromDate, setFromDate] = useState('');
const [throughDate, setThroughDate] = useState('');
const [filterSection, setFilterSection] = useState('');
const [referenceNo, setReferenceNo] = useState('');
const [filterReferenceNoSection, setFilterReferenceNoSection] = useState('');
return (
  <div className="ps-dashboard-header">
    <ul className="breadcrumb">
      <li className="subbreadcrumb">
        {loggedTenant === 'LVIS' ? (
           <React.Fragment>
             {togglingTenant === 'LVIS' && <div onClick={() => onSwitchGridInfo('')}>Orders Summary</div>}
             {togglingTenant === 'RF' && <div onClick={() => onSwitchGridInfo('')}>Orders Summary</div>}
             {togglingTenant === 'LVIS' && <div onClick={() => onSwitchGridInfo('RF')}>RF Orders Summary</div>}
             {togglingTenant === 'RF' && <div onClick={() => onSwitchGridInfo('RF')}>RF Orders Summary</div>}
           </React.Fragment>
        ) : (
          <div onClick={onSearch}>Orders Summary</div>
        )}
      </li>
    </ul>
    <div className="wrapper">
      <div className="col-lg-1"></div>
      <div className="col-lg-10">
        <ul className="ps-page-title">
          <li>{title}</li>
        </ul>
        <div className="form-group">
          <div className="form-group" style={{ display: 'inline-block' }}>
            <i style={{ cursor: 'pointer' }} className="fa fa-calendar" title="Search By Date Range" onClick={() => setShowDates(!showDates)}></i>
            |<i style={{ cursor: 'pointer' }} className="fa fa-bars" title="Search By Reference Number" onClick={() => setShowRefNum(!showRefNum)}></i>
          </div>
          {showDates && (
            <div className="form-group" style={{ display: 'inline-block' }}>
              <label>Start Date: </label>
              <input disabled={!hasAccess} value={fromDate} onChange={e => setFromDate(e.target.value)} type="date" />
              <label> End Date: </label>
              <input disabled={!hasAccess} value={throughDate} onChange={e => setThroughDate(e.target.value)} type="date" />
              <label>Date Filter:</label>
              <select value={filterSection} onChange={e => setFilterSection(e.target.value)}>
                {dateFilterSelection.map(option => (
                  <option key={option.value} value={option.value}>{option.title}</option>
                ))}
              </select>
              <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={togglingTenant === 'RF' ? onLoadRFOrder : onSearch}>
                <i className="fa fa-search"></i>
              </div>
            </div>
          )}
          {showRefNum && (
            <div className="form-group" style={{ display: 'inline-block' }}>
              <label>Search By</label>
              <select value={filterReferenceNoSection} onChange={e => setFilterReferenceNoSection(e.target.value)}>
                {referencenoFilterSelection.map(option => (
                  <option key={option.value} value={option.value}>{option.title}</option>
                ))}
              </select>
              <input className="input" disabled={!hasAccess} type="text" required value={referenceNo} onChange={e => setReferenceNo(e.target.value)} />
              <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={onSearchByReferenceNo}>
                <i className="fa fa-search"></i>
              </div>
            </div>
          )}
          <div style={{ display: 'inline-block', float: 'right', cursor: 'pointer' }}>
            <button className="btn btn-sm" disabled={inValidBtnEnable} onClick={onInValidateConfirm}>Invalidate Order</button>
          </div>
        </div>
      </div>
      <div className="col-lg-1"></div>
    </div>
  </div>
);
};
export default DashboardHeader;