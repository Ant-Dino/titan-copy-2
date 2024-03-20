import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationTriangle, faSignal } from '@fortawesome/free-solid-svg-icons';
import Chart from 'chart.js/auto';
interface DashboardProps {
  getCurrentUser: () => void;
  BEQSummaryList: any[];
  TEQSummaryList: any[];
  BEQLineChartData: { data: any; labels: any; Colours: any; datasetOverride: any; optionsMixed: any };
  TEQLineChartData: { data: any; labels: any; Colours: any; datasetOverride: any; optionsMixed: any };
const Dashboard: React.FC<DashboardProps> = ({ getCurrentUser, BEQSummaryList, TEQSummaryList, BEQLineChartData, TEQLineChartData }) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);
  return (
    <div>
      <div className="ps-dashboard-header">
        <br /><br />
        <div>
          <div className="col-md-6">
            <div className="widget widget-nopad">
              <div className="widget-header">
                <FontAwesomeIcon icon={faExclamationTriangle} style={{ marginLeft: '0.5em' }} />
                <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
              </div>
              <div className="dashboard-widget-content" style={{overflowY:'auto'}}>                 
                {!BEQSummaryList && (
                  <div>
                    <FontAwesomeIcon icon={faSpinner} className="fa-spin fa-3x fw" />
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                <div className="shortcuts">
                  {BEQSummaryList && BEQSummaryList.slice(0, 20).map((Exception) => (
                    <Link to={`/businessexception/${Exception.ExceptionName}`} key={Exception.ExceptionName}
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
          <div className="col-md-6">
            <div className="widget">
              <div className="widget-header">
                <FontAwesomeIcon icon={faSignal} />
                <h3 style={{ margin: '0px' }}>Business Exceptions</h3>
              </div>
              <div className="dashboard-widget-content">
                {!BEQLineChartData.data && (
                  <div>
                    <FontAwesomeIcon icon={faSpinner} className="fa-spin fa-3x fw" />
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                <canvas id="beqline" className="chart-bar"></canvas> 
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-md-6">
            <div className="widget widget-nopad">
              <div className="widget-header">
                <FontAwesomeIcon icon={faExclamationTriangle} style={{ marginLeft: '0.5em' }} />
                <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
              </div>
              <div className="dashboard-widget-content" style={{overflowY:'auto'}}>
                {!TEQSummaryList && (
                  <div>
                    <FontAwesomeIcon icon={faSpinner} className="fa-spin fa-3x fw" />
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                <div className="shortcuts">
                  {TEQSummaryList && TEQSummaryList.slice(0, 100).map((Exception) => (
                    <Link to={`/Exceptions/${Exception.ExceptionName}`} key={Exception.ExceptionName}
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
          <div className="col-md-6">
            <div className="widget">
              <div className="widget-header">
                <FontAwesomeIcon icon={faSignal} />
                <h3 style={{ margin: '0px' }}>Technical Exceptions</h3>
              </div>
              <div className="dashboard-widget-content">
                {!TEQLineChartData.data && (
                  <div>
                    <FontAwesomeIcon icon={faSpinner} className="fa-spin fa-3x fw" />
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                <canvas id="teqline" className="chart-bar"></canvas> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;