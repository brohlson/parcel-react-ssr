/* eslint-disable quotes */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Text from '../components/Text';
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

export default function About() {
  return (
    <Wrapper>
      <SEO
        title="About | Parcel-React Serverless Starter"
        meta="Read more about the project here."
      />
      <Text.P text={'About'} />
      <Link to="/">Back home</Link>
    </Wrapper>
  );
}
