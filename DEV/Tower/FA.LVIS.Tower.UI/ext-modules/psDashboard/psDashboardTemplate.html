import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Chart } from "react-chartjs-2";
interface ExceptionSummary {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}
interface Props {
  fetchBEQSummaryList: () => Promise<ExceptionSummary[]>;
  fetchTEQSummaryList: () => Promise<ExceptionSummary[]>;
  beqLineChartData: any; // Assuming this is an object that includes data, labels, and other chart properties
  teqLineChartData: any;
}
const Dashboard: React.FC<Props> = ({
  fetchBEQSummaryList,
  fetchTEQSummaryList,
  beqLineChartData,
  teqLineChartData,
}) => {
  const [BEQSummaryList, setBEQSummaryList] = useState<ExceptionSummary[] | null>(null);
  const [TEQSummaryList, setTEQSummaryList] = useState<ExceptionSummary[] | null>(null);
  useEffect(() => {
    async function fetchData() {
      const beqList = await fetchBEQSummaryList();
      setBEQSummaryList(beqList);
      const teqList = await fetchTEQSummaryList();
      setTEQSummaryList(teqList);
    }
    fetchData();
  }, [fetchBEQSummaryList, fetchTEQSummaryList]);
  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: "0.5em" }}></i>
            <h3 style={{ margin: "0px" }}>Business Exception Queue</h3>
          </div>

          <div className="dashboard-widget-content" style={{ overflowY: "auto" }}>
            {!BEQSummaryList ? (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div className="shortcuts">
                {BEQSummaryList.slice(0, 20).map((Exception, index) => (
                  <Link
                    key={index}
                    to={`/businessexception/${Exception.ExceptionName}`}
                    className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? "shortcut-danger" : "shortcut-info"}`}
                  >
                    <span
                      className={`shortcut-header ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? "shortcut-header" : "shortcut-headerSuccess"}`}
                    >
                      {Exception.ExceptionName}
                    </span>
                    <span className="value">{Exception.NoOfExceptions}</span>
                    <br />
                    <span className="value">{Exception.DateTime}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="widget">
          <div className="widget-header">
            <i className="icon-signal"></i>
            <h3 style={{ margin: "0px" }}>Business Exceptions</h3>
          </div>
          <div className="dashboard-widget-content">
            {beqLineChartData ? (
              <Chart type="bar" {...beqLineChartData} />
            ) : (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
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
            {!TEQSummaryList ? (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div className="shortcuts">
                {TEQSummaryList.map((Exception, index) => (
                  <Link
                    key={index}
                    to={`/Exceptions/${Exception.ExceptionName}`}
                    className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? "shortcut-danger" : "shortcut-info"}`}
                  >
                    <span
                      className={`shortcut-header ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? "shortcut-header" : "shortcut-headerSuccess"}`}
                    >
                      {Exception.ExceptionName}
                    </span>
                    <span className="value">{Exception.NoOfExceptions}</span>
                    <br />
                    <span className="value">{Exception.DateTime}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="widget">
          <div className="widget-header">
            <i className="icon-signal"></i>
            <h3 style={{ margin: "0px" }}>Technical Exceptions</h3>
          </div>
          <div className="dashboard-widget-content">
            {teqLineChartData ? (
              <Chart type="bar" {...teqLineChartData} />
            ) : (
              <div>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;