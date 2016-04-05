import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Insert all components/containers here
import Home from '../components/Home'
import MainContainer from '../containers/MainContainer'
import ForecastContainer from '../containers/ForecastContainer'
import DayForecastDetails from '../components/DayForecastDetails'

const Routes = (
    <Router history={hashHistory}>
      <Route path="/" component={MainContainer}>
        <IndexRoute component={Home} />
        <Route path="forecast/:city" component={ForecastContainer} />
        <Route path="details" component={DayForecastDetails} />
      </Route>
    </Router>
  );

module.exports = Routes;
