import axios from 'axios';
import { API_URL } from '../../app/constants';

export function getIssues() {
    return axios.get(API_URL + 'issue');
}