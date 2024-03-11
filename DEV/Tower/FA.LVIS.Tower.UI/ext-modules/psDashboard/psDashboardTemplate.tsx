// React component conversion from Angular template

import React, { useEffect, useState } from 'react';
import './YourStylesheet.css'; // Ensure you import your stylesheet to style the components as per the original template

interface Exception {
    ExceptionName: string;
    NoOfExceptions: number;
    DateTime: string;
    ThreshholdCount: number;
}

const Dashboard: React.FC = () => {
    const [BEQSummaryList, setBEQSummaryList] = useState<Exception[]>([]);
    const [TEQSummaryList, setTEQSummaryList] = useState<Exception[]>([]);

    useEffect(() => {
        // Mock fetching data logic
        // Replace with actual HTTP request logic to fetch data
        const fetchData = async () => {
            // Assume fetchBEQSummaryList & fetchTEQSummaryList are functions that fetch data
            const beqSummaryData: Exception[] = await fetchBEQSummaryList();
            const teqSummaryData: Exception[] = await fetchTEQSummaryList();
            setBEQSummaryList(beqSummaryData);
            setTEQSummaryList(teqSummaryData);
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="ps-dashboard-header">
                {/* Removed commented code for brevity */}
                <div>
                    <div className="col-md-6">
                        <div className="widget widget-nopad">
                            <div className="widget-header">
                                <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                                <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
                            </div>
                            <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                                {!BEQSummaryList.length && (
                                    <div>
                                        <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                )}
                                <div className="shortcuts">
                                    {BEQSummaryList.map((Exception, index) => (
                                        <a key={index} href={`#/businessexception/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                            <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
                                            <span className="value">{Exception.NoOfExceptions}</span><br />
                                            <span className="value">{Exception.DateTime}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* The chart component can be added here, after the respective logic and React component for chart is implemented */}
                    <div className="col-md-6">
                        {/* Placeholder for the chart based on your library of choice (e.g., Chart.js, Recharts) */}
                    </div>
                </div>
                <div>
                    <div className="col-md-6">
                        <div className="widget widget-nopad">
                            <div className="widget-header">
                                <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                                <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
                            </div>
                            <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                                {!TEQSummaryList.length && (
                                    <div>
                                        <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                )}
                                <div className="shortcuts">
                                    {TEQSummaryList.map((Exception, index) => (
                                        <a key={index} href={`#/Exceptions/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                            <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
                                            <span className="value">{Exception.NoOfExceptions}</span><br />
                                            <span className="value">{Exception.DateTime}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Similarly, placeholder for the second chart */}
                    <div className="col-md-6">
                        {/* Placeholder for the chart based on your library of choice */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

async function fetchBEQSummaryList(): Promise<Exception[]> {
    // Placeholder for API call to fetch BEQ Summary List
    return [];
}

async function fetchTEQSummaryList(): Promise<Exception[]> {
    // Placeholder for API call to fetch TEQ Summary List
    return [];
}