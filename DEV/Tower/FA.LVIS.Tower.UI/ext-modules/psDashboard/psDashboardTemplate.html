import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
interface Exception {
  ExceptionName: string;
  NoOfExceptions: number;
  DateTime: string;
  ThreshholdCount: number;
}
interface DashboardProps {
  fetchBEQSummaryList: () => Promise<Exception[]>;
  fetchTEQSummaryList: () => Promise<Exception[]>;
  beqChartData: any; // Define more explicitly based on actual data structure
  teqChartData: any; // Define more explicitly based on actual data structure
}
const Dashboard: React.FC<DashboardProps> = ({ fetchBEQSummaryList, fetchTEQSummaryList, beqChartData, teqChartData }) => {
  const [BEQSummaryList, setBEQSummaryList] = useState<Exception[] | null>(null);
  const [TEQSummaryList, setTEQSummaryList] = useState<Exception[] | null>(null);
  useEffect(() => {
    fetchBEQSummaryList().then(data => {
      setBEQSummaryList(data);
    });
    fetchTEQSummaryList().then(data => {
      setTEQSummaryList(data);
    });
  }, [fetchBEQSummaryList, fetchTEQSummaryList]);
  useEffect(() => {
    if (beqChartData) {
      new Chart(document.getElementById('beqline') as HTMLCanvasElement, {
        type: 'bar',
        data: beqChartData.data,
        options: beqChartData.optionsMixed,
      });
    }
    if (teqChartData) {
      new Chart(document.getElementById('teqline') as HTMLCanvasElement, {
        type: 'bar',
        data: teqChartData.data,
        options: teqChartData.optionsMixed,
      });
    }
  }, [beqChartData, teqChartData]);
  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
            <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
          </div>
          <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
            {!BEQSummaryList ? (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div className="shortcuts">
                {BEQSummaryList.slice(0, 20).map((Exception) => (
                  <Link key={Exception.ExceptionName} to={`/businessexception/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                    <span className={`shortcut-header ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                    <span className="value">{Exception.NoOfExceptions}</span><br />
                    <span className="value">{Exception.DateTime}</span>
                  </Link>
                ))}
              </div>
            )}
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
            <canvas id="beqline" className="chart-bar" height="280" width="950"></canvas>
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
            {!TEQSummaryList ? (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div className="shortcuts">
                {TEQSummaryList.slice(0, 100).map((Exception) => (
                  <Link key={Exception.ExceptionName} to={`/Exceptions/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                    <span className={`shortcut-header ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                    <span className="value">{Exception.NoOfExceptions}</span><br />
                    <span className="value">{Exception.DateTime}</span>
                  </Link>
                ))}
              </div>
            )}
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
            <canvas id="teqline" className="chart-bar" height="280" width="950"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;