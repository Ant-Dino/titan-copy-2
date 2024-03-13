import React, { useState, useEffect } from 'react';
import axios from 'axios';
interface Exception {
    ExceptionName: string;
    NoOfExceptions: number;
    ThreshholdCount: number;
    DateTime: string;
}
interface GraphData {
    Hour: string;
    NewCount: number;
    ActiveCount: number;
    HoldCount: number;
    ArchiveCount: number;
    QueueCount: number;
}
const DashboardComponent: React.FC = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [BEQSummaryList, setBEQSummaryList] = useState<Exception[]>([]);
    const [TEQSummaryList, setTEQSummaryList] = useState<Exception[]>([]);
    const [BEQGraphData, setBEQGraphData] = useState<GraphData[]>([]);
    const [TEQGraphData, setTEQGraphData] = useState<GraphData[]>([]);

    useEffect(() => {
        getCurrentUser();
        loadBEQExceptions();
        loadTEQExceptions();
    }, []);

    const getCurrentUser = async () => {
        try {
            const response = await axios.get('/api/userinfo');
            setCurrentUser(response.data);
            // Typically broadcast this user info or store in a global state
        } catch (error) {
            console.log(error);
        }
    };

    const loadBEQExceptions = async () => {
        try {
            const response = await axios.get('/Dashboard/BEQException/');
            setBEQSummaryList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const loadTEQExceptions = async () => {
        try {
            const response = await axios.get('/Dashboard/TEQException/');
            setTEQSummaryList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="ps-dashboard-header">
                <br /><br />
                <div>
                    <div className="col-md-6">
                        <div className="widget widget-nopad">
                            <div className="widget-header">
                                <i className="fa fa-exclamation-triangle" style={{marginLeft:'0.5em'}}></i>
                                <h3 style={{margin:'0px'}}>Business Exception Queue</h3>
                            </div>
                            <div className="dashboard-widget-content" style={{overflowY:'auto'}}>
                                {!BEQSummaryList && (
                                    <div>
                                        <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                )}
                                <div className="shortcuts">
                                    {BEQSummaryList.map((exception: Exception, index) => (
                                        <a key={index} href={`#/businessexception/${exception.ExceptionName}`} className={`shortcut ${exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-danger' : 'shortcut-info'}`}>
                                            <span className={exception.NoOfExceptions >= exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>{exception.ExceptionName}</span>
                                            <span className="value">{exception.NoOfExceptions}</span><br />
                                            <span className="value">{exception.DateTime}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Additional widget sections can be added here following the same structure */}
                </div>
            </div>
        </div>
    );
};

export default DashboardComponent;