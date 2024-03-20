import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
Chart.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
interface Exception {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}

interface Props {
  getCurrentUser: () => void;
  BEQSummaryList: Exception[] | null;
  TEQSummaryList: Exception[] | null;
  BEQChartData: {
    data: number[];
    labels: string[];
  };
  TEQChartData: {
    data: number[];
    labels: string[];
  };
}

const Dashboard: React.FC<Props> = ({ getCurrentUser, BEQSummaryList, TEQSummaryList, BEQChartData, TEQChartData }) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const renderExceptionLink = (Exception: Exception, type: 'BE' | 'TE') => {
    const isDanger = Exception.NoOfExceptions >= Exception.ThreshholdCount;
    const linkPath = `/${type === 'BE' ? 'businessexception' : 'Exceptions'}/${Exception.ExceptionName}`;
    return (
      <Link to={linkPath} className={`shortcut ${isDanger ? 'shortcut-danger' : 'shortcut-info'}`}>
        <span className={`shortcut-header ${isDanger ? '' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
        <span className="value">{Exception.NoOfExceptions}</span><br />
        <span className="value">{Exception.DateTime}</span>
      </Link>
    );
  };

  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
            <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
          </div>

          <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>                 
            {!BEQSummaryList && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}

            <div className="shortcuts">
              {BEQSummaryList?.slice(0, 20).map((Exception) => renderExceptionLink(Exception, 'BE'))}
            </div>
            {/* /shortcuts */}
          </div>
          {/* /widget-content */}
        </div>
      </div>
      <div className="col-md-6">
        <div className="widget">
          <div className="widget-header">
            <i className="icon-signal"></i>
            <h3 style={{ margin: '0px' }}>Business Exceptions</h3>
          </div>
          {/* /widget-header */}
          <div className="dashboard-widget-content">
            {!BEQChartData.data && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            <Bar 
              data={{
                labels: BEQChartData.labels,
                datasets: [{
                  label: 'Business Exceptions',
                  data: BEQChartData.data,
                  backgroundColor: 'rgba(54, 162, 235, 0.6)',
                }],
              }}
            />
            {/* /bar-chart */}
          </div>
          {/* /widget-content */}
        </div>
      </div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
            <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
          </div>
          {/* /widget-header */}
          <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
            {!TEQSummaryList && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            <div className="shortcuts">
              {TEQSummaryList?.slice(0, 100).map((Exception) => renderExceptionLink(Exception, 'TE'))}
            </div>
          </div>
          {/* /widget-content */}
        </div>
      </div>
      <div className="col-md-6">
        <div className="widget">
          <div className="widget-header">
            <i className="icon-signal"></i>
            <h3 style={{ margin: '0px' }}>Technical Exceptions</h3>
          </div>
          {/* /widget-header */}
          <div className="dashboard-widget-content">
            {!TEQChartData.data && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            <Bar 
              data={{
                labels: TEQChartData.labels,
                datasets: [{
                  label: 'Technical Exceptions',
                  data: TEQChartData.data,
                  backgroundColor: 'rgba(255, 99, 132, 0.6)',
                }],
              }}
            />
            {/* /bar-chart */}
          </div>
          {/* /widget-content */}
        </div>
      </div>
    </div>
);
};

export default Dashboard;