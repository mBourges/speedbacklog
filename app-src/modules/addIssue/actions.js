import Immutable from 'immutable';
import { postIssueWithInitalComment } from './api';

export const OPEN_ADD_MODAL = 'OPEN_ADD_MODAL';
export const CLOSE_ADD_MODAL = 'CLOSE_ADD_MODAL';

export const ADD_ISSUE_REQUEST = 'ADD_ISSUE_REQUEST';
export const ADD_ISSUE_SUCCESS = 'ADD_ISSUE_SUCCESS';
export const ADD_ISSUE_ERROR = 'ADD_ISSUE_ERROR';

export function openAddModal() {
    return {
        type: OPEN_ADD_MODAL
    };
}

export function closeAddModal() {
    return {
        type: CLOSE_ADD_MODAL
    };
}

function addIssueRequest() {
    return {
        type: ADD_ISSUE_REQUEST
    };
}

function addIssueSuccess() {
    return {
        type: ADD_ISSUE_SUCCESS
    };
}

function addIssueError(errorMessage) {
    return {
        type: ADD_ISSUE_ERROR,
        errorMessage
    };
}

export function addIssues(issue, comment) {
    return (dispatch) => {
        dispatch(addIssueRequest());
        
        postIssueWithInitalComment(issue, comment).then((response) => {
            dispatch(addIssueSuccess());
        }).catch(response => {
            dispatch(addIssueError(response.data.error.message));
        });
    };
}