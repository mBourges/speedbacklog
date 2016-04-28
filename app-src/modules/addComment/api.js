import axios from 'axios';
import { API_URL } from '../../app/constants';

export function postComment(id, comment) {
    return axios.post(API_URL + 'issue/' + id +'/comment', comment);
}