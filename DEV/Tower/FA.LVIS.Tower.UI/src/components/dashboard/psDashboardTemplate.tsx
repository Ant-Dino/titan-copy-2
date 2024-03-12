import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DashboardComponent: React.FC = () => {
  // Initial states for business and technical exception summaries
  const [businessExceptions, setBusinessExceptions] = useState<any[]>([]);
  const [technicalExceptions, setTechnicalExceptions] = useState<any[]>([]);
  const [businessChartData, setBusinessChartData] = useState<any>(null);
  const [technicalChartData, setTechnicalChartData] = useState<any>(null);

  useEffect(() => {
     // Simulate API Calls to get data, replace with actual API calls
    // Mock data for business exceptions
    const businessData = [
      { ExceptionName: 'Business Exception 1', NoOfExceptions: 5, DateTime: '2022-07-22', ThreshholdCount: 10 },
      // More mock data...
    ];
    // Mock data for technical exceptions
    const technicalData = [
      { ExceptionName: 'Technical Exception 1', NoOfExceptions: 2, DateTime: '2022-07-23', ThreshholdCount: 3 },
      // More mock data...
    ];
    setBusinessExceptions(businessData);
    setTechnicalExceptions(technicalData);

     // Mock chart data
    const businessChartMockData = {
      labels: businessData.map(data => data.ExceptionName),
      datasets: [{
        label: 'Business Exceptions',
        data: businessData.map(data => data.NoOfExceptions),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }],
    };
    const technicalChartMockData = {
      labels: technicalData.map(data => data.ExceptionName),
      datasets: [{
        label: 'Technical Exceptions',
        data: technicalData.map(data => data.NoOfExceptions),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }],
    };
    setBusinessChartData(businessChartMockData);
    setTechnicalChartData(technicalChartMockData);
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
            {!businessExceptions && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            <div className="shortcuts">
              {businessExceptions.map((exception) => (
                <a href={`/businessexception/${exception.ExceptionName}`} className={`shortcut ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`} key={exception.ExceptionName}>
                  <span className={`${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{exception.ExceptionName}</span>
                  <span className="value">{exception.NoOfExceptions}</span><br />
                  <span className="value">{exception.DateTime}</span>
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
            <h3 style={{ margin: '0px' }}>Business Exceptions</h3>
          </div>
          <div className="dashboard-widget-content">
            {!businessChartData && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {businessChartData && (
              <Bar data={businessChartData} width={950} height={280} />
            )}
          </div>
        </div>
      </div>
    // Repeat similar structures for technical exceptions and their charts
    </div>
  );
};

export default DashboardComponent;