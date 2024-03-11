import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

interface ExceptionSummary {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}

const Dashboard: React.FC = () => {
  const [BEQSummaryList, setBEQSummaryList] = useState<ExceptionSummary[]>([]);
  // Assume another useState here for TEQSummaryList and other necessary state variables
  // Load data for BEQSummaryList and others (assumed as a simple example)
  useEffect(() => {
    // Fetch data for BEQSummaryList and other necessary data
    // For simplicity, using static data here
    const fetchedData: ExceptionSummary[] = [
      { ExceptionName: 'ExampleException1', NoOfExceptions: 5, ThreshholdCount: 4, DateTime: '2023-04-01' },
      // other data
    ];
    setBEQSummaryList(fetchedData);
    // Repeat for other state variables
  }, []);

  // Example setup for a chart (as BEQLine and TEQLine would also utilize charts)
  const data = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{marginLeft: '0.5em'}}></i>
            <h3 style={{margin: '0px'}}> Business Exception Queue</h3>
          </div>
          <div className="dashboard-widget-content" style={{overflowY: 'auto'}}>
            {!BEQSummaryList &&
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            }
            <div className="shortcuts">
              {BEQSummaryList.map((Exception, index) => (
                <a key={index} href={`#/businessexception/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                  <span className={`value ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                  <span className="value">{Exception.NoOfExceptions}</span><br />
                  <span className="value">{Exception.DateTime}</span>
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
            <h3 style={{margin: '0px'}}>Business Exceptions</h3>
          </div>
          {/* Widget content showing chart */}
          <div className="dashboard-widget-content">
            <Bar data={data} />
          </div>
        </div>
      </div>
      {/* Additional content goes here, similar structure for TEQ as for BEQ */}
    </div>
  );
};

export default Dashboard;