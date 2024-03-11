import React, { useEffect, useState } from 'react';

interface Exception {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}

const Dashboard: React.FC = () => {
  const [BEQSummaryList, setBEQSummaryList] = useState<Exception[] | null>(null);
  const [TEQSummaryList, setTEQSummaryList] = useState<Exception[] | null>(null);

  useEffect(() => {
    // Mock fetch call to get data for BEQSummaryList and TEQSummaryList. Replace with actual fetch calls.
    // Just an example data structure. Adjust according to actual data structure.
    const mockBEQSummaryList: Exception[] = [
      { ExceptionName: 'Exception1', NoOfExceptions: 4, ThreshholdCount: 5, DateTime: '2023-04-01' },
      { ExceptionName: 'Exception2', NoOfExceptions: 6, ThreshholdCount: 5, DateTime: '2023-04-02' },
    ];

    const mockTEQSummaryList: Exception[] = [
      { ExceptionName: 'TechException1', NoOfExceptions: 2, ThreshholdCount: 3, DateTime: '2023-04-03' },
      { ExceptionName: 'TechException2', NoOfExceptions: 4, ThreshholdCount: 3, DateTime: '2023-04-04' },
    ];

    setBEQSummaryList(mockBEQSummaryList);
    setTEQSummaryList(mockTEQSummaryList);
  }, []);

  return (
    <div className="ps-dashboard-header">
      <br /><br />
      <div className="row">
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
                {BEQSummaryList?.map((Exception, index) => (
                  <a key={index} href={`#/businessexception/${Exception.ExceptionName}`} className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}>
                        <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
                        <span className="value">{Exception.NoOfExceptions}</span><br />
                        <span className="value">{Exception.DateTime}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* Additional widgets can be added here similar to the Business Exception Queue */}
        </div>
      </div>

      {/* Repeat for Technical Exception Queue with TEQSummaryList */}
      <div className="row">
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
                {TEQSummaryList?.map((Exception, index) => (
                  <a key={index} href={`#/Exceptions/${Exception.ExceptionName}`} className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}>
                        <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
                        <span className="value">{Exception.NoOfExceptions}</span><br />
                        <span className="value">{Exception.DateTime}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* Additional widgets for the Technical Exception Queue */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;