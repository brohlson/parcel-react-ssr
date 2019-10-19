/* eslint-disable quotes */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';

import Global from './style/global';
import Reset from './style/reset';
import Text from './components/Text';
import endpoints from './util/endpoints';

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

export default function App() {
  /**
   * Some local state to hold our API response.
   */
  const [response, setResponse] = useState('');

  /**
   * A useEffect hook to call our serverless api,
   * which will run once on mount.
   */
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(endpoints.hello);
      const data = await res.json();
      setResponse(data.msg);
    }, 1500);
  }, []);

  return (
    <AppWrapper>
      <Global />
      <Reset />
      <Text.P text={'Hello, world'} />
      <Text.P text={`I'm a parcel-bundled React starter`} />
      <Text.P text={response ? response : 'Loading...'} />
    </AppWrapper>
  );
}
