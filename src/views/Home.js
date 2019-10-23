/* eslint-disable quotes */
import React from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { useAsync } from 'react-async';
import { Link } from 'react-router-dom';

import Text from '../components/Text';
import endpoints from '../util/endpoints';
import { sleep, isBrowser } from '../util/helpers';
import { blogData } from '../util/consts';
import { homeTypes } from '../util/types';

import SEO from '../components/SEO';

const Wrapper = styled.div`
  width: 42rem;
  max-width: 100%;
  text-align: center;
  div {
    margin-bottom: 0.8rem;
  }
`;

async function callApi() {
  await sleep(1000);
  const res = await fetch(endpoints.hello);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export default function Home() {
  const { data, error, isPending } = useAsync({ promiseFn: callApi });

  function getBlogLinks() {
    return blogData.map((page, index) => (
      <Link key={index} to={`blog/${page.slug}`}>
        <button>{page.title}</button>
      </Link>
    ));
  }
  function getUserLinks() {
    return [1, 2, 3].map((user, index) => (
      <Link key={index} to={`/user/${user}`}>
        <button>User {user}</button>
      </Link>
    ));
  }
  return (
    <Wrapper>
      <SEO
        title="Home | Parcel-React Serverless Starter"
        meta="An opinionated, parcel-bundled serverless React starter for Netlify"
      />
      <Text.P text={'Hello, world'} />
      <Text.P text={`I'm a parcel-bundled React starter`} />

      {data && <Text.P text={data.msg} />}
      {isPending && <Text.P text={'Loading...'} />}
      {error &&
        isBrowser(
          <strong>
            <Text.P text={error.message} />
          </strong>
        )}

      <div>{getUserLinks()}</div>
      <div>{getBlogLinks()}</div>
      <div>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </Wrapper>
  );
}

Home.propTypes = homeTypes;
