import React, { useState, useEffect } from 'react';
interface ReportingProps {
  loggedTenant: string;
  togglingTenant: string;
  title: string;
  hasAccess: boolean;
  invalidBtnEnable: boolean;
  fromdate: string;
  throughDate: string;
  disableDate: boolean;
  disableReferenceNo: boolean;
  referenceNo: string;
  busy: boolean;
  busyRef: boolean;
  validateError: boolean;
  dateFilterSelection: Array<{ value: string; title: string }>;
  referencenoFilterSelection: Array<{ value: string; title: string }>;
  switchGridInfo: (info: string) => void;
  search: () => void;
  loadRFOrder: () => void;
  inValidateConfirm: () => void;
  searchbyReferenceNo: () => void;
  changeSelect: (value: any) => void;
  changerefSelect: (value: any) => void;
  showdates: boolean;
  showrefnum: boolean;
}
const ReportingComponent: React.FC<ReportingProps> = (props) => {
  const [showDates, setShowDates] = useState(props.showdates);
  const [showRefNum, setShowRefNum] = useState(props.showrefnum);
  return (
    <div>
      <div className="ps-dashboard-header">
        <ul className="breadcrumb">
          <li className="subbreadcrumb">
            {props.loggedTenant === 'LVIS' ? (
              <>
                {props.togglingTenant === 'LVIS' && (
                  <button onClick={() => props.switchGridInfo('')}>Orders Summary</button>
                )}
                {props.togglingTenant === 'RF' && (
                  <button onClick={() => props.switchGridInfo('')}>Orders Summary</button>
                )}
                {props.togglingTenant === 'LVIS' && (
                  <button onClick={() => props.switchGridInfo('RF')}>RF Orders Summary</button>
                )}
                {props.togglingTenant === 'RF' && (
                  <button onClick={() => props.switchGridInfo('RF')}>RF Orders Summary</button>
                )}
              </>
            ) : (
              <button onClick={props.search}>Orders Summary</button>
            )}
          </li>
        </ul>
        <div className="wrapper">
          <div className="col-lg-10">
            <ul className="ps-page-title">
              <li>{props.title}</li>
            </ul>
            <div className="form-group">
              <div onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')} style={{ display: 'inline-block' }}>
                <i id="dt" onClick={() => setShowDates(!showDates)} className="fa fa-calendar" title="Search By Date Range"></i>|
                <i onClick={() => setShowRefNum(!showRefNum)} className="fa fa-bars" title="Search By Reference Number"></i>
              </div>
              {showDates && (
                <div className="form-group" style={{ display: 'inline-block' }}>
                  <label>Start Date: </label>
                  <input disabled={props.disableDate} value={props.fromdate} type="date" />
                  <label>End Date: </label>
                  <input disabled={props.disableDate} value={props.throughDate} type="date" />
                  <label>Date Filter:</label>
                  <select onChange={(e) => props.changeSelect(e.target.value)} value={props.dateFilterSelection.find(x => x.value)}>
                    {props.dateFilterSelection.map((obj, i) => (
                      <option key={i} value={obj.value}>{obj.title}</option>
                    ))}
                  </select>
                  <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }}>
                    {!props.busy ? (
                      <i className="fa fa-search" onClick={props.togglingTenant === 'RF' ? props.loadRFOrder : props.search}></i>
                    ) : (
                      <i className="fa fa-spinner fa-spin"></i>
                    )}
                  </div>
                  {props.validateError && (
                    <span className="help-block with-errors">End date cannot be earlier than the Start date</span>
                  )}
                </div>
              )}
              {showRefNum && (
                <div className="form-group" style={{ display: 'inline-block' }}>
                  <label>Search By</label>
                  <select onChange={(e) => props.changerefSelect(e.target.value)} value={props.referencenoFilterSelection.find(x => x.value)}>
                    {props.referencenoFilterSelection.map((obj, i) => (
                      <option key={i} value={obj.value}>{obj.title}</option>
                    ))}
                  </select>
                  <input className="input" disabled={props.disableReferenceNo} type="text" required value={props.referenceNo} />
                  <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }}>
                    {!props.busyRef ? (
                      <i className="fa fa-search" onClick={props.searchbyReferenceNo}></i>
                    ) : (
                      <i className="fa fa-spinner fa-spin"></i>
                    )}
                  </div>
                </div>
              )}
              {props.hasAccess && (
                <button className="btn btn-sm" onClick={props.inValidateConfirm} disabled={props.invalidBtnEnable}>Invalidate Order</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportingComponent;