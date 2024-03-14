import React, { useEffect, useState } from 'react';
import axios from 'axios';
type UserType = {
  UserName: string;
  ActivityRight: string;
  CanManageTEQ: boolean;
  CanManageBEQ: boolean;
  CanAccessReq?: boolean;
}
type GraphDataType = {
  Hour: string;
  NewCount: number;
  ActiveCount: number;
  HoldCount: number;
  ArchiveCount: number;
  QueueCount: number;
}
const DashboardComponent: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const [teqGraphData, setTeqGraphData] = useState<GraphDataType[]>([]);
  const [beqGraphData, setBeqGraphData] = useState<GraphDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get<UserType>('UserInfoPath');
        setCurrentUser(response.data);
        loadTeqExceptions();
        loadBeqExceptions();
      } catch (error) {
        setError('Failed to fetch user data.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    const loadTeqExceptions = async () => {
      const response = await axios.get<GraphDataType[]>('Dashboard/GraphicalTEQException/');
      setTeqGraphData(response.data);
    };
    const loadBeqExceptions = async () => {
      const response = await axios.get<GraphDataType[]>('Dashboard/GraphicalBEQException/');
      setBeqGraphData(response.data);
    };
    getCurrentUser();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      {currentUser && (
        <div>
          Welcome, {currentUser.UserName}
          {/* Display TEQ and BEQ graph data here */}
        </div>
      )}
    </div>
  );
};
export default DashboardComponent;