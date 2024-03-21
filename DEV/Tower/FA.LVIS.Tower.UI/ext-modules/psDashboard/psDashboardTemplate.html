import React, { useEffect, useState } from 'react';
import { ExceptionSummary, ExceptionDetails } from './models/ExceptionModels'; // Assume these are predefined TypeScript models for exception data
import { Chart } from 'react-chartjs-2';
type DashboardProps = {
    fetchCurrentUser: () => void;
    fetchBEQSummaryList: () => Promise<ExceptionSummary[]>;
    fetchTEQSummaryList: () => Promise<ExceptionSummary[]>;
    getBEQChartData: () => Promise<ExceptionDetails>;
    getTEQChartData: () => Promise<ExceptionDetails>;
};
const Dashboard: React.FC<DashboardProps> = ({ fetchCurrentUser, fetchBEQSummaryList, fetchTEQSummaryList, getBEQChartData, getTEQChartData }) => {
    const [beqSummaryList, setBeqSummaryList] = useState<ExceptionSummary[]>([]);
    const [teqSummaryList, setTeqSummaryList] = useState<ExceptionSummary[]>([]);
    const [beqChartData, setBeqChartData] = useState<ExceptionDetails | null>(null);
    const [teqChartData, setTeqChartData] = useState<ExceptionDetails | null>(null);
    
    useEffect(() => {
        fetchCurrentUser();
        fetchBEQSummaryList().then(setBeqSummaryList);
        fetchTEQSummaryList().then(setTeqSummaryList);
        getBEQChartData().then(setBeqChartData);
        getTEQChartData().then(setTeqChartData);
    }, [fetchCurrentUser, fetchBEQSummaryList, fetchTEQSummaryList, getBEQChartData, getTEQChartData]);
    const renderExceptionLink = (exception: ExceptionSummary) => {
        const thresholdClass = exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info';
        const headerClass = exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess';
        return (
            <a href={`#/Exceptions/${exception.ExceptionName}`} key={exception.ExceptionName} className={thresholdClass}>
                <span className={headerClass}>{exception.ExceptionName}</span>
                <span className="value">{exception.NoOfExceptions}</span><br />
                <span className="value">{exception.DateTime}</span>
            </a>
        );
    };
    const renderChart = (chartData: ExceptionDetails | null, chartId: string) => {
        if (!chartData) {
            return <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>;
        }
        
        const data = {
            labels: chartData.labels,
            datasets: [
                {
                    label: 'Exceptions',
                    data: chartData.data,
                    backgroundColor: chartData.backgroundColors,
                }
            ]
        };
        
        return <Chart type='bar' data={data} />;
    };
    return (
        <div>
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                        <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
                    </div>

                    <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                        {!beqSummaryList && (
                            <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                        )}

                        <div className="shortcuts">
                            {beqSummaryList.map(renderExceptionLink)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="widget">
                    <div className="widget-header">
                        <i className="icon-signal"></i>
                        <h3 style={{ margin: '0px' }}>Business Exceptions</h3>
                    </div>
                    <div className="dashboard-widget-content">
                        {renderChart(beqChartData, 'beqline')}
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
                        {!teqSummaryList && (
                            <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                        )}
                        <div className="shortcuts">
                            {teqSummaryList.map(renderExceptionLink)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="widget">
                    <div className="widget-header">
                        <i className="icon-signal"></i>
                        <h3 style={{ margin: '0px' }}>Technical Exceptions</h3>
                    </div>
                    <div className="dashboard-widget-content">
                        {renderChart(teqChartData, 'teqline')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;