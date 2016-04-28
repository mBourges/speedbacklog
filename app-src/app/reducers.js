import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import issueList from '../modules/issueList/reducer';
import addIssue from '../modules/addIssue/reducer';
import issue from '../modules/issue/reducer';
import addComment from '../modules/addComment/reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    issueList,
    addIssue,
    issue,
    addComment
});

export default rootReducer;