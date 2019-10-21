/* eslint-disable quotes */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Global from './style/global';
import Reset from './style/reset';

export default function App() {
  return (
    <Fragment>
      <Global />
      <Reset />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Router>
    </Fragment>
  );
}
