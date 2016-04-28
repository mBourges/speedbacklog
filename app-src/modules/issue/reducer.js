import Immutable from 'immutable';
import { FETCH_DETAIL_REQUEST, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_ERROR, CLEAR_DETAIL } from './actions';

const initialState = Immutable.Map({
    isFetching: false,
    issue: Immutable.Map({}),
    errorMessage: null
});

const reducer = (state = initialState, action) => {
    let newState = state;
    
    switch (action.type) {
        case FETCH_DETAIL_REQUEST:
            newState = newState.set('isFetching', true);
            newState = newState.set('errorMessage', null);
            break;
        case FETCH_DETAIL_SUCCESS:
            newState = newState.set('isFetching', false);
            newState = newState.set('issue', action.issue);
            break;
         case FETCH_DETAIL_ERROR:
            newState = newState.set('isFetching', false);
            newState = newState.set('errorMessage', action.errorMessage);
            break;
        case CLEAR_DETAIL:
            newState = initialState;
    }
    
    return newState;
};

export default reducer;