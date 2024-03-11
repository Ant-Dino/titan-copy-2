import React, { useEffect, useState } from 'react';

type Exception = {
    ExceptionName: string;
    NoOfExceptions: number;
    ThreshholdCount: number;
    DateTime: string;
};

const Dashboard: React.FC = () => {
    const [BEQSummaryList, setBEQSummaryList] = useState<Exception[]>([]);
    const [TEQSummaryList, setTEQSummaryList] = useState<Exception[]>([]);

    // Simulate getting current user and data loading
    useEffect(() => {
        // DashBoardCtrl.getCurrentUser(); Simulated with useEffect
        // Fetch data and set state here. Simulated data is used instead.
        const fetchedBEQSummaryList: Exception[] = [
            // Replace this with actual fetch call
        ];
        const fetchedTEQSummaryList: Exception[] = [
            // Replace this with actual fetch call
        ];
        setBEQSummaryList(fetchedBEQSummaryList);
        setTEQSummaryList(fetchedTEQSummaryList);
    }, []);

    return (
        <div>
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                        <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
                    </div>
                    <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                        {!BEQSummaryList && (
                            <>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </>
                        )}
                        <div className="shortcuts">
                            {BEQSummaryList.map((Exception) => (
                                <a
                                    key={Exception.ExceptionName}
                                    href={`#/businessexception/${Exception.ExceptionName}`}
                                    className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}
                                >
                                    <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
                                        {Exception.ExceptionName}
                                    </span>
                                    <span className="value">{Exception.NoOfExceptions}</span><br />
                                    <span className="value">{Exception.DateTime}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                        <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
                    </div>
                    <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                        {!TEQSummaryList && (
                            <>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </>
                        )}
                        <div className="shortcuts">
                            {TEQSummaryList.map((Exception) => (
                                <a
                                    key={Exception.ExceptionName}
                                    href={`#/Exceptions/${Exception.ExceptionName}`}
                                    className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}
                                >
                                    <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
                                        {Exception.ExceptionName}
                                    </span>
                                    <span className="value">{Exception.NoOfExceptions}</span><br />
                                    <span className="value">{Exception.DateTime}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;