import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [currentUser, setCurrentUser] = useState({});
    const [BEQSummaryList, setBEQSummaryList] = useState([]);
    const [TEQSummaryList, setTEQSummaryList] = useState([]);

    const [hasAccess, setHasAccess] = useState(false);
    const [isUser, setIsUser] = useState(true);
    const [hasBEQAccess, setHasBEQAccess] = useState(false);
    const [hasTEQAccess, setHasTEQAccess] = useState(false);

    useEffect(() => {
        const fetchUserAndExceptions = async () => {
            try {
                const userResponse = await axios.get('UserInfo/getUser');
                setCurrentUser(userResponse.data);
                setHasAccess(userResponse.data.activityright === 'Admin' || userResponse.data.activityright === 'SuperAdmin');
                setIsUser(['Admin', 'SuperAdmin', 'User'].includes(userResponse.data.activityright));
                setHasBEQAccess(userResponse.data.canmanagebeq);
                setHasTEQAccess(userResponse.data.canmanageteq);

                if (userResponse.data.canmanagebeq) {
                    const beqResponse = await axios.get('Dashboard/BEQException/');
                    setBEQSummaryList(beqResponse.data);
                }

                if (userResponse.data.canmanageteq) {
                    const teqResponse = await axios.get('Dashboard/TEQException/');
                    setTEQSummaryList(teqResponse.data);
                }
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchUserAndExceptions();

        // Optionally, you could set intervals to refresh the data as shown in the AngularJS controllers
        // const intervalId = setInterval(fetchUserAndExceptions, 900000);
        // return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="dashboard">
            {hasAccess && (
                <div>
                    <h2>Admin Dashboard</h2>
                    {/* Render Admin-specific components / info */}
                </div>
            )}
            {!isUser && (
                <p>You do not have the appropriate access rights.</p>
            )}
            {hasBEQAccess && BEQSummaryList.length > 0 && (
                <div>
                    <h3>BEQ Exceptions</h3>
                    <ul>
                        {BEQSummaryList.map((item, index) => (
                            <li key={index}>{item}</li> // Assuming 'item' can be directly rendered. You'll need to adjust based on the actual data structure
                        ))}
                    </ul>
                </div>
            )}
            {hasTEQAccess && TEQSummaryList.length > 0 && (
                <div>
                    <h3>TEQ Exceptions</h3>
                    <ul>
                        {TEQSummaryList.map((item, index) => (
                            <li key={index}>{item}</li> // Again, assuming 'item' can be directly rendered
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dashboard;