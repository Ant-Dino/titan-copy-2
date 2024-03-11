import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

interface Exception {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}

const DashboardComponent: React.FC = () => {
  const [beqSummaryList, setBeqSummaryList] = useState<Exception[] | null>(null);
  const [teqSummaryList, setTeqSummaryList] = useState<Exception[] | null>(null);
  const [lnCtrlData, setLnCtrlData] = useState({});
  const [teqLnchartCtrlData, setTeqLnchartCtrlData] = useState({});

  // Mock function to mimic data fetching
  const getCurrentUser = () => {
    // Fetch user logic here
  };
  const fetchExceptionList = async () => {
    // Assume we have a function to fetch exception lists
    // This is where you would fetch the BEQ and TEQ Summary Lists from a backend service
    // For the purpose of this example, let's use some dummy data

    const beqSummaryExample: Exception[] = [
      { ExceptionName: 'Exception 1', NoOfExceptions: 5, ThreshholdCount: 10, DateTime: '2023-01-01' },
      { ExceptionName: 'Exception 2', NoOfExceptions: 15, ThreshholdCount: 10, DateTime: '2023-01-02' },
];

    const teqSummaryExample: Exception[] = [
      { ExceptionName: 'Exception A', NoOfExceptions: 7, ThreshholdCount: 5, DateTime: '2023-01-03' },
      { ExceptionName: 'Exception B', NoOfExceptions: 4, ThreshholdCount: 5, DateTime: '2023-01-04' },
];

    setBeqSummaryList(beqSummaryExample);
    setTeqSummaryList(teqSummaryExample);
    // Here you would set your LnCtrlData and TeqLnchartCtrlData based on your actual chart data requirement
  };

  useEffect(() => {
    getCurrentUser();
    fetchExceptionList();
  }, []);

  return (
    <div>
      <div className="ps-dashboard-header">
        {/* Business Exception Queue Widget */}
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
                {beqSummaryList?.map((Exception, index) => (
                  <a key={index} href={`#/businessexception/${Exception.ExceptionName}`}
                  className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                    <span
                      className={
                        Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'
                      }
                    >
                      {Exception.ExceptionName}
                    </span>
                    <span className="value">{Exception.NoOfExceptions}</span><br />
                    <span className="value">{Exception.DateTime}</span>
                  </a>
)}
              </div>
            </div>
          </div>
        </div>
        {/* Technical Exception Queue Widget */}
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
                {teqSummaryList?.map((Exception, index) => (
                  <a key={index} href={`#/Exceptions/${Exception.ExceptionName}`}
                  className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                    <span
                      className={
                        Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'
                      }
                    >
                      {Exception.ExceptionName}
                    </span>
                    <span className="value">{Exception.NoOfExceptions}</span><br />
                    <span className="value">{Exception.DateTime}</span>
                  </a>
)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);}

export default DashboardComponent;