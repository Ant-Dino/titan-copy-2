import React, { useEffect, useState } from 'react';
import Axios from 'axios'; // Assuming Axios is used for HTTP requests
import PsDashboardTemplate from './PsDashboardTemplate'; // Adjust the import path accordingly

type UserInfoType = {
    UserName: string;
    ActivityRight: string;
    CanManageTEQ: boolean;
    CanManageBEQ: boolean;
    CanAccessReq: boolean;
};

const PsDashboard: React.FC = () => {
    const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
    const [hasAccess, setHasAccess] = useState<boolean>(false);
    const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
    const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await Axios.get<UserInfoType>('UserInfo/getUser');
                setUserInfo(response.data);

                if (['Admin', 'SuperAdmin'].includes(response.data.ActivityRight)) {
                    setHasAccess(true);
                }
                if (response.data.CanManageBEQ) {
                    setHasBEQAccess(true);
                }
                if (response.data.CanManageTEQ) {
                    setHasTEQAccess(true);
                }

                // Assuming LoadBEQExceptions and LoadTEQExceptions would set their respective summary lists
                LoadBEQExceptions();
                LoadTEQExceptions();
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserInfo();
    }, []);

    const LoadBEQExceptions = async () => {
        const response = await Axios.get('Dashboard/BEQException/');
        setBEQSummaryList(response.data);
    };

    const LoadTEQExceptions = async () => {
        const response = await Axios.get('Dashboard/TEQException/');
        setTEQSummaryList(response.data);
    };

    return (
        <div>
            <PsDashboardTemplate />
            {/* Display BEQ and TEQ summary lists, and any other user info as needed */}
        </div>
    );
};

export default PsDashboard;