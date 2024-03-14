import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [beqSummaryList, setBeqSummaryList] = useState([]);
    const [teqSummaryList, setTeqSummaryList] = useState([]);
    const [beqLineData, setBeqLineData] = useState({});
    const [teqLineData, setTeqLineData] = useState({});
    useEffect(() => {
        getCurrentUser();
    }, []);
    const getCurrentUser = async () => {
        try {
            const response = await axios.get('UserInfo/getUser'); // Assuming 'UserInfo/getUser' is the correct endpoint
            setCurrentUser(response.data);
            loadBeqExceptions();
            loadTeqExceptions();
        } catch (error) {
            console.error("Error fetching current user", error);
        }
    };
    const loadBeqExceptions = async () => {
        try {
            const response = await axios.get('Dashboard/BEQException/');
            setBeqSummaryList(response.data);
        } catch (error) {
            console.error("Error fetching BEQ exceptions", error);
        }
    };
    const loadTeqExceptions = async () => {
        try {
            const response = await axios.get('Dashboard/TEQException/');
            setTeqSummaryList(response.data);
        } catch (error) {
            console.error("Error fetching TEQ exceptions", error);
        }
    };
    return (
        <div>
            {/* Business Exception Queue */}
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{marginLeft:"0.5em"}}></i>
                        <h3 style={{margin:"0px"}}>Business Exception Queue</h3>
                    </div>
                    <div className="dashboard-widget-content" style={{overflowY:"auto"}}>
                        {!beqSummaryList &&
                            <>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </>
                        }
                        <div className="shortcuts">
                            {beqSummaryList.map((Exception, index) => (
                                <a href={`#/businessexception/${Exception.ExceptionName}`} key={index} 
                                    className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}`}>
                                    <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
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
            {/* Technical Exception Queue */}
            <div className="col-md-6">
                <div className="widget widget-nopad">
                    <div className="widget-header">
                        <i className="fa fa-exclamation-triangle" style={{marginLeft:"0.5em"}}></i>
                        <h3 style={{margin:"0px"}}>Technical Exception Queue</h3>
                    </div>
                    <div className="dashboard-widget-content" style={{overflowY:"auto"}}>
                        {!teqSummaryList &&
                            <>
                                <i className="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
                                <span className="sr-only">Loading...</span>
                            </>
                        }
                        <div className="shortcuts">
                            {teqSummaryList.map((Exception, index) => (
                                <a href={`#/Exceptions/${Exception.ExceptionName}`} key={index}
                                    className={`shortcut ${Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut shortcut-danger' : 'shortcut shortcut-info'}`}>
                                    <span className={Exception.NoOfExceptions >= Exception.ThreshholdCount ? 'shortcut-header' : 'shortcut-headerSuccess'}>
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
        </div>
    );
};
export default Dashboard;