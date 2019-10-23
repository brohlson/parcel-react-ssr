/* eslint-disable quotes */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Blog from './views/Blog';
import User from './views/User';
import NotFound from './views/404';
import Global from './style/global';
import Reset from './style/reset';

import { blogData } from './util/consts';
import { colors } from './style/consts';
import endpoints from './util/endpoints';

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
    margin-right: 0.8rem;
    margin-bottom: 0.8rem;
    &:last-child {
      margin: 0;
    }
  }
`;

export default function App() {
  const [dynamicData, setDynamicData] = useState([]);

  useEffect(() => {
    fetchDynamicData();
  }, []);

  function getStaticPages() {
    return blogData.map((page, index) => {
      return (
        <Route key={index} path={`/blog/${page.slug}`}>
          <Blog {...page} />
        </Route>
      );
    });
  }

  function fetchDynamicData() {
    fetch(endpoints.users)
      .then(res => res.json())
      .then(data => setDynamicData(data));
  }

  function getDynamicPages() {
    if (!dynamicData) return;
    return dynamicData.map((r, i) => (
      <Route key={i} path={`/user/${r.id}`}>
        <User {...r} />
      </Route>
    ));
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
          {getStaticPages()}
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Wrapper>
  );
}
