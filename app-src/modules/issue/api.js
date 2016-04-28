import axios from 'axios';
import { API_URL } from '../../app/constants';

export function getIssue(id) {
    return axios.get(API_URL + 'issue/' + id);
}