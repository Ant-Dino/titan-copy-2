// Import statements for React, Redux, TypeScript, and any actions or components needed.
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import * as actionCreators from './actions'; 
import { psDashboardTemplate as PsDashboardTemplate } from './PsDashboardTemplate'; 
import { RootState } from './store'; // Assuming types for rootReducer
import { UserInfoState, UserAction } from './types'; // Define or import these types according to your state management structure

/* Assuming actions.ts contains getUser, loadBEQExceptions, and loadTEQExceptions actions */

// DashboardComponent as a functional React component using TypeScript
const DashboardComponent: React.FC = () => {
  const dispatch = useDispatch();
  const userInfo: UserInfoState = useSelector((state: RootState) => state.userInfo); // Assume the format based on your rootReducer

  // State hooks for local component state
  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [hasBEQAccess, setHasBEQAccess] = useState<boolean>(false);
  const [hasTEQAccess, setHasTEQAccess] = useState<boolean>(false);

  // Effect hook to dispatch action on component mount and define access rights
  useEffect(() => {
        // Dispatching getUser action on component mount
    dispatch(actionCreators.getUser());
     
        // Conditional checks to set access rights based on userInfo state
    if (userInfo.canManageBEQ) {
      setHasBEQAccess(true);
             }
    if (userInfo.canManageTEQ) {
      setHasTEQAccess(true);
             }
    if (['Admin', 'SuperAdmin'].includes(userInfo.activityRight)) {
      setHasAccess(true);
             }
          }, [dispatch, userInfo.canManageBEQ, userInfo.canManageTEQ, userInfo.activityRight]);

  // Effect hook to load exceptions based on permissions
  useEffect(() => {
    if (hasBEQAccess) {
      dispatch(actionCreators.loadBEQExceptions());
             }
    if (hasTEQAccess) {
      dispatch(actionCreators.loadTEQExceptions());
             }
         }, [dispatch, hasBEQAccess, hasTEQAccess]);

  // Return statement to render UI
  return (
    <div>
      <PsDashboardTemplate
        hasAccess={hasAccess}
        hasBEQAccess={hasBEQAccess}
        hasTEQAccess={hasTEQAccess}
         />
         {/* Additional JSX can be added here */}
    </div>
         );
       };

// Connection of DashboardComponent with Redux store through connect HOC (Not needed if using useSelector/useDispatch)
export default connect(
  (state: RootState) => ({
    userInfo: state.userInfo,
        }), 
  actionCreators
)(DashboardComponent);