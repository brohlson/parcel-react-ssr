/* eslint-disable quotes */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Text from '../components/Text';
import SEO from '../components/SEO';
import { userTypes } from '../util/types';

const Wrapper = styled.div`
  width: 42rem;
  max-width: 100%;
  text-align: center;
`;

export default function User({ name, id }) {
  return (
    <Wrapper>
      <SEO title={`${name} | Parcel-React Serverless Starter`} />
      <strong>
        <Text.P text={name} />
      </strong>
      <Text.P text={`User #${id} loaded with dynamic API data.`} />
      <Link to="/">
        <button>Back home</button>
      </Link>
    </Wrapper>
  );
}

User.propTypes = userTypes;
