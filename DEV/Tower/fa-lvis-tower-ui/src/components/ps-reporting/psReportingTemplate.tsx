import React, { useState, useEffect } from 'react';

interface Props {
  loggedTenant: string;
  title: string;
  togglingTenant: string;
  switchGridInfo: (type: string) => void;
  search: () => void;
  showdates: boolean;
  showrefnum: boolean;
  Fromdate: string;
  ThroughDate: string;
  Disabledate: boolean;
  FilterSection: any; // Assuming it's a dynamic type
  DateFilterSelection: Array<{ value: string; title: string }>;
  ValidateError: boolean;
  loadRFOrder: () => void;
  Busy: boolean;
  FilterReferenceNoSection: any; // Assuming it's a dynamic type
  ReferencenoFilterSelection: Array<{ value: string; title: string }>;
  DisableReferenceNo: boolean;
  ReferenceNo: string;
  searchbyReferenceNo: () => void;
  BusyRef: boolean;
  hasAccess: boolean;
  inValidateConfirm: () => void;
  inValidBtnEnable: boolean;
}

const ReportingComponent: React.FC<Props> = ({
  loggedTenant,
  title,
  togglingTenant,
  switchGridInfo,
  search,
  showdates,
  showrefnum,
  Fromdate,
  ThroughDate,
  Disabledate,
  FilterSection,
  DateFilterSelection,
  ValidateError,
  loadRFOrder,
  Busy,
  FilterReferenceNoSection,
  ReferencenoFilterSelection,
  DisableReferenceNo,
  ReferenceNo,
  searchbyReferenceNo,
  BusyRef,
  hasAccess,
  inValidateConfirm,
  inValidBtnEnable,
}) => {
  return (
    <div>
      <div className="ps-dashboard-header">
        <ul className="breadcrumb">
          <li className="subbreadcrumb">
            {loggedTenant === 'LVIS' ? (
              <>
                {togglingTenant === 'LVIS' && (
                  <button onClick={() => switchGridInfo('')}>Orders Summary</button>
                )}
                {togglingTenant === 'RF' && (
                  <button onClick={() => switchGridInfo('')}>Orders Summary</button>
                )}
                {togglingTenant === 'LVIS' && (
                  <button onClick={() => switchGridInfo('RF')}>RF Orders Summary</button>
                )}
                {togglingTenant === 'RF' && (
                  <button onClick={() => switchGridInfo('RF')}>RF Orders Summary</button>
                )}
              </>
            ) : (
              <button onClick={() => search()}>Orders Summary</button>
            )}
          </li>
        </ul>
        <div className="wrapper">
          <div className="col-lg-10">
            <ul className="ps-page-title">
              <li>{title}</li>
            </ul>
            <div className="form-group">
              <div onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')} className="form-group" style={{ display: 'inline-block' }}>
                <i className="fa fa-calendar" title="Search By Date Range" onClick={() => setShowDates(!showdates)}></i>|<i className="fa fa-bars" title="Search By Reference Number" onClick={() => setShowRefNum(!showrefnum)}></i>
              </div>
              {showdates && (
                <div className="form-group" name="OrderActivityForm" style={{ display: 'inline-block' }}>
                  <label>Start Date: </label>
                  <input disabled={Disabledate} value={Fromdate} type="date" />
                  <label> End Date: </label>
                  <input disabled={Disabledate} value={ThroughDate} type="date" />
                  <label>Date Filter:</label>
                  <select value={FilterSection} onChange={(e) => changeSelect(e.target.value)}>
                    {DateFilterSelection.map((obj) => (
                      <option key={obj.value} value={obj.value}>
                        {obj.title}
                      </option>
                    ))}
                  </select>
                  <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={() => togglingTenant === 'RF' ? loadRFOrder() : search()}>
                    {!Busy && <i className="fa fa-search"></i>}
                    {Busy && <i className="fa fa-spinner fa-spin"></i>}
                  </div>
                  {ValidateError && <div>End date cannot be earlier than the Start date</div>}
                </div>
              )}
              {showrefnum && (
                <div className="form-group" style={{ display: 'inline-block' }}>
                  <label>Search By</label>
                  <select value={FilterReferenceNoSection} onChange={(e) => changerefSelect(e.target.value)}>
                    {ReferencenoFilterSelection.map((obj) => (
                      <option key={obj.value} value={obj.value}>
                        {obj.title}
                      </option>
                    ))}
                  </select>
                  <input className="input" disabled={DisableReferenceNo} type="text" required value={ReferenceNo} />
                  <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={!BusyRef ? searchbyReferenceNo : undefined}>
                    {!BusyRef && <i className="fa fa-search"></i>}
                    {BusyRef && <i className="fa fa-spinner fa-spin"></i>}
                  </div>
                </div>
              )}
              {hasAccess && (
                <div style={{ display: 'inline-block',float: 'right', margin: '0 auto', cursor: 'pointer' }}>
                  <button className="btn btn-sm" onClick={inValidateConfirm} disabled={inValidBtnEnable}>Invalidate Order</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportingComponent;