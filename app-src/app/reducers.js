import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import issueList from '../modules/issueList/reducer';
import addIssue from '../modules/addIssue/reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    issueList,
    addIssue
});

export default rootReducer;