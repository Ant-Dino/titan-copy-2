import React, { useState, useEffect } from 'react';
import axios from 'axios';
// This is a combination of psDashboardController, TEQLineCtrl, and BEQLineCtrl into a single React component
const DashboardComponent = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [activityRight, setActivityRight] = useState('');
    const [canManageBEQ, setCanManageBEQ] = useState(false);
    const [canManageTEQ, setCanManageTEQ] = useState(false);
    const [BEQSummaryList, setBEQSummaryList] = useState(null);
    const [TEQSummaryList, setTEQSummaryList] = useState(null);
    const [TEQGraphData, setTEQGraphData] = useState([]);
    const [BEQGraphData, setBEQGraphData] = useState([]);
    // Fetch current user and set permissions
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response = await axios.get('/user/info'); // Adjust URL as necessary
                setCurrentUser(response.data);
                setActivityRight(response.data.ActivityRight);
                setCanManageBEQ(response.data.CanManageBEQ);
                setCanManageTEQ(response.data.CanManageTEQ);
                loadBEQExceptions();
                loadTEQExceptions();
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };
        getCurrentUser();
    }, []);
    const loadBEQExceptions = async () => {
        try {
            const response = await axios.get('/Dashboard/BEQException/');
            setBEQSummaryList(response.data);
        } catch (error) {
            console.error("Failed to fetch BEQ exceptions:", error);
        }
    };
    const loadTEQExceptions = async () => {
        try {
            const response = await axios.get('/Dashboard/TEQException/');
            setTEQSummaryList(response.data);
        } catch (error) {
            console.error("Failed to fetch TEQ exceptions:", error);
        }
    };
    const loadBEQGraph = async () => {
        try {
            const response = await axios.get('/Dashboard/GraphicalBEQException/');
            setBEQGraphData(response.data);
        } catch (error) {
            console.error("Failed to fetch BEQ graph data:", error);
        }
    };
    const loadTEQGraph = async () => {
        try {
            const response = await axios.get('/Dashboard/GraphicalTEQException/');
            setTEQGraphData(response.data);
        } catch (error) {
            console.error("Failed to fetch TEQ graph data:", error);
        }
    };
    return (
        <div>
            <div className="ps-dashboard-header">
                {/* BEQ Exception Queue */}
                <div className="col-md-6">
                    <div className="widget widget-nopad">
                       <div className="widget-header">
                            <i className="fa fa-exclamation-triangle" style={{marginLeft: '0.5em'}}></i>
                            <h3 style={{margin: '0px'}}> Business Exception Queue</h3>
                       </div>
                       <div className="dashboard-widget-content" style={{overflowY: 'auto'}}>
                            {!BEQSummaryList && <div><i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i> <span className="sr-only">Loading...</span></div>}
                            <div className="shortcuts">
                                {BEQSummaryList && BEQSummaryList.map((Exception, index) => (
                                    <a key={index} href={`#/businessexception/${Exception.ExceptionName}`} className={'shortcut ' + (Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-danger' : 'shortcut-info')}>
                                        <span className={Exception.NoOfExceptions >= Exception.ThresholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{Exception.ExceptionName}</span>
                                        <span className="value">{Exception.NoOfExceptions}</span><br />
                                        <span className="value">{Exception.DateTime}</span>
                                    </a>
                                ))}
                            </div>
                       </div>
                   </div>
                </div>
                {/* Technical Exception Queue */}
                <div className="col-md-6">
                   {/* Similar structure for TEQ would go here, adjusted according to TEQSummaryList and other TEQ related state */}
                </div>
            </div>
        </div>
    );
};
export default DashboardComponent;