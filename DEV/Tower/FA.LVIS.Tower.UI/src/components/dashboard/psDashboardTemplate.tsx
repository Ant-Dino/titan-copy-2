// Importing necessary libraries and dependencies
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import './Dashboard.css'; // Assuming a CSS file for styling similar to the one used in AngularJS code

// Types for the exceptions and their properties
type Exception = {
  ExceptionName: string;
  NoOfExceptions: number;
  DateTime: string;
  ThreshholdCount: number;
};

// DashboardComponent React Component
const DashboardComponent: React.FC = () => {
  const [beqSummaryList, setBeqSummaryList] = useState<Exception[]>([]);
  const [teqSummaryList, setTeqSummaryList] = useState<Exception[]>([]);
  
  // Simulate fetching data as was likely in the AngularJS controller's init method
  useEffect(() => {
    // Here you might fetch data from an API instead of using hardcoded values
    const fetchedBeqSummaryList: Exception[] = [/* fetch and fill data accordingly */];
    const fetchedTeqSummaryList: Exception[] = [/* fetch and fill data accordingly */];

    setBeqSummaryList(fetchedBeqSummaryList);
    setTeqSummaryList(fetchedTeqSummaryList);
  }, []);

  // Effect to setup chart, given it needs DOM element for canvas
  useEffect(() => {
    const beqLineChartCtx = document.getElementById('beqline') as HTMLCanvasElement;
    const teqLineChartCtx = document.getElementById('teqline') as HTMLCanvasElement;
    
    if (beqLineChartCtx && teqLineChartCtx) {
      // Initialize Chart.js line charts here
      // new Chart(beqLineChartCtx, config); // Provide appropriate config for the chart
      // new Chart(teqLineChartCtx, config); // Provide appropriate config for the chart
    }
  }, []);

  // Helper function to determine class based on exception count
  const getExceptionClass = (exception: Exception) => {
    return exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info';
  };

  // Business Exception Queue UI
  const renderBeqSummaryList = () => (
    beqSummaryList.length === 0 ?
    <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span>Loading...</span></div> :
    <div className="shortcuts">
      {beqSummaryList.map((exception, index) => (
        <a key={index} className={getExceptionClass(exception)}>
          <span>{exception.ExceptionName}</span>
          <span>{exception.NoOfExceptions}</span><br />
          <span>{exception.DateTime}</span>
        </a>
      ))}
    </div>
  );

  // Technical Exception Queue UI
  const renderTeqSummaryList = () => (
    teqSummaryList.length === 0 ?
    <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i><span>Loading...</span></div> :
    <div className="shortcuts">
      {teqSummaryList.map((exception, index) => (
        <a key={index} className={getExceptionClass(exception)}>
          <span>{exception.ExceptionName}</span>
          <span>{exception.NoOfExceptions}</span><br />
          <span>{exception.DateTime}</span>
        </a>
      ))}
    </div>
  );

  return (
    <div className="dashboard">
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header"><h3>Business Exception Queue</h3></div>
          <div className="dashboard-widget-content">
            {renderBeqSummaryList()}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="widget">
          <div className="widget-header"><h3>Business Exceptions</h3></div>
          <div className="dashboard-widget-content">
            <canvas id="beqline"></canvas>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header"><h3>Technical Exception Queue</h3></div>
          <div className="dashboard-widget-content">
            {renderTeqSummaryList()}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="widget">
          <div className="widget-header"><h3>Technical Exceptions</h3></div>
          <div className="dashboard-widget-content">
            <canvas id="teqline"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the DashboardComponent
export default DashboardComponent;