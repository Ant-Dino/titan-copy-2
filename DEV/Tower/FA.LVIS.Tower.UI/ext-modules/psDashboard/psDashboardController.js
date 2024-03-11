import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

type UserInfo = {
    ActivityRight: string;
    CanManageTEQ: boolean;
    CanManageBEQ: boolean;
    CanAccessReq: boolean;
};

type ExceptionData = any[];

const DashboardContext = React.createContext({});

const useDashboard = () => useContext(DashboardContext);

const DashboardProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);
    const [BEQSummaryList, setBEQSummaryList] = useState<ExceptionData>([]);
    const [TEQSummaryList, setTEQSummaryList] = useState<ExceptionData>([]);

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const { data } = await axios.get<UserInfo>('/path-to-get-user-info');
                setCurrentUser(data);
                if (data) {
                    loadBEQExceptions();
                    loadTEQExceptions();
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        getCurrentUser();
    }, []);

    const loadBEQExceptions = async () => {
        try {
            const { data } = await axios.get<ExceptionData>('Dashboard/BEQException/');
            setBEQSummaryList(data);
        } catch (error) {
            console.error('Error fetching BEQ exceptions:', error);
        }
    };

    const loadTEQExceptions = async () => {
        try {
            const { data } = await axios.get<ExceptionData>('Dashboard/TEQException/');
            setTEQSummaryList(data);
        } catch (error) {
            console.error('Error fetching TEQ exceptions:', error);
        }
    };

    return (
        <DashboardContext.Provider value={{ currentUser, BEQSummaryList, TEQSummaryList, loadBEQExceptions, loadTEQExceptions }}>
            {children}
        </DashboardContext.Provider>
    );
};

const Dashboard: React.FC = () => {
    const { currentUser, BEQSummaryList, TEQSummaryList } = useDashboard();

    const hasBEQAccess = currentUser?.CanManageBEQ ?? false;
    const hasTEQAccess = currentUser?.CanManageTEQ ?? false;
    const hasAccess = ['Admin', 'SuperAdmin'].includes(currentUser?.ActivityRight || '');

    return (
        <div>
            <h1>Dashboard</h1>
            {/* Render your data and UI based on the state */}
        </div>
    );
};

const TEQLineChartComponent: React.FC = () => {
    const { currentUser, loadTEQExceptions } = useDashboard();

    useEffect(() => {
        if (currentUser) {
            loadTEQExceptions();
            // You can set your interval here if required
        }
    }, [currentUser, loadTEQExceptions]);

    // Render your TEQ line chart based on your state.
    return <div>TEQ Line Chart</div>;
};

const BEQLineChartComponent: React.FC = () => {
    const { currentUser, loadBEQExceptions } = useDashboard();

    useEffect(() => {
        if (currentUser) {
            loadBEQExceptions();
            // You can set your interval here if required
        }
    }, [currentUser, loadBEQExceptions]);

    // Render your BEQ line chart based on your state.
    return <div>BEQ Line Chart</div>;
};

export const App = () => {
    return (
        <DashboardProvider>
            <Dashboard />
            <TEQLineChartComponent />
            <BEQLineChartComponent />
        </DashboardProvider>
    );
};