import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [BEQSummaryList, setBEQSummaryList] = useState(null);
    const [TEQSummaryList, setTEQSummaryList] = useState(null);

    useEffect(() => {
        getCurrentUser();
    }, []);

    const getCurrentUser = () => {
        axios.get('UserInfo/getUser')
            .then(response => {
                setCurrentUser(response.data);
                loadBEQExceptions();
                loadTEQExceptions();
            })
            .catch(error => console.error("There was an error fetching the user data: ", error));
    };

    const loadBEQExceptions = () => {
        axios.get('Dashboard/BEQException/')
            .then(response => {
                setBEQSummaryList(response.data);
            })
            .catch(error => console.error("There was an error fetching the BEQ data: ", error));
    };

    const loadTEQExceptions = () => {
        axios.get('Dashboard/TEQException/')
            .then(response => {
                setTEQSummaryList(response.data);
            })
            .catch(error => console.error("There was an error fetching the TEQ data: ", error));
    };

    return (
        <div>
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{marginLeft: "0.5em"}}></i>
                        <h3 style={{margin: "0px"}}>Business Exception Queue</h3>
                    </div>
                    <div className="dashboard-widget-content" style={{overflowY: "auto"}}>
                        {!BEQSummaryList && (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                        <div className="shortcuts">
                            {BEQSummaryList && BEQSummaryList.map((Exception, index) => (
                                <a key={index} href={`#/businessexception/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? "shortcut-danger" : "shortcut-info"}`}>
                                    <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? "shortcut-header" : "shortcut-headerSuccess"}`}>{Exception.ExceptionName}</span>
                                    <span className="value">{Exception.NoOfExceptions}</span><br />
                                    <span className="value">{Exception.DateTime}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{marginLeft: "0.5em"}}></i>
                        <h3 style={{margin: "0px"}}>Technical Exception Queue</h3>
                    </div>
                    <div className="dashboard-widget-content" style={{overflowY: "auto"}}>
                        {!TEQSummaryList && (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        )}
                        <div className="shortcuts">
                            {TEQSummaryList && TEQSummaryList.map((Exception, index) => (
                                <a key={index} href={`#/Exceptions/${Exception.ExceptionName}`} className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? "shortcut-danger" : "shortcut-info"}`}>
                                    <span className={`${Exception.NoOfExceptions >= Exception.ThreshholdCount ? "shortcut-header" : "shortcut-headerSuccess"}`}>{Exception.ExceptionName}</span>
                                    <span className="value">{Exception.NoOfExceptions}</span><br />
                                    <span className="value">{Exception.DateTime}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;