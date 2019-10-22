/* eslint-disable quotes */
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Blog from './views/Blog';
import NotFound from './views/404';
import Global from './style/global';
import Reset from './style/reset';

import { blogData } from './util/consts';
import { colors } from './style/consts';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;

  p {
    margin-bottom: 1.2rem;
  }
  a button {
    background: ${colors.grey};
    line-height: 200%;
    border: none;
    border-radius: 0.4rem;
    padding: 0.4rem 1.2rem;
  }
  a {
    padding-top: 2rem;
    margin-right: 0.8rem;
    &:last-child {
      margin: 0;
    }
  }
`;

export default function App() {
  function getDynamicPages() {
    return blogData.map((page, index) => {
      return (
        <Route key={index} path={`/blog/${page.slug}`}>
          <Blog {...page} />
        </Route>
      );
    });
  }

  return (
    <Wrapper>
      <Global />
      <Reset />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {getDynamicPages()}
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Wrapper>
  );
}
