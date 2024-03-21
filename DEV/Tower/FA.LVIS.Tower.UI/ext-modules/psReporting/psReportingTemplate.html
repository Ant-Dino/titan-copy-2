import React, { useState, useEffect } from 'react';
interface Props {
  title: string;
  loggedTenant: string;
  togglingTenant: string;
  showDates: boolean;
  showRefNum: boolean;
  DisableDate: boolean;
  Fromdate: string;
  ThroughDate: string;
  DisableReferenceNo: boolean;
  ReferenceNo: string;
  search: () => void;
  searchbyReferenceNo: () => void;
  switchGridInfo: (info: string) => void;
  loadRFOrder: () => void;
  invalidateConfirm: () => void;
  hasAccess: boolean;
  inValidBtnEnable: boolean;
  ValidateError: boolean;
  Busy: boolean;
  BusyRef: boolean;
  DateFilterSelection: Array<{value: string, title: string}>;
  FilterSection: string;
  changeSelect: (value: string) => void;
  ReferencenoFilterSelection: Array<{value: string, title: string}>;
  FilterReferenceNoSection: string;
  changerefSelect: (value: string) => void;
}
const ReportingComponent: React.FC<Props> = ({ title, loggedTenant, togglingTenant, showDates, showRefNum, DisableDate, Fromdate, ThroughDate, DisableReferenceNo, ReferenceNo, search, searchbyReferenceNo, switchGridInfo, loadRFOrder, invalidateConfirm, hasAccess, inValidBtnEnable, ValidateError, Busy, BusyRef, DateFilterSelection, FilterSection, changeSelect, ReferencenoFilterSelection, FilterReferenceNoSection, changerefSelect }) => {
  return (
    <div>
      <div className="ps-dashboard-header">
        <ul className="breadcrumb">
          <li className="subbreadcrumb">
            {loggedTenant === 'LVIS' ? (
              <div>
                {togglingTenant === 'LVIS' && <div onClick={() => switchGridInfo('')}>Orders Summary</div>}
                {togglingTenant === 'RF' && <div onClick={() => switchGridInfo('')}>Orders Summary</div>}
                {togglingTenant === 'LVIS' && <div onClick={() => switchGridInfo('RF')}>RF Orders Summary</div>}
                {togglingTenant === 'RF' && <div onClick={() => switchGridInfo('RF')}>RF Orders Summary</div>}
              </div>
            ) : (
              <div onClick={search}>Orders Summary</div>
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
              <div className="form-group" style={{ display: "inline-block" }}>
                <i onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')} onClick={() => showDates ? search() : null} className="fa fa-calendar" title="Search By Date Range"></i>
                |
                <i onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')} onClick={() => showRefNum ? searchbyReferenceNo() : null} className="fa fa-bars" title="Search By Reference Number"></i>
              </div>
              {showDates && <div className="form-group" style={{ display: "inline-block" }}>
                <label>Start Date: </label>
                <input disabled={DisableDate} value={Fromdate} type="date" />
                <label> End Date: </label>
                <input disabled={DisableDate} value={ThroughDate} type="date" />
                <label>Date Filter:</label>
                <select value={FilterSection} onChange={(e) => changeSelect(e.target.value)}>
                  {DateFilterSelection.map((obj, index) => (
                    <option key={index} value={obj.value}>{obj.title}</option>
                  ))}
                </select>

                <div style={{ display: "inline-block", marginLeft: "0.5em", cursor: "pointer" }} onClick={togglingTenant === 'RF' ? loadRFOrder : search}>
                  {!Busy && <i className="fa fa-search"></i>}
                  {Busy && <i className="fa fa-spinner fa-spin"></i>}
                </div>
                {ValidateError && <span className="help-block with-errors">End date cannot be earlier than the Start date</span>}
              </div>}
              {showRefNum && <div className="form-group" style={{ display: "inline-block" }}>
                <label>Search By</label>
                <select value={FilterReferenceNoSection} onChange={(e) => changerefSelect(e.target.value)}>
                  {ReferencenoFilterSelection.map((obj, index) => (
                    <option key={index} value={obj.value}>{obj.title}</option>
                  ))}
                </select>
                <input className="input" disabled={DisableReferenceNo} type="text" value={ReferenceNo} />
                <div style={{ display: "inline-block", marginLeft: "0.5em", cursor: "pointer" }} onClick={searchbyReferenceNo}>
                  {!BusyRef && <i className="fa fa-search"></i>}
                  {BusyRef && <i className="fa fa-spinner fa-spin"></i>}
                </div>
              </div>}
              {hasAccess && <button className="btn btn-sm" onClick={invalidateConfirm} disabled={inValidBtnEnable}>Invalidate Order</button>}
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ReportingComponent;