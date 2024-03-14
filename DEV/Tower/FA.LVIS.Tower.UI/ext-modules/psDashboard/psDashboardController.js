import React, { useEffect, useState } from "react";
import axios from "axios";

type UserInfoType = {
  UserName: string;
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq: boolean;
};

type GraphDataType = {
  Hour: string;
  NewCount: number;
  ActiveCount: number;
  HoldCount: number;
  ArchiveCount: number;      
  QueueCount: number;
};

const Dashboard: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [isUser, setIsUser] = useState<boolean>(true);
  const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
  const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);
  const [BEQSummaryList, setBEQSummaryList] = useState<any[]>([]);
  const [TEQSummaryList, setTEQSummaryList] = useState<any[]>([]);
  
  const [TEQGraphData, setTEQGraphData] = useState<GraphDataType[]>([]);
  const [BEQGraphData, setBEQGraphData] = useState<GraphDataType[]>([]);

  useEffect(() => {
    getCurrentUser();

    const interval = setInterval(() => {
      loadTEQExceptions();
      loadBEQExceptions();
    }, 900000); // Refresh data every 15 mins

    return () => clearInterval(interval);
  }, []);

  const getCurrentUser = async () => {
    try {
      const response = await axios.get<UserInfoType>("/api/UserInfo");
      setUserInfo(response.data);
      setHasAccess(['Admin', 'SuperAdmin'].includes(response.data.ActivityRight));
      setIsUser(!['Admin', 'SuperAdmin', 'User'].includes(response.data.ActivityRight));
      setHasBEQAccess(response.data.CanManageBEQ);
      setHasTEQAccess(response.data.CanManageTEQ);
      loadBEQExceptions();
      loadTEQExceptions();
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  };

  const loadTEQExceptions = async () => {
    const response = await axios.get<GraphDataType[]>("/Dashboard/TEQException/");
    setTEQGraphData(response.data);
  };

  const loadBEQExceptions = async () => {
    const response = await axios.get<GraphDataType[]>("/Dashboard/BEQException/");
    setBEQGraphData(response.data);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {userInfo && (
        <div>
          <p>Username: {userInfo.UserName}</p>
          <p>Has Access: {hasAccess ? "Yes" : "No"}</p>
          <p>Is User: {isUser ? "Yes" : "No"}</p>
          <p>Can Manage TEQ: {hasTEQAccess ? "Yes" : "No"}</p>
          <p>Can Manage BEQ: {hasBEQAccess ? "Yes" : "No"}</p>
        </div>
      )}

      <div>
        <h3>TEQ Exceptions</h3>
        {/* Graph or list representation of TEQ Exceptions */}
      </div>

      <div>
        <h3>BEQ Exceptions</h3>
        {/* Graph or list representation of BEQ Exceptions */}
      </div>
    </div>
  );
};

export default Dashboard;