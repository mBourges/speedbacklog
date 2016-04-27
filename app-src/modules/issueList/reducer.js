import Immutable from 'immutable';
import { FETCH_ISSUE_REQUEST, FETCH_ISSUE_SUCCESS, FETCH_ISSUE_ERROR } from './actions';

const initialState = Immutable.Map({
    isFetching: false,
    issues: Immutable.fromJS([]),
    errorMessage: null
});

const reducer = (state = initialState, action) => {
    let newState = state;
    
    switch (action.type) {
        case FETCH_ISSUE_REQUEST:
            newState = newState.set('isFetching', true);
            break;
        case FETCH_ISSUE_SUCCESS:
            newState = newState.set('isfetching', false);
            newState = newState.set('issues', action.issues);
            break;
         case FETCH_ISSUE_ERROR:
            newState = newState.set('isfetching', false);
            newState = newState.set('errorMessage', action.errorMessage);
            break;
    }
    
    return newState;
};

export default reducer;