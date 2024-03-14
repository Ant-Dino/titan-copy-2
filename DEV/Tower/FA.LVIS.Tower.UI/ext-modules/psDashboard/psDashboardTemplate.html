import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [BEQSummaryList, setBEQSummaryList] = useState(null);
    const [TEQSummaryList, setTEQSummaryList] = useState(null);
    const [BEQGraphData, setBEQGraphData] = useState(null);
    const [TEQGraphData, setTEQGraphData] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingBEQ, setLoadingBEQ] = useState(true);
    const [loadingTEQ, setLoadingTEQ] = useState(true);
    const [loadingGraphBEQ, setLoadingGraphBEQ] = useState(true);
    const [loadingGraphTEQ, setLoadingGraphTEQ] = useState(true);

    useEffect(() => {
        fetchCurrentUser();
        fetchBEQSummaryList();
        fetchTEQSummaryList();
        fetchBEQGraphData();
        fetchTEQGraphData();
    }, []);

    const fetchCurrentUser = async () => {
        try {
            const response = await axios.get('Security/GetCurrentUser/');
            setCurrentUser(response.data);
        } catch (error) {
            console.error("Failed to fetch current user", error);
        } finally {
            setLoadingUser(false);
        }
    };

    const fetchBEQSummaryList = async () => {
        try {
            const response = await axios.get('Dashboard/BEQException/');
            setBEQSummaryList(response.data);
        } catch (error) {
            console.error("Failed to fetch BEQ summary list", error);
        } finally {
            setLoadingBEQ(false);
        }
    };

    const fetchTEQSummaryList = async () => {
        try {
            const response = await axios.get('Dashboard/TEQException/');
            setTEQSummaryList(response.data);
        } catch (error) {
            console.error("Failed to fetch TEQ summary list", error);
        } finally {
            setLoadingTEQ(false);
        }
    };

    const fetchBEQGraphData = async () => {
        try {
            const response = await axios.get('Dashboard/GraphicalBEQException/');
            setBEQGraphData(response.data);
        } catch (error) {
            console.error("Failed to fetch BEQGraph data", error);
        } finally {
            setLoadingGraphBEQ(false);
        }
    };

    const fetchTEQGraphData = async () => {
        try {
            const response = await axios.get('Dashboard/GraphicalTEQException/');
            setTEQGraphData(response.data);
        } catch (error) {
            console.error("Failed to fetch TEQGraph data", error);
        } finally {
            setLoadingGraphTEQ(false);
        }
    };

    return (
        <div>
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    {loadingBEQ ? (
                        <div>Loading BEQ Summary...</div>
                    ) : (
                        BEQSummaryList && BEQSummaryList.map((Exception, index) => (
                            <div key={index}>
                                <span>{Exception.ExceptionName}</span>
                                <span>{Exception.NoOfExceptions}</span>
                                <span>{Exception.DateTime}</span>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="col-md-6">
                {loadingTEQ ? (
                    <div>Loading TEQ Summary...</div>
                ) : (
                    TEQSummaryList && TEQSummaryList.map((Exception, index) => (
                        <div key={index}>
                            <span>{Exception.ExceptionName}</span>
                            <span>{Exception.NoOfExceptions}</span>
                            <span>{Exception.DateTime}</span>
                        </div>
                    ))
                )}
            </div>
            {/* Additional JSX for BEQ and TEQ Graph Data can be similarly rendered */}
        </div>
    );
};

export default Dashboard;