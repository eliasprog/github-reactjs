import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Find from './pages/find';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            
            <Route path="/" exact component={Find} />
            <Route path="/repos/:user" exact component={Main} />
            
        </Switch>
    </BrowserRouter>
);

export default Routes;