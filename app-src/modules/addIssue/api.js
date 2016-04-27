import axios from 'axios';
import { API_URL } from '../../app/constants';

export function postIssueWithInitalComment(issue, comment) {
    return axios.post(API_URL + 'issue', {
        issue,
        comment
    });
}