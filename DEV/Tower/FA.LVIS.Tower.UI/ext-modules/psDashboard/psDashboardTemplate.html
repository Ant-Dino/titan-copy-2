import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
type ExceptionSummary = {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
type ExceptionData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
interface DashboardProps {
  BEQSummaryList: ExceptionSummary[];
  TEQSummaryList: ExceptionSummary[];
  fetchBEQSummary: () => Promise<ExceptionSummary[]>;
  fetchTEQSummary: () => Promise<ExceptionSummary[]>;
  BEQChartData: ExceptionData;
  TEQChartData: ExceptionData;
}
const Dashboard: React.FC<DashboardProps> = ({ BEQSummaryList, TEQSummaryList, fetchBEQSummary, fetchTEQSummary, BEQChartData, TEQChartData }) => {
  const [loadingBEQ, setLoadingBEQ] = useState(true);
  const [loadingTEQ, setLoadingTEQ] = useState(true);
  useEffect(() => {
    async function fetchAllData() {
      await fetchBEQSummary();
      setLoadingBEQ(false);
      await fetchTEQSummary();
      setLoadingTEQ(false);
    }
    fetchAllData();
  }, [fetchBEQSummary, fetchTEQSummary]);
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
              {BEQSummaryList.slice(0, 20).map((Exception) => (
                <Link to={`/businessexception/${Exception.ExceptionName}`} 
                     className={`
                       shortcut 
                       ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}
                     `} 
                     key={Exception.ExceptionName}
                >
                   <span className={`
                     ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}
                   `}>{Exception.ExceptionName}</span>
                   <span className="value">{Exception.NoOfExceptions}</span><br />
                   <span className="value">{Exception.DateTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-md-6">
        <div className="widget">
          <div className="widget-header">
            <i className="icon-signal"></i>
            <h3 style={{ margin: '0px' }}>Business Exceptions</h3>
          </div>
          {loadingBEQ ? (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
          ) : (
              <Chart
                id="beqline"
                type="bar"
                data={BEQChartData}
                height={280}
                width={950}
              />
          )}
        </div>
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
              {TEQSummaryList.slice(0, 100).map((Exception) => (
                <Link to={`/Exceptions/${Exception.ExceptionName}`} 
                     className={`
                       shortcut 
                       ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}
                     `} 
                     key={Exception.ExceptionName}
                >
                   <span className={`
                     ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}
                   `}>{Exception.ExceptionName}</span>
                   <span className="value">{Exception.NoOfExceptions}</span><br />
                   <span className="value">{Exception.DateTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-md-6">
        <div className="widget">
          <div className="widget-header">
            <i className="icon-signal"></i>
            <h3 style={{ margin: '0px' }}>Technical Exceptions</h3>
          </div>
          {loadingTEQ ? (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
          ) : (
              <Chart
                id="teqline"
                type="bar"
                data={TEQChartData}
                height={280}
                width={950}
              />
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;