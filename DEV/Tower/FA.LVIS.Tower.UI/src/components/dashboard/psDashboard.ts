import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [BEQSummaryList, setBEQSummaryList] = useState(null);
    const [TEQSummaryList, setTEQSummaryList] = useState(null);
    const [graphDataBEQ, setGraphDataBEQ] = useState([]);
    const [graphDataTEQ, setGraphDataTEQ] = useState([]);
    const [loadingBEQ, setLoadingBEQ] = useState(true);
    const [loadingTEQ, setLoadingTEQ] = useState(true);
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response = await axios.get('/api/currentUser');
                setCurrentUser(response.data);
                loadBEQExceptions();
                loadTEQExceptions();
            } catch (error) {
                console.error("Error fetching current user", error);
            }
        };
        getCurrentUser();
    }, []);
    const loadBEQExceptions = async () => {
        try {
            const response = await axios.get('/Dashboard/BEQException/');
            setBEQSummaryList(response.data);
            setLoadingBEQ(false);
        } catch (error) {
            console.error("Error fetching BEQ exceptions", error);
            setLoadingBEQ(false);
        }
    };
    const loadTEQExceptions = async () => {
        try {
            const response = await axios.get('/Dashboard/TEQException/');
            setTEQSummaryList(response.data);
            setLoadingTEQ(false);
        } catch (error) {
            console.error("Error fetching TEQ exceptions", error);
            setLoadingTEQ(false);
        }
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
                        {loadingBEQ ? (
                            <div>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            <div className="shortcuts">
                                {BEQSummaryList && BEQSummaryList.map((Exception, index) => (
                                    <a key={index} href={`/businessexception/${Exception.ExceptionName}`}
                                        className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                        <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
                                            {Exception.ExceptionName}
                                        </span>
                                        <span className="value">{Exception.NoOfExceptions}</span><br />
                                        <span className="value">{Exception.DateTime}</span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            { /* Additional widgets for TEQ, BEQ Line Charts would be similarly mapped here following the pattern above */ }
        </div>
    );
};
export default Dashboard;