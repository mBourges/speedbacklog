import Immutable from 'immutable';
import { getIssues } from './api';

export const FETCH_ISSUE_REQUEST = 'FETCH_ISSUE_REQUEST';
export const FETCH_ISSUE_SUCCESS = 'FETCH_ISSUE_SUCCESS';
export const FETCH_ISSUE_ERROR = 'FETCH_ISSUE_ERROR';

function fetchIssueRequest() {
    return {
        type: FETCH_ISSUE_REQUEST
    };
}

function fetchIssueSuccess(issues) {
    return {
        type: FETCH_ISSUE_SUCCESS,
        issues: Immutable.fromJS(issues)
    };
}

function fetchIssueError(errorMessage) {
    return {
        type: FETCH_ISSUE_ERROR,
        errorMessage
    };
}

export function fetchIssues() {
    return (dispatch) => {
        dispatch(fetchIssueRequest());
        
        getIssues().then((response) => {
            dispatch(fetchIssueSuccess(response.data));
        }).catch(response => {
            console.log('response', response)
            dispatch(fetchIssueError(response.data.error.message));
        });
    };
}