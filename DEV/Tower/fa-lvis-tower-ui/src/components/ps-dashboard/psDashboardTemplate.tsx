import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
interface ExceptionSummary {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}
interface DashboardProps {
  fetchBEQSummaryList: () => Promise<ExceptionSummary[]>;
  fetchTEQSummaryList: () => Promise<ExceptionSummary[]>;
  fetchBEQChartData: () => Promise<ChartData>;
  fetchTEQChartData: () => Promise<ChartData>;
}
const DashboardComponent: React.FC<DashboardProps> = ({
  fetchBEQSummaryList,
  fetchTEQSummaryList,
  fetchBEQChartData,
  fetchTEQChartData,
}) => {
  const [beqSummaryList, setBeqSummaryList] = useState<ExceptionSummary[]>([]);
  const [teqSummaryList, setTeqSummaryList] = useState<ExceptionSummary[]>([]);
  const [beqChartData, setBeqChartData] = useState<ChartData | null>(null);
  const [teqChartData, setTeqChartData] = useState<ChartData | null>(null);
  useEffect(() => {
    fetchBEQSummaryList().then(setBeqSummaryList);
    fetchTEQSummaryList().then(setTeqSummaryList);
    fetchBEQChartData().then(setBeqChartData);
    fetchTEQChartData().then(setTeqChartData);
  }, [fetchBEQSummaryList, fetchTEQSummaryList, fetchBEQChartData, fetchTEQChartData]);
  const renderExceptionLink = (exception: ExceptionSummary) => {
    const route = exception.NoOfExceptions >= exception.ThreshholdCount ? `/businessexception/${exception.ExceptionName}` : `/Exceptions/${exception.ExceptionName}`;
    const className = exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info';

    return (
      <Link to={route} className={className} key={exception.ExceptionName}>
        <span className={exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
          {exception.ExceptionName}
        </span>
        <span className="value">{exception.NoOfExceptions}</span><br />
        <span className="value">{exception.DateTime}</span>
      </Link>
    );
  };
  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
            <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
          </div>

          <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
            {!beqSummaryList && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}

            <div className="shortcuts">
              {beqSummaryList.map(renderExceptionLink)}
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

          <div className="dashboard-widget-content">
            {!beqChartData && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {beqChartData && <Bar data={beqChartData} />}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
            <h3 style={{ margin: '0px' }}>Technical Exception Queue</h3>
          </div>

          <div className="dashboard-widget-content" style={{ overflowY: 'auto' }}>
            {!teqSummaryList && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}

            <div className="shortcuts">
              {teqSummaryList.map(renderExceptionLink)}
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

          <div className="dashboard-widget-content">
            {!teqChartData && (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {teqChartData && <Bar data={teqChartData} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardComponent;