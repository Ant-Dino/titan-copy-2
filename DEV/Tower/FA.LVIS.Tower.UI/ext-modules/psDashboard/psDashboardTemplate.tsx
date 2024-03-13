import React, { useEffect, useState } from 'react';
import axios from 'axios';
interface ExceptionSummary {
    ExceptionName: string;
    NoOfExceptions: number;
    ThreshholdCount: number;
    DateTime: string;
const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [BEQSummaryList, setBEQSummaryList] = useState<ExceptionSummary[]>([]);
    const [TEQSummaryList, setTEQSummaryList] = useState<ExceptionSummary[]>([]);
    const [loadingBEQ, setLoadingBEQ] = useState(true);
    const [loadingTEQ, setLoadingTEQ] = useState(true);
    useEffect(() => {
        getCurrentUser();
    }, []);
    const getCurrentUser = async () => {
        try {
            const response = await axios.get('/user/info'); // Adjust with actual endpoint
            setCurrentUser(response.data);
            loadBEQExceptions();
            loadTEQExceptions();
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    const loadBEQExceptions = async () => {
        try {
            const response = await axios.get('/Dashboard/BEQException/');
            setBEQSummaryList(response.data);
            setLoadingBEQ(false);
        } catch (error) {
            console.error('Error fetching BEQ data:', error);
        }
    };
    const loadTEQExceptions = async () => {
        try {
            const response = await axios.get('/Dashboard/TEQException/');
            setTEQSummaryList(response.data);
            setLoadingTEQ(false);
        } catch (error) {
            console.error('Error fetching TEQ data:', error);
        }
    };
    return (
        <div>
            <div className="ps-dashboard-header">
                {loadingBEQ ? (
                    <div>Loading BEQ...</div>
                ) : (
                    <div>
                        {BEQSummaryList.map((exception, index) => (
                            <div key={index}>
                                <div>{exception.ExceptionName}</div>
                                <div>{exception.NoOfExceptions}</div>
                            </div>
                        ))}
                    </div>
                )}
                {loadingTEQ ? (
                    <div>Loading TEQ...</div>
                ) : (
                    <div>
                        {TEQSummaryList.map((exception, index) => (
                            <div key={index}>
                                <div>{exception.ExceptionName}</div>
                                <div>{exception.NoOfExceptions}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Dashboard;