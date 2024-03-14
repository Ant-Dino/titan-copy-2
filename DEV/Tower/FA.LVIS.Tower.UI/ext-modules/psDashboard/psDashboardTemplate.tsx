import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);
    const [TEQGraphData, setTEQGraphData] = useState({});
    const [BEQGraphData, setBEQGraphData] = useState({});

    useEffect(() => {
        getCurrentUser();
    }, []);

    const getCurrentUser = async () => {
        try {
            // Simulating getting user info, including permissions
            const response = await axios.get('/currentUser');
            setCurrentUser(response.data);
            if (response.data.CanManageBEQ) {
                loadBEQExceptions();
                loadGraphicalBEQException();
            }
            if (response.data.CanManageTEQ) {
                loadTEQExceptions();
                loadGraphicalTEQException();
            }
        } catch (error) {
            console.error("Error fetching current user", error);
        }
    };

    const loadBEQExceptions = async () => {
        try {
            const response = await axios.get('Dashboard/BEQException/');
            setBEQSummaryList(response.data);
        } catch (error) {
            console.error("Error fetching BEQ exceptions", error);
        }
    };

    const loadTEQExceptions = async () => {
        try {
            const response = await axios.get('Dashboard/TEQException/');
            setTEQSummaryList(response.data);
        } catch (error) {
            console.error("Error fetching TEQ exceptions", error);
        }
    };

    const loadGraphicalBEQException = async () => {
        try {
            const response = await axios.get('Dashboard/GraphicalBEQException/');
            setBEQGraphData(formatGraphData(response.data));
        } catch (error) {
            console.error("Error fetching graphical BEQ exception data", error);
        }
    };

    const loadGraphicalTEQException = async () => {
        try {
            const response = await axios.get('Dashboard/GraphicalTEQException/');
            setTEQGraphData(formatGraphData(response.data));
        } catch (error) {
            console.error("Error fetching graphical TEQ exception data", error);
        }
    };

    const formatGraphData = (graphData) => {
        const labels = [];
        const data = {
            New: [],
            Active: [],
            Hold: [],
            Resolved: [],
        };

        graphData.forEach((item) => {
            labels.push(item.Hour);
            data.New.push(item.NewCount);
            data.Active.push(item.ActiveCount);
            data.Hold.push(item.HoldCount);
            data.Resolved.push(item.ArchiveCount); // Assuming ArchiveCount is Resolved
        });

        return { labels, datasets: Object.keys(data).map(key => ({ label: key, data: data[key] })) };
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            x: { stacked: true },
            y: { stacked: true }
        },
        legend: {
            display: true,
            position: "bottom"
        }
    };

    return (
        <div>
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{ marginLeft: "0.5em" }}></i>
                        <h3 style={{ margin: "0px" }}>Business Exception Queue</h3>
                    </div>
                    <div className="dashboard-widget-content" style={{ overflowY: "auto" }}>
                        {!BEQSummaryList && (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                        <div className="shortcuts">
                            {BEQSummaryList.map((Exception, index) => (
                                <a href={`#/businessexception/${Exception.ExceptionName}`} key={index}
                                    className={`shortcut ${Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                    <span className={Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
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
            <div className="col-md-6">
                <div className="widget">
                    <div className="widget-header">
                        <i className="icon-signal"></i>
                        <h3 style={{ margin: "0px" }}>Technical Exceptions</h3>
                    </div>
                    <div className="dashboard-widget-content">
                        {!TEQGraphData.datasets && (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                        {TEQGraphData.datasets && (
                            <Bar data={TEQGraphData} options={options} height={280} width={950} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;