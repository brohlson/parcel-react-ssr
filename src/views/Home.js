/* eslint-disable quotes */
import React from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { useAsync } from 'react-async';
import { Link } from 'react-router-dom';

import Text from '../components/Text';
import endpoints from '../util/endpoints';
import { sleep, isBrowser } from '../util/helpers';

import SEO from '../components/SEO';

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
  padding: 2rem;
`;

async function callApi() {
  await sleep(1000);
  const res = await fetch(endpoints.hello);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export default function App() {
  const { data, error, isPending } = useAsync({ promiseFn: callApi });
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
      <Link to="/about">Read more</Link>
    </Wrapper>
  );
}
