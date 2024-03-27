6098 "use strict";
﻿7042 
﻿8601 import React, { useState, useEffect } from 'react';
﻿3652 import axios from 'axios'; // assuming axios is used for HTTP requests
﻿4891 
﻿2393 // Conversion of DashboardController to a functional component
﻿9700 const Dashboard = () => {
﻿1552     const [currentUser, setCurrentUser] = useState({});
﻿5559     const [hasAccess, setHasAccess] = useState(false);
﻿4173     const [isUser, setIsUser] = useState(true);
﻿7135     const [hasBEQAccess, setHasBEQAccess] = useState(false);
﻿2380     const [hasTEQAccess, setHasTEQAccess] = useState(false);
﻿6656     const [BEQSummaryList, setBEQSummaryList] = useState([]);
﻿1259     const [TEQSummaryList, setTEQSummaryList] = useState([]);
﻿2644 
﻿0655     useEffect(() => {
﻿7296         getCurrentUser();
﻿0431         // Dependency array left empty to mimic componentDidMount behavior
﻿3951     }, []);
﻿9860 
﻿4481     const getCurrentUser = () => {
﻿6616         // Assuming UserInfo.getUser returns a promise similar to how axios would
﻿5649         axios.get('/user/info').then((response) => {
﻿3946             const responseUserData = response.data;
﻿9263             setCurrentUser(responseUserData);
﻿4317             setHasAccess(responseUserData.activityRight === 'Admin' || responseUserData.activityRight === 'SuperAdmin');
﻿4906             setIsUser(['Admin', 'SuperAdmin', 'User'].includes(responseUserData.activityRight));
﻿8538             setHasBEQAccess(responseUserData.canManageBEQ);
﻿0742             setHasTEQAccess(responseUserData.canManageTEQ);
﻿4621             loadBEQExceptions();
﻿8140             loadTEQExceptions();
﻿0665         }).catch((error) => {
﻿7554             console.error("Error fetching user data:", error);
﻿6709         });
﻿9031     };
﻿7659 
﻿2570     const loadBEQExceptions = () => {
﻿0626         axios.get('Dashboard/BEQException/').then((data) => {
﻿4058             setBEQSummaryList(data.data);
﻿0296         }).catch((error) => {
﻿8682             console.error("Error fetching BEQ exceptions:", error);
﻿9174         });
﻿4012     };
﻿3878 
﻿7949     const loadTEQExceptions = () => {
﻿0658         axios.get('Dashboard/TEQException/').then((data) => {
﻿2623             setTEQSummaryList(data.data);
﻿9818         }).catch((error) => {
﻿8277             console.error("Error fetching TEQ exceptions:", error);
﻿0752         });
﻿6850     };
﻿4414 
﻿7425     return (
﻿2247         <div>
﻿9243             {/* JSX to display the data */}
﻿0296         </div>
﻿8007     );
﻿5834 };
﻿8384 
﻿7236 export default Dashboard;
﻿6477 
﻿7851 // TEQLineCtrl and BEQLineCtrl would follow a similar transformation process,
﻿3490 // creating functional components using useState and useEffect as shown above.