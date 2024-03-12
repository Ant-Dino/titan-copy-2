// Importing React and necessary hooks
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './App.css'; // Assuming a CSS file to style components similarly to the AngularJS app

// DashboardWidget Component
interface ExceptionItem {
  ExceptionName: string;
  NoOfExceptions: number;
  ThresholdCount: number;
  DateTime: string;
}

interface DashboardWidgetProps {
  title: string;
  exceptionList: ExceptionItem[];
}

// Functional Component for displaying either BEQ or TEQ
const DashboardWidget: React.FC<DashboardWidgetProps> = ({ title, exceptionList }) => {
  return (
    <div className="col-md-6">
      <div className="widget widget-nopad">
        <div className="widget-header">
          <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
          <h3 style={{ margin: '0px' }}>{title}</h3>
        </div>
        <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
          {exceptionList.length === 0 ? (
            <div>
              <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="shortcuts">
              {exceptionList.map((Exception, index) => (
                <a key={index} href={`#/${title}/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                  <span className={Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
                  <span className="value">{Exception.NoOfExceptions}</span><br />
                  <span className="value">{Exception.DateTime}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// LineChart Component
interface LineChartProps {
  chartId: string;
  data: any; // Specify a more detailed type according to the Chart.js data structure you're using
}

const LineChart: React.FC<LineChartProps> = ({ chartId, data }) => {
  useEffect(() => {
    const ctx = document.getElementById(chartId) as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar', // or 'line', depending on the desired chart type
      data: data,
};

// App Component to wrap everything together
const App: React.FC = () => {
  const [BEQList, setBEQList] = useState<ExceptionItem[]>([]);
  const [TEQList, setTEQList] = useState<ExceptionItem[]>([]);
  const [chartData, setChartData] = useState<any>(null); // Initialize chart data state

  useEffect(() => {
    // Fetch BEQ, TEQ, and chart data from an API or define here
    setBEQList([/* Mock Data */]);
    setTEQList([/* Mock Data */]);
    setChartData({/* Chart Data Structure */});
  }, []);

  return (
    <div className="ps-dashboard-header">
      {/* Other components and structure omitted for brevity */}
      <DashboardWidget title="Business Exception Queue" exceptionList={BEQList} />
      <DashboardWidget title="Technical Exception Queue" exceptionList={TEQList} />
      {/* Assuming a single chart for simplicity. Adjust as necessary. */}
      <LineChart chartId="beqLineChart" data={chartData} />
    </div>
  );
};

export default App;