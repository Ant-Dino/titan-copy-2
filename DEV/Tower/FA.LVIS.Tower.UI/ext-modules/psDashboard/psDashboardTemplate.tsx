import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Assuming use of Chart.js for React: if not using this library, the charting component import and setup will need adjustment according to the selected library
import { Bar } from 'react-chartjs-2';

const DashboardComponent = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [activityRight, setActivityRight] = useState('');
  const [canManageTEQ, setCanManageTEQ] = useState(false);
  const [canManageBEQ, setCanManageBEQ] = useState(false);
  const [canManageAccessReq, setCanManageAccessReq] = useState(false);

  const [BEQSummaryList, setBEQSummaryList] = useState(null);
  const [TEQSummaryList, setTEQSummaryList] = useState(null);

  const [BEQGraphData, setBEQGraphData] = useState({});
  const [TEQGraphData, setTEQGraphData] = useState({});

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get('UserInfoEndpoint'); // Replace 'UserInfoEndpoint' with actual endpoint to fetch user info
        setCurrentUser(response.data);
        setActivityRight(response.data.ActivityRight);
        setCanManageTEQ(response.data.CanManageTEQ);
        setCanManageBEQ(response.data.CanManageBEQ);
        setCanManageAccessReq(response.data.CanAccessReq);
        loadBEQExceptions();
        loadTEQExceptions();
      } catch (error) {
        console.error('Error fetching current user', error);
      }
    };

    getCurrentUser();
  }, []);

  const loadBEQExceptions = async () => {
    try {
        const response = await axios.get('Dashboard/BEQException/');
        setBEQSummaryList(response.data);
    } catch (error) {
        console.error('Error loading BEQ Exceptions', error);
    }
  };

  const loadTEQExceptions = async () => {
    try {
        const response = await axios.get('Dashboard/TEQException/');
        setTEQSummaryList(response.data);
    } catch (error) {
        console.error('Error loading TEQ Exceptions', error);
    }
  };

  // Example function to prepare graph data, similar for BEQ and TEQ with respective adjustments
  const loadGraphicalTEQException = async () => {
    try {
      const response = await axios.get('Dashboard/GraphicalTEQException/');
      setTEQGraphData({
        labels: response.data.map(d => d.Hour),
        datasets: [{
          label: 'New',
          data: response.data.map(d => d.NewCount),
          backgroundColor: 'rgba(244,210,209, 0.9)',
        }, {
          label: 'Active',
          data: response.data.map(d => d.ActiveCount),
          backgroundColor: 'rgba(194,214,235, 0.9)',
        }]
        // Add more datasets for each category if needed
      });
    } catch (error) {
      console.error('Error loading graphical TEQ exceptions', error);
    }
  };

  useEffect(() => {
    if (currentUser.UserName) {  // Or any other identifier from the user data
      loadGraphicalTEQException();
      loadGraphicalBEQException();  // Assuming similar function to load BEQ graphical data
    }
  }, [currentUser]);

  return (
    <div>
      <div className="col-md-6">
        <div className="widget widget-nopad">
          <div className="widget-header">
            <i className="fa fa-exclamation-triangle" style={{ marginLeft: '0.5em' }}></i>
            <h3 style={{ margin: '0px' }}>Business Exception Queue</h3>
          </div>
          <div className="dashboard-widget-content" style={{ overflowY: 'auto;' }}>
            {
              !BEQSummaryList &&
              <>
                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                <span className="sr-only">Loading...</span>
              </>
            }
            <div className="shortcuts">
              {
                BEQSummaryList && BEQSummaryList.map((exception, index) => (
                  <a key={index} className={`shortcut ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`} href={`#/businessexception/${exception.ExceptionName}`}>
                    <span className={`shortcut-header ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{exception.ExceptionName}</span>
                    <span className="value">{exception.NoOfExceptions}</span><br />
                    <span className="value">{exception.DateTime}</span>
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        {/* Assuming use of Chart.js for React. */}
        {/* TEQ Graph data visualization using React-Chartjs-2 */}
        {
          TEQGraphData.labels && (
            <div className="widget">
              <div className="widget-header">
                <i className="icon-signal"></i>
                <h3 style={{ margin: '0px' }}>Technical Exceptions</h3>
              </div>
              <div className="dashboard-widget-content">
                {!TEQGraphData ? (
                  <>
                    <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                    <span className="sr-only">Loading...</span>
                  </>
                ) : (
                  <Bar
                    data={TEQGraphData}
                    options={{
                      legend: { display: true, position: 'bottom' },
                      scales: {
                        xAxes: [{ stacked: true }],
                        yAxes: [{ stacked: true }]
                      }
                    }}
                  />
                )}
              </div>
            </div>
          )
        }
      </div>
      {/* Similar structure for BEQ graph data visualization */}
    </div>
  );
};

export default DashboardComponent;