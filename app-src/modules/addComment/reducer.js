import Immutable from 'immutable';
import { ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR } from './actions';

const initialState = Immutable.Map({
    isSaving: false,
    errorMessage: null
});

const reducer = (state = initialState, action) => {
    let newState = state;
    
    switch (action.type) {
        case ADD_COMMENT_REQUEST:
            newState = newState.set('isSaving', true);
            newState = newState.set('errorMessage', null);
            break;
        case ADD_COMMENT_SUCCESS:
            newState = newState.set('isSaving', false);
            newState = newState.set('show', false);
            break;
         case ADD_COMMENT_ERROR:
            newState = newState.set('isSaving', false);
            newState = newState.set('errorMessage', action.errorMessage);
            break;
    }
    
    return newState;
};

export default reducer;

