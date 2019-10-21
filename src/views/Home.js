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

import SEO from '../components/SEO';

const Wrapper = styled.div`
  width: 40rem;
  max-width: 100%;
  text-align: center;
`;

async function callApi() {
  await sleep(1000);
  const res = await fetch(endpoints.hello);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export default function App() {
  const { data, error, isPending } = useAsync({ promiseFn: callApi });

  function getBlogLinks() {
    return blogData.map((page, index) => (
      <Link key={index} to={`blog/${page.slug}`}>
        <button>{page.title}</button>
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
      <Link to="/about">
        <button>Read more</button>
      </Link>
      {getBlogLinks()}
    </Wrapper>
  );
}
