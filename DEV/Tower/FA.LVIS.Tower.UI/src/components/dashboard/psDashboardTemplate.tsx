// Assuming you have installed react, react-dom, and chart.js
import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';

Chart.register(...registerables);

const Dashboard: React.FC = () => {
  const [BEQSummaryList, setBEQSummaryList] = useState<any[]>([]);
  const [TEQSummaryList, setTEQSummaryList] = useState<any[]>([]);
  const [busy, setBusy] = useState<boolean>(true);

  useEffect(() => {
    // Simulating fetching data for Business Exception Queue (BEQ) and Technical Exception Queue (TEQ)
    const fetchData = async () => {
      setBusy(true);
      try {
        const responseBEQ = await axios.get('/api/BEQSummary');
        setBEQSummaryList(responseBEQ.data);
        const responseTEQ = await axios.get('/api/TEQSummary');
        setTEQSummaryList(responseTEQ.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
      setBusy(false);
    };

    fetchData();
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
            {busy ? (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div className="shortcuts">
                {BEQSummaryList.map((Exception) => (
                  <a key={Exception.ExceptionName} href={`#/businessexception/${Exception.ExceptionName}`} 
                     className={'shortcut ' + (Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info')}>
                    <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
                      {Exception.ExceptionName}
                    </span>
                    <span className="value">{Exception.NoOfExceptions}</span><br />
                    <span className="value">{Exception.DateTime}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        {/* Placeholder for Chart.js component related to Business Exceptions, assuming similar implementation */}
      </div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{marginLeft: '0.5em'}}></i>
            <h3 style={{margin: '0px'}}>Technical Exception Queue</h3>
          </div>
          <div className="dashboard-widget-content" style={{overflowY: 'auto'}}>
            {busy ? (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div className="shortcuts">
                {TEQSummaryList.map((Exception) => (
                  <a key={Exception.ExceptionName} href={`#/Exceptions/${Exception.ExceptionName}`} 
                     className={'shortcut ' + (Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info')}>
                    <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
                      {Exception.ExceptionName}
                    </span>
                    <span className="value">{Exception.NoOfExceptions}</span><br />
                    <span className="value">{Exception.DateTime}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        {/* Placeholder for Chart.js component related to Technical Exceptions, assuming similar implementation */}
      </div>
    </div>
  );
};

export default Dashboard;