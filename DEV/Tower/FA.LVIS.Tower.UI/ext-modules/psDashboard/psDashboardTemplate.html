import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'react-chartjs-2';

interface Exception {
    ExceptionName: string;
    NoOfExceptions: number;
    DateTime: string;
    ThreshholdCount: number;
}

interface Props {
    fetchBEQSummaryList: () => Promise<Exception[]>;
    fetchTEQSummaryList: () => Promise<Exception[]>;
    lineChartData: any; // Simplified for this example, define according to data structure
}

const Dashboard = ({ fetchBEQSummaryList, fetchTEQSummaryList, lineChartData }: Props) => {
    const [BEQSummaryList, setBEQSummaryList] = useState<Exception[] | null>(null);
    const [TEQSummaryList, setTEQSummaryList] = useState<Exception[] | null>(null);

    useEffect(() => {
        fetchBEQSummaryList().then(data => setBEQSummaryList(data));
        fetchTEQSummaryList().then(data => setTEQSummaryList(data));
    }, [fetchBEQSummaryList, fetchTEQSummaryList]);

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
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                        <div className="shortcuts">
                            {BEQSummaryList?.map((Exception, index) => (
                                <Link to={`/businessexception/${Exception.ExceptionName}`} key={index}
                                      className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                    <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>
                                        {Exception.ExceptionName}
                                    </span>
                                    <span className="value">{Exception.NoOfExceptions}</span><br />
                                    <span className="value">{Exception.DateTime}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Other widgets */}
            <div className="col-md-6">
                <div className="widget">
                    <div className="widget-header">
                        <i className="icon-signal"></i>
                        <h3 style={{ margin: '0px' }}>Business Exceptions</h3>
                    </div>
                    <div className="dashboard-widget-content">
                        {!lineChartData && (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                        <Chart
                            type='bar'
                            data={lineChartData.data}
                            options={lineChartData.options}
                        />
                    </div>
                </div>
            </div>
            {/* Simplified for brevity. Add similar structure for TEQSummaryList and other widgets as needed. */}
        </div>
    );
};

export default Dashboard;