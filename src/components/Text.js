import React from 'react';
import styled from 'styled-components';

import { textType } from '../util/types';
import { font } from '../style/consts';

/**
 * Paragraph text
 */
const PWrapper = styled.p`
  ${font.p}
`;

function P({ text, testId }) {
  return <PWrapper data-testid={testId}>{text}</PWrapper>;
}
P.propTypes = textType.isRequired;

const Text = {
  P,
};

export default Text;
