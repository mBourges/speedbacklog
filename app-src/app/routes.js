import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import CoreLayout from './coreLayout';
import NoRouteMatched from './noRouteMatched';
import IssueList from '../modules/issueList';
import Login from '../modules/login';
import IssueDetail from './issueDetailLayout';


const Routes = (history, requireAuth) => {
    return (<Router history={ history }>
        <Route path="/login" component={ Login } />
        <Route path="/" component={ CoreLayout } onEnter={ requireAuth } >
            <IndexRoute component={ IssueList } />
            <Route name="IssueDetail" path="issue/:id" component={ IssueDetail } />
            <Route path="*" component={ NoRouteMatched }/>
        </Route>
    </Router>);
};

export default Routes;
