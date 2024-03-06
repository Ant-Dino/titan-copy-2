import React, { useEffect, useState } from 'react';

interface ExceptionType {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}

const Dashboard: React.FC = () => {
  const [BEQSummaryList, setBEQSummaryList] = useState<ExceptionType[] | null>(null);
  const [TEQSummaryList, setTEQSummaryList] = useState<ExceptionType[] | null>(null);

  // Function to mimic getting current user (initial data fetch)
  useEffect(() => {
    // Placeholder for actual fetch/api call to get data for Business Exception Queue
    const fetchedBEQ = [
      { ExceptionName: 'Exception1', NoOfExceptions: 10, ThreshholdCount: 5, DateTime: '2023-04-10' },
      { ExceptionName: 'Exception2', NoOfExceptions: 2, ThreshholdCount: 5, DateTime: '2023-04-11' },
        ];
    setBEQSummaryList(fetchedBEQ);

    // Placeholder for actual fetch/api call to get data for Technical Exception Queue
    const fetchedTEQ = [
      { ExceptionName: 'TechException1', NoOfExceptions: 15, ThreshholdCount: 10, DateTime: '2023-04-12' },
      { ExceptionName: 'TechException2', NoOfExceptions: 1, ThreshholdCount: 5, DateTime: '2023-04-13' },
        ];
    setTEQSummaryList(fetchedTEQ);
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
            {!BEQSummaryList && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            
            <div className="shortcuts">
              {BEQSummaryList && BEQSummaryList.slice(0, 20).map((Exception, index) => (
                <a key={index} href={`#/businessexception/${Exception.ExceptionName}`}
                   className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}`}>
                  <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>
                    {Exception.ExceptionName}
                  </span>
                  <span className="value">{Exception.NoOfExceptions}</span><br />
                  <span className="value">{Exception.DateTime}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-md-6">
        {/* Other widget components for BEQ Line and TEQ can follow similar pattern */}
      </div>
      
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
            <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
          </div>
          
          <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
            {!TEQSummaryList && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            
            <div className="shortcuts">
              {TEQSummaryList && TEQSummaryList.slice(0, 100).map((Exception, index) => (
                <a key={index} href={`#/Exceptions/${Exception.ExceptionName}`}
                   className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}`}>
                  <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>
                    {Exception.ExceptionName}
                  </span>
                  <span className="value">{Exception.NoOfExceptions}</span><br />
                  <span className="value">{Exception.DateTime}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;