import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserInfo } from './actions'; // Assuming actions.ts is in the same directory
import axios from 'axios';

const PsDashboard: React.FC = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state: any) => state.userInfo.currentUser);
    const [hasAccess, setHasAccess] = useState(false);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response = await axios.get('/UserInfo');
                dispatch(setUserInfo(response.data));
                setAccessRights(response.data);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };
        getCurrentUser();
    }, [dispatch]);

    const setAccessRights = (userInfo: any) => {
        setHasAccess(userInfo.activityright === 'Admin' || userInfo.activityright === 'SuperAdmin');
        setHasBEQAccess(userInfo.canmanagebeq);
        setHasTEQAccess(userInfo.canmanageteq);
    };

    return (
        <div>
            {hasAccess && <p>User has Admin access</p>}
            {hasBEQAccess && <p>User has BEQ access</p>}
            {hasTEQAccess && <p>User has TEQ access</p>}
            {/* Render more UI elements as needed */}
        </div>
    );
};

export default PsDashboard;