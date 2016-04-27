import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import issueList from '../modules/issueList/reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    issueList: issueList,
});

export default rootReducer;