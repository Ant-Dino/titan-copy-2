import React, { useEffect, useState } from 'react';

interface ExceptionItem {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}

const Dashboard: React.FC = () => {
  const [BEQSummaryList, setBEQSummaryList] = useState<ExceptionItem[]>([]);
  const [TEQSummaryList, setTEQSummaryList] = useState<ExceptionItem[]>([]);
  // Simulate fetching data
  useEffect(() => {
    // Placeholder for data fetching logic
    const beqDummyData: ExceptionItem[] = [
      { ExceptionName: "BEQException1", NoOfExceptions: 10, ThreshholdCount: 5, DateTime: "2023-04-01" },
      // more dummy data
    ];
    const teqDummyData: ExceptionItem[] = [
      { ExceptionName: "TEQException1", NoOfExceptions: 3, ThreshholdCount: 2, DateTime: "2023-04-02" },
      // more dummy data
    ];
    setBEQSummaryList(beqDummyData);
    setTEQSummaryList(teqDummyData);
  }, []);

  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{marginLeft: '0.5em'}}></i>
            <h3 style={{margin: '0px'}}> Business Exception Queue</h3>
          </div>
          <div className="dashboard-widget-content" style={{overflowY: 'auto'}}>
            {!BEQSummaryList && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            <div className="shortcuts">
              {BEQSummaryList.map((Exception, index) => (
                <a key={index} href={`#/businessexception/${Exception.ExceptionName}`}
                   className={'shortcut ' + (Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info')}>
                  <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
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
        {/* Implement widget for BEQ Line Chart */}
      </div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{marginLeft: '0.5em'}}></i>
            <h3 style={{margin: '0px'}}>Technical Exception Queue</h3>
          </div>
          <div className="dashboard-widget-content" style={{overflowY: 'auto'}}>
            {!TEQSummaryList && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            <div className="shortcuts">
              {TEQSummaryList.map((Exception, index) => (
                <a key={index} href={`#/Exceptions/${Exception.ExceptionName}`}
                   className={'shortcut ' + (Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info')}>
                  <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
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
        {/* Implement widget for TEQ Line Chart */}
      </div>
    </div>
  );
};

export default Dashboard;