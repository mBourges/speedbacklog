import Immutable from 'immutable';
import { OPEN_ADD_MODAL, CLOSE_ADD_MODAL, ADD_ISSUE_REQUEST, ADD_ISSUE_SUCCESS, ADD_ISSUE_ERROR } from './actions';

const initialState = Immutable.Map({
    isSaving: false,
    show: false,
    errorMessage: null
});

const reducer = (state = initialState, action) => {
    let newState = state;
    
    switch (action.type) {
        case OPEN_ADD_MODAL:
            newState = newState.set('show', true);
            break;
        case CLOSE_ADD_MODAL:
            newState = newState.set('show', false);
            break;
        case ADD_ISSUE_REQUEST:
            newState = newState.set('isSaving', true);
            newState = newState.set('errorMessage', null);
            break;
        case ADD_ISSUE_SUCCESS:
            newState = newState.set('isSaving', false);
            newState = newState.set('show', false);
            break;
         case ADD_ISSUE_ERROR:
            newState = newState.set('isSaving', false);
            newState = newState.set('errorMessage', action.errorMessage);
            break;
    }
    
    return newState;
};

export default reducer;

