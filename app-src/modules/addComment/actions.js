import Immutable from 'immutable';
import { postComment } from './api';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR';

function addCommentRequest() {
    return {
        type: ADD_COMMENT_REQUEST
    };
}

function addCommentSuccess(comment) {
    return {
        type: ADD_COMMENT_SUCCESS,
        comment: Immutable.fromJS(comment)
    };
}

function addCommentError(errorMessage) {
    return {
        type: ADD_COMMENT_ERROR,
        errorMessage
    };
}

export function addComment(issueId, comment) {
    return (dispatch) => {
        dispatch(addCommentRequest());
        
        postComment(issueId, comment).then((response) => {
            dispatch(addCommentSuccess(response.data));
        }).catch(response => {
            dispatch(addCommentError(response.data.error.message));
        });
    };
}