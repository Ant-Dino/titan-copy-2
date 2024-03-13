import React, { useEffect, useState } from 'react';
const Dashboard = () => {
  const [beqSummaryList, setBeqSummaryList] = useState<any[]>([]);
  const [teqSummaryList, setTeqSummaryList] = useState<any[]>([]);
  useEffect(() => {
    // simulate fetching data
    const beqData = [
      { ExceptionName: 'BEQ1', NoOfExceptions: 5, ThreshholdCount: 3, DateTime: '2021-09-01' },
      { ExceptionName: 'BEQ2', NoOfExceptions: 2, ThreshholdCount: 3, DateTime: '2021-09-02' },
    const teqData = [
      { ExceptionName: 'TEQ1', NoOfExceptions: 8, ThreshholdCount: 5, DateTime: '2021-09-03' },
      { ExceptionName: 'TEQ2', NoOfExceptions: 3, ThreshholdCount: 5, DateTime: '2021-09-04' },

    setBeqSummaryList(beqData);
    setTeqSummaryList(teqData);
  }, []);
  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{marginLeft:'0.5em'}}></i>
            <h3 style={{margin:'0px'}}>Business Exception Queue</h3>
          </div>

          <div className="dashboard-widget-content" style={{overflowY:'auto'}}>
            {!beqSummaryList &&
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            }

            <div className="shortcuts">
              {beqSummaryList.map((Exception, index) => (
                <a key={index} 
                   className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
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

      {/* Omitted second column for brevity */}

      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{marginLeft:'0.5em'}}></i>
            <h3 style={{margin:'0px'}}>Technical Exception Queue</h3>
          </div>

          <div className="dashboard-widget-content" style={{overflowY:'auto'}}>
            {!teqSummaryList &&
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            }
            <div className="shortcuts">
              {teqSummaryList.map((Exception, index) => (
                <a key={index} 
                   className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
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
    </div>
  );
};

export default Dashboard;