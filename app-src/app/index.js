import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import createStore from './store';
import createRoutes from './routes';
// import interceptors from './interceptors';
// import LocalStorage from 'local-storage';
import { HASH_HISTORY } from './constants';
import { syncHistoryWithStore } from 'react-router-redux';

import './style.css';

// interceptors.add();

function app(appElement) {
    // const AppStore = createStore(createStoreInitialState());
    const AppStore = createStore();
    const history = syncHistoryWithStore(HASH_HISTORY, AppStore);
    const requireAuth = (nextState, replace) => {
        /*if (!AppStore.getState().login.get('isAuth')) {
            replace({
                pathname: '/login',
                state: {
                    nextPathname: nextState.location.pathname,
                    nextSearch: nextState.location.search
                }
            });
        }*/
    };

    return ReactDOM.render(
        <Provider store={ AppStore }>
            { createRoutes(history, requireAuth) }
        </Provider>,
        appElement
    );
}

// function createStoreInitialState() {
//     return {
//         login: Immutable.Map({
//             token: LocalStorage.get('id_token'),
//             profile: LocalStorage.get('profile'),
//             isAuth: LocalStorage.get('id_token') ? true : false,
//             errorMessage: null
//         })
//     };
// }

export default app;