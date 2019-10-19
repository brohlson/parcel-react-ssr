import React from 'react';
import styled from 'styled-components';

import { textTypes } from '../util/types';
import { font } from '../style/consts';

/**
 * Paragraph text
 */
const PWrapper = styled.p`
  ${font.p}
`;

function P({ text, testId }) {
  return <PWrapper data-testid={testId || null}>{text}</PWrapper>;
}

P.propTypes = textTypes;

const Text = {
  P,
};

export default Text;
