import React, { useEffect, useState } from 'react';
import UserInfoService from './UserInfoService'; // This represents the userInfo service
import { psDashboardTemplate } from './psDashboardTemplate'; // Import the template as a React component

const PsDashboardComponent: React.FC = () => {
 const [currentUser, setCurrentUser] = useState<any>(null);
 const [hasAccess, setHasAccess] = useState<boolean>(false);
 const [isUser, setIsUser] = useState<boolean>(true);
 const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
 const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);
 const [BEQSummaryList, setBEQSummaryList] = useState([]);
 const [TEQSummaryList, setTEQSummaryList] = useState([]);

 useEffect(() => {
   UserInfoService.getUser().then((response) => {
     setCurrentUser(response);
     setHasBEQAccess(response.CanManageBEQ);
     setHasTEQAccess(response.CanManageTEQ);

     if (response.ActivityRight === 'Admin' || response.ActivityRight === 'SuperAdmin') {
       setHasAccess(true);
     }
     if (response.ActivityRight !== 'Admin' && response.ActivityRight !== 'SuperAdmin' && response.ActivityRight !== 'User') {
       setIsUser(false);
     }

     loadBEQExceptions();
     loadTEQExceptions();
   });
 }, []);

 const loadBEQExceptions = () => {
   fetch('Dashboard/BEQException/')
     .then((response) => response.json())
     .then((data) => setBEQSummaryList(data));
 };

 const loadTEQExceptions = () => {
   fetch('Dashboard/TEQException/')
     .then((response) => response.json())
     .then((data) => setTEQSummaryList(data));
 };

 // Simulating the interval effect as per the original AngularJS code.
 useEffect(() => {
   const intervalTEQ = setInterval(loadTEQExceptions, 900000);
   const intervalBEQ = setInterval(loadBEQExceptions, 900000);

   return () => {
     clearInterval(intervalTEQ);
     clearInterval(intervalBEQ);
   };
 }, []);

 return (
   <psDashboardTemplate
     currentUser={currentUser}
     hasAccess={hasAccess}
     isUser={isUser}
     hasBEQAccess={hasBEQAccess}
     hasTEQAccess={hasTEQAccess}
     BEQSummaryList={BEQSummaryList}
     TEQSummaryList={TEQSummaryList}
   />
 );
};

export default PsDashboardComponent;