import Immutable from 'immutable';
import { getIssue } from './api';

export const FETCH_DETAIL_REQUEST = 'FETCH_DETAIL_REQUEST';
export const FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCCESS';
export const FETCH_DETAIL_ERROR = 'FETCH_DETAIL_ERROR';

function fetchDetailRequest() {
    return {
        type: FETCH_DETAIL_REQUEST
    };
}

function fetchDetailSuccess(issue) {
    return {
        type: FETCH_DETAIL_SUCCESS,
        issues: Immutable.fromJS(issue)
    };
}

function fetchDetailError(errorMessage) {
    return {
        type: FETCH_DETAIL_ERROR,
        errorMessage
    };
}

export function fetchIssue(id) {
    return (dispatch) => {
        dispatch(fetchDetailRequest());
        
        getIssue(id).then((response) => {
            dispatch(fetchDetailSuccess(response.data));
        }).catch(response => {
            console.log('response', response)
            dispatch(fetchDetailError(response.data.error.message));
        });
    };
}