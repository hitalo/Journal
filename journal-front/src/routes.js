import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoutes from './private-routes';

import { JournalContainer } from './components/container';
import Login from './components/login';
import Home from './components/home';
import Tests from './components/tests'

const Routes = () => (
    <React.Fragment>
        <JournalContainer>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoutes exact path="/u" component={Home} />
                    <PrivateRoutes exact path="/u/tests" component={Tests} />
                </Switch>
            </BrowserRouter>
        </JournalContainer>
    </React.Fragment>
)

export default Routes;