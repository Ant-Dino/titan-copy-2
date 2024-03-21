import React, { useState } from 'react';
interface PsReportingProps {
    loggedTenant: string;
    togglingTenant: string;
    title: string;
    switchGridInfo: (info: string) => void;
    hasAccess: boolean;
    inValidateConfirm: () => void;
    search: () => void;
    loadRFOrder: () => void;
    searchbyReferenceNo: () => void;
}
const PsReporting: React.FC<PsReportingProps> = ({ loggedTenant, togglingTenant, title, switchGridInfo, hasAccess, inValidateConfirm, search, loadRFOrder, searchbyReferenceNo }) => {
    const [showdates, setShowdates] = useState<boolean>(false);
    const [showrefnum, setShowrefnum] = useState<boolean>(false);
    const [Fromdate, setFromdate] = useState<string>('');
    const [ThroughDate, setThroughDate] = useState<string>('');
    const [FilterSection, setFilterSection] = useState<string>('');
    const [FilterReferenceNoSection, setFilterReferenceNoSection] = useState<string>('');
    const [ReferenceNo, setReferenceNo] = useState<string>('');
    const [ValidateError, setValidateError] = useState<boolean>(false);
    const [Busy, setBusy] = useState<boolean>(false);
    const [BusyRef, setBusyRef] = useState<boolean>(false);
    const handleShowHide = (field: string) => {
        if (field === 'showdates') {
            setShowdates(!showdates);
        } else if (field === 'showrefnum') {
            setShowrefnum(!showrefnum);
        }
    };
    return (
        <div>
            <ul className="breadcrumb">
                <li className="subbreadcrumb">
                    {loggedTenant === 'LVIS' && (
                        <>
                            {togglingTenant === 'LVIS' && (
                                <div onClick={() => switchGridInfo('')}>Orders Summary</div>
                            )}
                            {togglingTenant === 'RF' && (
                                <div onClick={() => switchGridInfo('')}>Orders Summary</div>
                            )}
                            {togglingTenant === 'LVIS' && (
                                <div onClick={() => switchGridInfo('RF')}>RF Orders Summary</div>
                            )}
                            {togglingTenant === 'RF' && (
                                <div onClick={() => switchGridInfo('RF')}>RF Orders Summary</div>
                            )}
                        </>
                    )}
                    {loggedTenant !== 'LVIS' && (
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
                        <div className="form-group" style={{ display: 'inline-block' }}>
                            <i onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')} id="dt" className="fa fa-calendar" title="Search By Date Range" onClick={() => handleShowHide('showdates')}></i>|<i onMouseOver={(e) => (e.currentTarget.style.cursor = 'pointer')} className="fa fa-bars" title="Search By Reference Number" onClick={() => handleShowHide('showrefnum')}></i>
                        </div>
                        {showdates && (
                            <div className="form-group" name="OrderActivityForm" style={{ display: 'inline-block' }}>
                                <label>Start Date: </label>
                                <input disabled={Busy} value={Fromdate} onChange={(e) => setFromdate(e.target.value)} type="date" />
                                <label> End Date: </label>
                                <input disabled={Busy} value={ThroughDate} onChange={(e) => setThroughDate(e.target.value)} type="date" />
                                <label>Date Filter:</label>
                                <select onChange={(e) => setFilterSection(e.target.value)} value={FilterSection}>
                                    {/* options mapping */}
                                </select>

                                <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={() => { togglingTenant === 'RF' ? loadRFOrder() : search() }}>
                                    <i className="fa fa-search"></i>
                                </div>
                                <div style={{ display: 'inline-block', margin: '0 auto' }}>
                                    {Busy && <i className="fa fa-spinner fa-spin"></i>}
                                </div>
                                {ValidateError && (
                                    <span className="help-block with-errors">
                                        End date cannot be earlier than the Start date
                                    </span>
                                )}
                            </div>
                        )}
                        {showrefnum && (
                            <div className="form-group" style={{ display: 'inline-block' }}>
                                <label>Search By</label>
                                <select onChange={(e) => setFilterReferenceNoSection(e.target.value)} value={FilterReferenceNoSection}>
                                    {/* options mapping */}
                                </select>
                                <input className="input" disabled={BusyRef} type="text" required value={ReferenceNo} onChange={(e) => setReferenceNo(e.target.value)} />
                                <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={searchbyReferenceNo}>
                                    <i className="fa fa-search"></i>
                                </div>
                                <div style={{ display: 'inline-block', margin: '0 auto' }}>
                                    {BusyRef && <i className="fa fa-spinner fa-spin"></i>}
                                </div>
                            </div>
                        )}
                        <div style={{ display: 'inline-block', float: 'right', margin: '0 auto', cursor: 'pointer' }}>
                            {hasAccess && (
                                <button className="btn btn-sm" onClick={inValidateConfirm} disabled={!hasAccess}>Invalidate Order</button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    );
};
export default PsReporting;