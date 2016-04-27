import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import CoreLayout from './coreLayout';
import NoRouteMatched from './noRouteMatched';
import IssueList from '../modules/issueList';
import Issue from '../modules/issue';
import Login from '../modules/login';


const Routes = (history, requireAuth) => {
    return (<Router history={ history }>
        <Route path="/login" component={ Login } />
        <Route path="/" component={ CoreLayout } onEnter={ requireAuth } >
            <IndexRoute component={ IssueList } />
            <Route name="IssueDetail" path="issue/:id" component={ Issue } />
            <Route path="*" component={ NoRouteMatched }/>
        </Route>
    </Router>);
};

export default Routes;
