import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoutes from './private-routes';

import { JournalContainer } from './components/container';
import Login from './components/login';
import Home from './components/home';

const Routes = () => (
    <React.Fragment>
        <JournalContainer>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoutes path="/u" component={Home} />
                </Switch>
            </BrowserRouter>
        </JournalContainer>
    </React.Fragment>
)

export default Routes;