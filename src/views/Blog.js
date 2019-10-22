/* eslint-disable quotes */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Text from '../components/Text';
import SEO from '../components/SEO';
import { blogTypes } from '../util/types';

const Wrapper = styled.div`
  width: 42rem;
  max-width: 100%;
  text-align: center;
`;

export default function Blog({ title, slug, description, body }) {
  return (
    <Wrapper>
      <SEO
        title={`${title} | Parcel-React Serverless Starter`}
        meta={description}
        slug={slug}
      />
      <strong>
        <Text.P text={title} />
      </strong>
      <Text.P text={body} />
      <Link to="/">
        <button>Back home</button>
      </Link>
    </Wrapper>
  );
}

Blog.propTypes = blogTypes;
