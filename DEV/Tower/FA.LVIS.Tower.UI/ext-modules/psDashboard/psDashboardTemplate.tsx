import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const [BEQSummaryList, setBEQSummaryList] = useState<any[]>([]);
  const [TEQSummaryList, setTEQSummaryList] = useState<any[]>([]);
  const [isLoadingBEQ, setIsLoadingBEQ] = useState<boolean>(true);
  const [isLoadingTEQ, setIsLoadingTEQ] = useState<boolean>(true);

  useEffect(() => {
    const fetchBEQSummaryList = async () => {
      try {
        const response = await axios.get('/url-to-fetch-BEQSummaryList');
        setBEQSummaryList(response.data);
      } catch (error) {
        console.error('Failed to fetch BEQ Summary List', error);
      }
      setIsLoadingBEQ(false);
    };

    fetchBEQSummaryList();

    const fetchTEQSummaryList = async () => {
      try {
        const response = await axios.get('/url-to-fetch-TEQSummaryList');
        setTEQSummaryList(response.data);
      } catch (error) {
        console.error('Failed to fetch TEQ Summary List', error);
      }
      setIsLoadingTEQ(false);
    };

    fetchTEQSummaryList();
  }, []);

  return (
    <div>
      <div className="ps-dashboard-header">
        <div className="col-md-6">
          <div className="widget widget-nopad">
            <div className="widget-header">
              <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
              <h3 style={{ margin: '0px' }}> Business Exception Queue</h3>
            </div>
            <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
              {isLoadingBEQ ? (
                <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <div className="shortcuts">
                  {BEQSummaryList.slice(0, 20).map((Exception: any) => (
                    <a 
                      href={`/businessexception/${Exception.ExceptionName}`}
                      className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}
                      key={Exception.ExceptionName}
                    >
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
          {/* Placeholder for TEQ Summary Widget */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;