// Import Statements
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios'; // Assuming data fetching from an API

// Types for the data that will be fetched and displayed
type ExceptionSummary = {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
};

// Main component
const Dashboard: React.FC = () => {
  const [BEQSummaryList, setBEQSummaryList] = useState<ExceptionSummary[]>([]);
  const [TEQSummaryList, setTEQSummaryList] = useState<ExceptionSummary[]>([]);

  // Fetch data for Business Exception Queue Summary List
  useEffect(() => {
    // Replace 'url-to-fetch-BEQSummaryList' with your actual endpoint
    axios.get<ExceptionSummary[]>('url-to-fetch-BEQSummaryList').then((response) => {
      setBEQSummaryList(response.data);
    });
  // Dependency array left empty to run only once on component mount
  }, []);

  // Fetch data for Technical Exception Queue Summary List
  useEffect(() => {
    // Replace 'url-to-fetch-TEQSummaryList' with your actual endpoint
    axios.get<ExceptionSummary[]>('url-to-fetch-TEQSummaryList').then((response) => {
      setTEQSummaryList(response.data);
    });
  // Dependency array left empty to run only once on component mount
  }, []);

  // Placeholder for chart initialization - Actual implementation depends on the specific use case
  useEffect(() => {
    // Initialize your Chart.js charts here
  }, []);

  return (
            <div>
              <div className="col-md-6">
                <div className="widget widget-nopad">
                  <div className="widget-header">
                    <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
                    <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
                  </div>
                  <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
                    {BEQSummaryList.length === 0 && (
                      <div>
                        <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                    <div className="shortcuts">
                      {BEQSummaryList.map((Exception) => (
                        <a
                          key={Exception.ExceptionName}
                          className={`shortcut ${
                            Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'
                          }`}
                        >
                          <span
                            className={`${
                              Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'
                            }`}
                          >
                            {Exception.ExceptionName}
                          </span>
                          <span className="value">{Exception.NoOfExceptions}</span>
                          <br />
                          <span className="value">{Exception.DateTime}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Placeholder for the second widget, including chart setup */}
              <div className="col-md-6">
                {/* Implement widget similar to the first, likely with a chart setup using Chart.js */}
              </div>
              {/* Repeat the structure for Technical Exception Queue similar to Business Exception Queue */}
            </div>
          );
};

// Export the Dashboard component
export default Dashboard;