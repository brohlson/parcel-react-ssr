/* eslint-disable quotes */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Text from '../components/Text';
import SEO from '../components/SEO';

const Wrapper = styled.div`
  width: 42rem;
  max-width: 100%;
  text-align: center;
`;

export default function About() {
  return (
    <Wrapper>
      <SEO
        title="404 | Not Found | Parcel-React Serverless Starter"
        meta="Page not found."
      />
      <Text.P text={'404'} />
      <Link to="/">
        <button>Back home</button>
      </Link>
    </Wrapper>
  );
}
