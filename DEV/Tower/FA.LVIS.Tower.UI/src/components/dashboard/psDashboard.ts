// Import necessary modules
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getUserSuccess, getUserFailure } from './actions';
import { RootState } from './store'; // Assuming you have a Redux store setup
import psDashboardTemplate from './psDashboardTemplate';

// Define props and state interfaces
interface DashboardProps {
    canmanagebeq?: boolean;
    canmanageteq?: boolean;
    activityright?: string;
    getUser: () => void;
}

interface UserState {
    activityright: string;
    canmanageteq: boolean;
    canmanagebeq: boolean;
    canmanageaccessreq: boolean;
}

// PS Dashboard Component using React Functional Component
const PsDashboard: React.FC<DashboardProps> = ({ canmanagebeq, canmanageteq, activityright, getUser }) => {
    const [userState, setUserState] = useState<UserState>({
        activityright: '',
        canmanageteq: false,
        canmanagebeq: false,
        canmanageaccessreq: false,
    });

    useEffect(() => {
        getUser();
        loadBEQExceptions();
        loadTEQExceptions();
        // eslint-disable-next-line
    }, [canmanageteq, canmanagebeq]);

    const loadBEQExceptions = async () => {
        try {
            const response = await axios.get('Dashboard/BEQException/');
            console.log(response.data); // Do something with BEQ exception data
        } catch (error) {
            console.error('Failed to load BEQ Exceptions', error);
        }
    };

    const loadTEQExceptions = async () => {
        try {
            const response = await axios.get('Dashboard/TEQException/');
            console.log(response.data); // Do something with TEQ exception data
        } catch (error) {
            console.error('Failed to load TEQ Exceptions', error);
        }
    };

    return (
        <div>{/* psDashboardTemplate or other JSX */}</div>
    );
};

// Redux connect and mapStateToProps, mapDispatchToProps
const mapStateToProps = (state: RootState) => ({
    canmanagebeq: state.user.canmanagebeq,
    canmanageteq: state.user.canmanageteq,
    activityright: state.user.activityright,
});

const mapDispatchToProps = (dispatch: any) => ({
    getUser: () => {
        axios.get('/user/info').then(response => {
            dispatch(getUserSuccess(response.data));
        }).catch(error => {
            dispatch(getUserFailure(error));
        });
    },
});

// Connect PsDashboard component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(PsDashboard);