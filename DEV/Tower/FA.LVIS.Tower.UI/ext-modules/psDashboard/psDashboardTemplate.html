import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Dashboard() {
  const [BEQSummaryList, setBEQSummaryList] = useState(null);
  const [TEQSummaryList, setTEQSummaryList] = useState(null);
  const [userData, setUserData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getCurrentUser();
  }, []);
  const getCurrentUser = async () => {
    try {
      const response = await axios.get('/UserInfo'); // Assuming '/UserInfo' is the URL to fetch user info
      setUserData(response.data);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };
  const loadBEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(response.data);
    } catch (error) {
      console.error('Error fetching BEQ exceptions', error);
    }
  };
  const loadTEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(response.data);
    } catch (error) {
      console.error('Error fetching TEQ exceptions', error);
    }
  };
  return (
    <div>
      <div className="ps-dashboard-header">
        <br /><br />
        <div>
          <div className="col-md-6">
            <div className="widget widget-nopad">
              { !BEQSummaryList &&
                <div>
                  <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                  <span className="sr-only">Loading...</span>
                </div>
              }
              { BEQSummaryList &&
                <div className="dashboard-widget-content" style={{overflowY: 'auto'}}>
                  <div className="shortcuts">
                    { BEQSummaryList.map((Exception, index) => (
                      <a key={index} href={`#/businessexception/${Exception.ExceptionName}`} 
                         className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                            <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>
                              {Exception.ExceptionName}
                            </span>
                            <span className="value">{Exception.NoOfExceptions}</span><br />
                            <span className="value">{Exception.DateTime}</span>
                      </a>
                    ))}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;