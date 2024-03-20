import React, { useState, useEffect } from 'react';
interface AuditingProps {
    FromDate: Date;
    ThroughDate: Date;
    DateFilterSelection: Array<{ value: string; title: string }>;
    onDateChange: (fromDate: Date, toDate: Date) => void;
    onFilterChange: (filterSection: string) => void;
    search: () => void;
    busy: boolean;
    validateError: boolean;
}
const AuditingSummary: React.FC<AuditingProps> = ({
    FromDate,
    ThroughDate,
    DateFilterSelection,
    onDateChange,
    onFilterChange,
    search,
    busy,
    validateError
}) => {
    const [fromDate, setFromDate] = useState<Date>(FromDate);
    const [throughDate, setThroughDate] = useState<Date>(ThroughDate);
    const [filterSection, setFilterSection] = useState<string>('');
    const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const date = new Date(event.target.value);
        setFromDate(date);
        onDateChange(date, throughDate);
    };
    const handleThroughDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const date = new Date(event.target.value);
        setThroughDate(date);
        onDateChange(fromDate, date);
    };
    useEffect(() => {
        setFilterSection(DateFilterSelection.length > 0 ? DateFilterSelection[0].value : '');
    }, [DateFilterSelection]);
    return (
        <div className="ps-dashboard-header">
            <ul className="breadcrumb">
                <li className="subbreadcrumb">
                    {/* Assuming ps-sub-menu is a custom component, replaced with HTML list for simplicity */}
                    <ul>
                        <li>Auditing Summary</li>
                    </ul>
                </li>
            </ul>
            <div className="wrapper">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <ul className="ps-page-title">
                        <li>Auditing Summary</li>
                    </ul>
                    {/* Simplified growl notification, assuming it's a popup or alert */}
                    {validateError && <div className="alert alert-danger">End date cannot be earlier than the Start date</div>}
                    <div className="form-group">
                        <label>Start Date: </label>
                        <input disabled={busy} value={fromDate.toISOString().substring(0, 10)} onChange={handleFromDateChange} type="date"/>
                        <label> End Date: </label>
                        <input disabled={busy} value={throughDate.toISOString().substring(0, 10)} onChange={handleThroughDateChange} type="date" />
                        <label>Date Filter:</label>
                        <select disabled={busy} value={filterSection} onChange={(e) => { setFilterSection(e.target.value); onFilterChange(e.target.value); }}>
                            {DateFilterSelection.map((option, index) => (
                                <option key={index} value={option.value}>{option.title}</option>
                            ))}
                        </select>
                        <div style={{ display: 'inline-block', marginLeft: '0.5em', cursor: 'pointer' }} onClick={!busy ? search : undefined}>
                            {busy ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-search"></i>}
                        </div>
                    </div>
                    {/* Simplified data grid component, assuming it's a complex component for data presentation */}
                    <div id="serviceGrid" className="ui-grid-selectable">
                        {/* Data grid content */}
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    );
};
export default AuditingSummary;