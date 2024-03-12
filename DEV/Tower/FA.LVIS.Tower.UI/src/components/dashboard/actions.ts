import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSuccess, getUserFailure } from './userSlice'; // Correct the path as necessary
import { RootState } from './store'; // Adjust the import path to your store file

const UserComponent: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.userData);
  const error = useSelector((state: RootState) => state.user.error);

  useEffect(() => {
    // Simulate fetching user data
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        dispatch(getUserSuccess(data));
       } catch (error) {
        dispatch(getUserFailure('Failed to load user data'));
       }
     };

    fetchData();
   }, [dispatch]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {userData ? <p>User data loaded successfully</p> : <p>Loading user data...</p>}
     </div>
   );
};

export default UserComponent;