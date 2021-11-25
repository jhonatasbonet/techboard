import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage/index';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Redirect to="/404"/>
        </Switch>
    );
};

export default Routes;