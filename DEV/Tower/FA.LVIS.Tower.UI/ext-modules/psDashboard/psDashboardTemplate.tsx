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
    // Fake API call to get the current user and then load exceptions list
    const fakeLoadData = async () => {
      // Example of fetching data:
      // const response = await fetch('/api/exceptions');
      // const data = await response.json();
      const fakeData: Exception[] = [
        { ExceptionName: 'BusinessException1', NoOfExceptions: 3, ThreshholdCount: 5, DateTime: '2023-04-02' },
        { ExceptionName: 'TechnicalException1', NoOfExceptions: 6, ThreshholdCount: 5, DateTime: '2023-04-03' },
      ];
      setBEQSummaryList(fakeData.filter(e => e.ExceptionName.startsWith('Business')));
      setTEQSummaryList(fakeData.filter(e => e.ExceptionName.startsWith('Technical')));
    };

    fakeLoadData();
  }, []);

  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: "0.5em" }}></i>
            <h3 style={{ margin: "0px" }}> Business Exception Queue</h3>
          </div>
          
          <div className="dashboard-widget-content" style={{ overflowY: "auto" }}>
            {!BEQSummaryList && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            
            <div className="shortcuts">
              {BEQSummaryList?.slice(0, 20).map((Exception, index) => (
                <a key={index} href={`#/businessexception/${Exception.ExceptionName}`}
                   className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
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
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: "0.5em" }}></i>
            <h3 style={{ margin: "0px" }}>Technical Exception Queue</h3>
          </div>
          
          <div className="dashboard-widget-content" style={{ overflowY: "auto" }}>
            {!TEQSummaryList && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            
            <div className="shortcuts">
              {TEQSummaryList?.slice(0, 100).map((Exception, index) => (
                <a key={index} href={`#/Exceptions/${Exception.ExceptionName}`}
                   className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                    <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
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