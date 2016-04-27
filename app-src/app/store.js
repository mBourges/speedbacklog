import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { HASH_HISTORY } from './constants';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';

const reduxRouterMiddleware = routerMiddleware(HASH_HISTORY);

const finalCreateStore = compose(
    applyMiddleware(thunk, reduxRouterMiddleware)
)(createStore);

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState);
}