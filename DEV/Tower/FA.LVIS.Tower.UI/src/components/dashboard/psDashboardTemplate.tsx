import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Assuming there's some CSS to import

function Dashboard() {
  const [currentUser, setCurrentUser] = useState(null);
  const [BEQSummaryList, setBEQSummaryList] = useState(null);
  const [TEQSummaryList, setTEQSummaryList] = useState(null);
  const [graphDataBEQ, setGraphDataBEQ] = useState({ labels: [], data: [] });
  const [graphDataTEQ, setGraphDataTEQ] = useState({ labels: [], data: [] });

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    if (currentUser) {
      loadBEQExceptions();
      loadTEQExceptions();
      loadGraphicalBEQException();
      loadGraphicalTEQException();
    }
  }, [currentUser]);

  const getCurrentUser = async () => {
    try {
      const response = await axios.get('/path/to/get/user'); // Change this to the correct API endpoint
      setCurrentUser(response.data);
    } catch (error) {
      console.log('Failed to fetch current user', error);
    }
  };

  const loadBEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/BEQException/');
      setBEQSummaryList(response.data);
    } catch (error) {
      console.error('Failed to load BEQ Exceptions', error);
    }
  };

  const loadTEQExceptions = async () => {
    try {
      const response = await axios.get('Dashboard/TEQException/');
      setTEQSummaryList(response.data);
    } catch (error) {
      console.error('Failed to load TEQ Exceptions', error);
    }
  };

  const loadGraphicalBEQException = async () => {
    try {
      const response = await axios.get('Dashboard/GraphicalBEQException/');
      const data = response.data;
      const labels = data.map(d => d.Hour);
      const newData = [
        data.map(d => d.NewCount),
        data.map(d => d.ActiveCount),
        data.map(d => d.HoldCount),
        data.map(d => d.ArchiveCount)
      ];
      setGraphDataBEQ({ labels, data: newData });
    } catch (error) {
      console.error('Failed to load Graphical BEQ Exceptions', error);
    }
  };

  const loadGraphicalTEQException = async () => {
    try {
      const response = await axios.get('Dashboard/GraphicalTEQException/');
      const data = response.data;
      const labels = data.map(d => d.Hour);
      const newData = [
        data.map(d => d.NewCount),
        data.map(d => d.ActiveCount),
        data.map(d => d.HoldCount),
        data.map(d => d.ArchiveCount)
      ];
      setGraphDataTEQ({ labels, data: newData });
    } catch (error) {
      console.error('Failed to load Graphical TEQ Exceptions', error);
    }
  };

  return (
    <div>
      {/* Dashboard Header */}
      {currentUser && (
        <>
          <div className="ps-dashboard-header">
            <h2>Welcome, {currentUser.UserName}</h2>
          </div>
          <br />
          <br />

          {/* Business Exception Queue */}
          <div className="col-md-6">
            {BEQSummaryList ? (
              BEQSummaryList.map((Exception, index) => (
                <div key={index} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                  <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
                    {Exception.ExceptionName}
                  </span>
                  <span className="value">{Exception.NoOfExceptions}</span>
                  <br />
                  <span className="value">{Exception.DateTime}</span>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>

          {/* Technical Exception Queue */}
          <div className="col-md-6">
            {TEQSummaryList ? (
              TEQSummaryList.map((Exception, index) => (
                <div key={index} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                  <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
                    {Exception.ExceptionName}
                  </span>
                  <span className="value">{Exception.NoOfExceptions}</span>
                  <br />
                  <span className="value">{Exception.DateTime}</span>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </>
      )}

      {/* Simplified Graphical Exception Loading - Placeholder for actual graph components */}
      <div>
        <div className="col-md-6">
          <h3>Business Exceptions Graph (Placeholder)</h3>
          {graphDataBEQ.labels.length > 0 ? (
            <div>Graphical Data Loaded for BEQ</div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="col-md-6">
          <h3>Technical Exceptions Graph (Placeholder)</h3>
          {graphDataTEQ.labels.length > 0 ? (
            <div>Graphical Data Loaded for TEQ</div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;