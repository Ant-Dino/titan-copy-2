import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Initial state
const initialState = {
    currentUser: {},
    hasAccess: false,
    isUser: true,
    hasBEQAccess: false,
    hasTEQAccess: false,
    BEQSummaryList: [],
    TEQSummaryList: []
};

// Action types
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SET_HAS_ACCESS = 'SET_HAS_ACCESS';
const SET_IS_USER = 'SET_IS_USER';
const SET_HAS_BEQ_ACCESS = 'SET_HAS_BEQ_ACCESS';
const SET_HAS_TEQ_ACCESS = 'SET_HAS_TEQ_ACCESS';
const SET_BEQ_SUMMARY_LIST = 'SET_BEQ_SUMMARY_LIST';
const SET_TEQ_SUMMARY_LIST = 'SET_TEQ_SUMMARY_LIST';

// Reducers
const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return { ...state, currentUser: action.payload };
        case SET_HAS_ACCESS:
            return { ...state, hasAccess: action.payload };
        case SET_IS_USER:
            return { ...state, isUser: action.payload };
        case SET_HAS_BEQ_ACCESS:
            return { ...state, hasBEQAccess: action.payload };
        case SET_HAS_TEQ_ACCESS:
            return { ...state, hasTEQAccess: action.payload };
        case SET_BEQ_SUMMARY_LIST:
            return { ...state, BEQSummaryList: action.payload };
        case SET_TEQ_SUMMARY_LIST:
            return { ...state, TEQSummaryList: action.payload };
        default:
            return state;
    }
};

// Combine reducers if there are multiple reducers, for this example we only have one
const rootReducer = combineReducers({
    dashboard: dashboardReducer
});

// Store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;