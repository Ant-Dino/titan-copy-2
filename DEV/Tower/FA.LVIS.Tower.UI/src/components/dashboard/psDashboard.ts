import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from './UserInfo';
import { fetchUserInfo } from './actions';
import psDashboardTemplate from './psDashboardTemplate'; // Import your psDashboardTemplate component

interface StateProps {
    activityRight?: string;
    canManageTEQ?: boolean;
    canManageBEQ?: boolean;
    canAccessReq?: boolean;
}

interface DispatchProps {
    fetchUserInfo: () => void;
}

type Props = StateProps & DispatchProps;

const DashboardComponent: React.FC<Props> = ({ fetchUserInfo, activityRight, canManageTEQ, canManageBEQ }) => {
    const [hasAccess, setHasAccess] = useState<boolean>(false);
    const [isUser, setIsUser] = useState<boolean>(true);
    const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
    const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);

    useEffect(() => {
        fetchUserInfo();

        getUserInfo().then(response => {
            // Simulation of setting state based on the response similar to $rootScope.$broadcast in AngularJS
            if(canManageBEQ) setHasBEQAccess(true);
            if(canManageTEQ) setHasTEQAccess(true);
            if(['Admin', 'SuperAdmin'].includes(activityRight ?? '')) setHasAccess(true);
            if(!['Admin', 'SuperAdmin', 'User'].includes(activityRight ?? '')) setIsUser(false);
        });
        // Re-fetches TEQ and BEQ exceptions every 15 minutes similar to $interval in AngularJS
        const interval = setInterval(() => {
            // LoadTEQExceptions();
            // LoadBEQExceptions();
        }, 900000);

        return () => clearInterval(interval);

    }, [fetchUserInfo, canManageTEQ, canManageBEQ, activityRight]);

    return (
        <div>
            {psDashboardTemplate}
            {/* Additional JSX based on state and props */}
            <div>Access: {hasAccess ? 'Yes' : 'No'}</div>
            {/* other elements based on the state */}
        </div>
    );
};

const mapStateToProps = (state: any): StateProps => ({
    // Assuming the state shape, replace with actual state path
});

const mapDispatchToProps: DispatchProps = {
    fetchUserInfo,
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(DashboardComponent);