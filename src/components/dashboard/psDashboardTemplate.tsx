import React, {useEffect, useState} from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import 'chartjs-adapter-moment';

type ExceptionData = {
  ExceptionName: string;
  NoOfExceptions: number;
  DateTime: string;
  ThreshholdCount?: number;
};

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState<T>();
  const [BEQSummaryList, setBEQSummaryList] = useState<ExceptionData[]>([]);
  const [TEQSummaryList, setTEQSummaryList] = useState<ExceptionData[]>([]);
  const [beqLineData, setBeqLineData] = useState({});
  const [teqLineData, setTeqLineData] = useState({});

  useEffect(() => {
    getCurrentUser();
    // Fetch BEQSummaryList and TEQSummaryList logic goes here
    // Fetch BEQ and TEQ line chart data logic goes here
  }, []);

  const getCurrentUser = () => {
    // Simulating a user fetch
    setCurrentUser({ name: "John Doe" }); // set a current user state
  };

  return (
    <div>
      <div className="ps-dashboard-header">
        <br /><br />
        <div className="row">
          <div className="col-md-6">
            <div className="widget widget-nopad">
              <div className="widget-header">
                <i className="fa fa-exclamation-triangle" style={{margin: "0.5em"}}></i>
                <h3 style={{margin: "0px"}}>Business Exception Queue</h3>
              </div>
              <div className="dashboard-widget-content" style={{overflowY: "auto"}}>
                {!BEQSummaryList && (
                  <>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                  </>
                )}

                <div className="shortcuts">
                  {BEQSummaryList.map((Exception) => (
                    <a key={Exception.ExceptionName} href={`#/businessexception/${Exception.ExceptionName}`} 
                       className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}>
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
          {/* More widgets similarly for TEQ and other */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;