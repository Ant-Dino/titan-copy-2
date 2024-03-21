import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
interface ExceptionSummary {
  ExceptionName: string;
  NoOfExceptions: number;
  DateTime: string;
  ThresholdCount: number;
}
interface ChartData {
  labels: string[];
  datasets: any[];
}
interface DashboardProps {
  fetchCurrentUser: () => void;
  BEQSummaryList?: ExceptionSummary[];
  TEQSummaryList?: ExceptionSummary[];
  BEQLineChartData?: ChartData;
  TEQLineChartData?: ChartData;
}
function Dashboard({
  fetchCurrentUser,
  BEQSummaryList,
  TEQSummaryList,
  BEQLineChartData,
  TEQLineChartData,
}: DashboardProps) {
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);
  return (
    <div>
      <div className="ps-dashboard-header">
        <br /><br />
        <div>
          <div className="col-md-6">
            <div className="widget widget-nopad">
              <div className="widget-header">
                <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
              </div>

              <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                {!BEQSummaryList && (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                )}

                <div className="shortcuts">
                  {BEQSummaryList && BEQSummaryList.slice(0, 20).map((Exception) => (
                    <Link to={`/businessexception/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                      <span className={Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
                      <span className="value">{Exception.NoOfExceptions}</span><br />
                      <span className="value">{Exception.DateTime}</span>
                    </Link>
                  ))}
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

              {!BEQLineChartData && (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              )}
              {BEQLineChartData && (
                <Bar data={BEQLineChartData} height={280} width={950} options={{ maintainAspectRatio: false }} />
              )}
            </div>
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
                {!TEQSummaryList && (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                )}

                <div className="shortcuts">
                  {TEQSummaryList && TEQSummaryList.slice(0, 100).map((Exception) => (
                    <Link to={`/Exceptions/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                      <span className={Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
                      <span className="value">{Exception.NoOfExceptions}</span><br />
                      <span className="value">{Exception.DateTime}</span>
                    </Link>
                  ))}
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

              {!TEQLineChartData && (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              )}
              {TEQLineChartData && (
                <Bar data={TEQLineChartData} height={280} width={950} options={{ maintainAspectRatio: false }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;