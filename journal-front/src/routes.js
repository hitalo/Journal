import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoutes from './private-routes';

import { JournalContainer } from './components/container';
import Login from './components/login';

const Routes = () => (
    <React.Fragment>
        <JournalContainer>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoutes path="/u" component={() => <h1>I AM IN BABE</h1>} />
                </Switch>
            </BrowserRouter>
        </JournalContainer>
    </React.Fragment>
)

export default Routes;