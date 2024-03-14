import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [BEQSummaryList, setBEQSummaryList] = useState(null);
    const [TEQSummaryList, setTEQSummaryList] = useState(null);
    const [TEQGraphData, setTEQGraphData] = useState({ labels: [], data: [] });
    const [BEQGraphData, setBEQGraphData] = useState({ labels: [], data: [] });

    // Fetch Current User and Exception Lists
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response = await axios.get('UserInfo/getUser');
                setCurrentUser(response.data);
                loadBEQExceptions();
                loadTEQExceptions();
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        const loadBEQExceptions = async () => {
            try {
                const response = await axios.get('Dashboard/BEQException/');
                setBEQSummaryList(response.data);
            } catch (error) {
                console.error('Error fetching BEQ exceptions:', error);
            }
        };

        const loadTEQExceptions = async () => {
            try {
                const response = await axios.get('Dashboard/TEQException/');
                setTEQSummaryList(response.data);
            } catch (error) {
                console.error('Error fetching TEQ exceptions:', error);
            }
        };

        getCurrentUser();
    }, []);

    // Fetch TEQ Graph Data
    useEffect(() => {
        const loadTEQGraphData = async () => {
            try {
                const response = await axios.get('Dashboard/GraphicalTEQException/');
                // Update state with graph data
                setTEQGraphData({
                    labels: response.data.map(d => d.Hour),
                    data: [
                        response.data.map(d => d.NewCount),
                        response.data.map(d => d.ActiveCount),
                        response.data.map(d => d.HoldCount),
                        response.data.map(d => d.ArchiveCount),
                    ]
                });
            } catch (error) {
                console.log('Error loading TEQ graph data:', error);
            }
        };
        if (currentUser) {
            loadTEQGraphData();
        }
    }, [currentUser]);

    // Fetch BEQ Graph Data
    useEffect(() => {
        const loadBEQGraphData = async () => {
            try {
                const response = await axios.get('Dashboard/GraphicalBEQException/');
                // Update state with graph data
                setBEQGraphData({
                    labels: response.data.map(d => d.Hour),
                    data: [
                        response.data.map(d => d.NewCount),
                        response.data.map(d => d.ActiveCount),
                        response.data.map(d => d.HoldCount),
                        response.data.map(d => d.ArchiveCount),
                    ]
                });
            } catch (error) {
                console.log('Error loading BEQ graph data:', error);
            }
        };
        if (currentUser) {
            loadBEQGraphData();
        }
    }, [currentUser]);

    return (
        <div>
            {/* Dashboard Header */}
            <div className="ps-dashboard-header">
                <h2>Dashboard</h2>
            </div>

            {/* Exception Widgets */}
            <div className="dashboard-widgets">
                <div className="col-md-6">
                    {/* Business Exception Queue Widget */}
                    <div className="widget widget-nopad">
                        <div className="widget-header">
                            <i className="fa fa-exclamation-triangle" style={{ marginLeft: "0.5em" }}></i>
                            <h3 style={{ margin: "0px" }}>Business Exception Queue</h3>
                        </div>
                        <div className="dashboard-widget-content" style={{ overflowY: "auto" }}>
                            {BEQSummaryList ? (
                                <div className="shortcuts">
                                    {BEQSummaryList.map((Exception, index) => (
                                        <a key={index} href={`#/businessexception/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                            <span className={`shortcut-header ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                                            <span className="value">{Exception.NoOfExceptions}</span><br />
                                            <span className="value">{Exception.DateTime}</span>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <div>Loading...</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* Technical Exception Queue Widget */}
                    <div className="widget widget-nopad">
                        <div className="widget-header">
                            <i className="fa fa-exclamation-triangle" style={{ marginLeft: "0.5em" }}></i>
                            <h3 style={{ margin: "0px" }}>Technical Exception Queue</h3>
                        </div>
                        <div className="dashboard-widget-content" style={{ overflowY: "auto" }}>
                            {TEQSummaryList ? (
                                <div className="shortcuts">
                                    {TEQSummaryList.map((Exception, index) => (
                                        <a key={index} href={`#/Exceptions/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                            <span className={`shortcut-header ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}`}>{Exception.ExceptionName}</span>
                                            <span className="value">{Exception.NoOfExceptions}</span><br />
                                            <span className="value">{Exception.DateTime}</span>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <div>Loading...</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;