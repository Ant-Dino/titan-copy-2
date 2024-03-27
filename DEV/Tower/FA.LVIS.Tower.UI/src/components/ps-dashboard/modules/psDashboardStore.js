import { createStore, combineReducers } from 'redux';

// Define initial state
const initialState = {
  activityRight: '',
  canManageTEQ: false,
  canManageBEQ: false,
  canManageAccessReq: false,
  currentUser: {},
  BEQSummaryList: [],
  TEQSummaryList: [],
};

// Action types
const SET_ACTIVITY_RIGHT = 'SET_ACTIVITY_RIGHT';
const SET_CAN_MANAGE_TEQ = 'SET_CAN_MANAGE_TEQ';
const SET_CAN_MANAGE_BEQ = 'SET_CAN_MANAGE_BEQ';
const SET_CAN_MANAGE_ACCESS_REQ = 'SET_CAN_MANAGE_ACCESS_REQ';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SET_BEQ_SUMMARY_LIST = 'SET_BEQ_SUMMARY_LIST';
const SET_TEQ_SUMMARY_LIST = 'SET_TEQ_SUMMARY_LIST';

// Reducers
const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVITY_RIGHT:
      return { ...state, activityRight: action.payload };
    case SET_CAN_MANAGE_TEQ:
      return { ...state, canManageTEQ: action.payload };
    case SET_CAN_MANAGE_BEQ:
      return { ...state, canManageBEQ: action.payload };
    case SET_CAN_MANAGE_ACCESS_REQ:
      return { ...state, canManageAccessReq: action.payload };
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case SET_BEQ_SUMMARY_LIST:
      return { ...state, BEQSummaryList: action.payload };
    case SET_TEQ_SUMMARY_LIST:
      return { ...state, TEQSummaryList: action.payload };
    default:
      return state;
  }
};

// Combine reducers if there are more in the future
const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;