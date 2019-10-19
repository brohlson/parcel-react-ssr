/* eslint-disable quotes */
import React from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { useAsync } from 'react-async';

import Global from './style/global';
import Reset from './style/reset';
import Text from './components/Text';
import endpoints from './util/endpoints';
import { sleep } from './util/helpers';

const AppWrapper = styled.div`
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
    <AppWrapper>
      <Global />
      <Reset />
      <Text.P text={'Hello, world'} />
      <Text.P text={`I'm a parcel-bundled React starter`} />
      {data && <Text.P text={data.msg} />}
      {isPending && <Text.P text={'Loading...'} />}
      {error && (
        <strong>
          <Text.P text={error.message} />
        </strong>
      )}
    </AppWrapper>
  );
}
