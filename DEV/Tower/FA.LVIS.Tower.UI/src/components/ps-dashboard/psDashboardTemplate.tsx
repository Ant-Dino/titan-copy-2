import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
interface Exception {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
interface Props {
  fetchCurrentUser: () => Promise<void>;
  BEQSummaryList?: Exception[];
  TEQSummaryList?: Exception[];
  fetchBEQData: () => Promise<void>;
  fetchTEQData: () => Promise<void>;
const Dashboard: React.FC<Props> = ({ fetchCurrentUser, BEQSummaryList, TEQSummaryList, fetchBEQData, fetchTEQData }) => {
useEffect(() => {
  fetchCurrentUser();
  fetchBEQData();
  fetchTEQData();
}, [fetchCurrentUser, fetchBEQData, fetchTEQData]);
  return (
    <div>
      <div className="ps-dashboard-header">
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
                {BEQSummaryList?.slice(0, 20).map((Exception) => (
                  <Link to={`/businessexception/${Exception.ExceptionName}`} key={Exception.ExceptionName}
                    className={`shortcut ${
                      Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'
                    }`}>
                    <span
                      className={`shortcut-header ${
                        Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'
                      }`}
                    >
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
      </div>
    </div>
  );
};
export default Dashboard;