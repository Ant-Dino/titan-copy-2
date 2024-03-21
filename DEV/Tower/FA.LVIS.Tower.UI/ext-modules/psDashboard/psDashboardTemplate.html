import React, { useEffect, useState } from 'react';
interface DashboardProps {
    getCurrentUser: () => void;
    BEQSummaryList: any[];
    TEQSummaryList: any[];
    lineChartData: {
        data: any;
        labels: string[];
        colours: string[];
        datasetOverride: any;
        optionsMixed: any;
    };
}
const Dashboard: React.FC<DashboardProps> = ({ getCurrentUser, BEQSummaryList, TEQSummaryList, lineChartData }) => {
    useEffect(() => {
        getCurrentUser();
    }, [getCurrentUser]);
    return (
        <div>
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{ marginLeft: "0.5em" }}></i>
                        <h3 style={{ margin: "0px" }}> Business Exception Queue</h3>
                    </div>
                    <div className="dashboard-widget-content" style={{ overflowY: "auto" }}>
                        {!BEQSummaryList && (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                        <div className="shortcuts">
                            {BEQSummaryList.map((Exception, index) => (
                                <a key={index} href={`#/businessexception/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? "shortcut-danger" : "shortcut-info"}`}>
                                    <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? "shortcut-header" : "shortcut-headerSuccess"}`}>{Exception.ExceptionName}</span>
                                    <span className="value">{Exception.NoOfExceptions}</span><br />
                                    <span className="value">{Exception.DateTime}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="widget">
                    <div className="widget-header">
                        <i className="icon-signal"></i>
                        <h3 style={{ margin: "0px" }}>Business Exceptions</h3>
                    </div>
                    <div className="dashboard-widget-content">
                        {!lineChartData.data && (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                        <canvas id="beqline" className="chart-bar" height="280" width="950"></canvas>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{ marginLeft: "0.5em" }}></i>
                        <h3 style={{ margin: "0px" }}>Technical Exception Queue</h3>
                    </div>
                    <div className="dashboard-widget-content" style={{ overflowY: "auto" }}>
                        {!TEQSummaryList && (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                        <div className="shortcuts">
                            {TEQSummaryList.map((Exception, index) => (
                                <a key={index} href={`#/Exceptions/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? "shortcut-danger" : "shortcut-info"}`}>
                                    <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? "shortcut-header" : "shortcut-headerSuccess"}`}>{Exception.ExceptionName}</span>
                                    <span className="value">{Exception.NoOfExceptions}</span><br />
                                    <span className="value">{Exception.DateTime}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="widget">
                    <div className="widget-header">
                        <i className="icon-signal"></i>
                        <h3 style={{ margin: "0px" }}>Technical Exceptions</h3>
                    </div>
                    <div className="dashboard-widget-content">
                        {!lineChartData.data && (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                        <canvas id="teqline" className="chart-bar" height="280" width="950"></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;