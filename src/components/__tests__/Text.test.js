import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

import Text from '../Text';

describe('P Text', () => {
  test('It renders the correct text', async () => {
    const { getByTestId } = render(
      <Text.P testId="hello" text="Hello, world" />
    );

    const textNode = await waitForElement(() => getByTestId('hello'));

    expect(textNode).toHaveTextContent('Hello, world');
    expect(textNode).toHaveTextContent('Hello, world');
  });

  test('It renders the default style rules', async () => {
    const tree = renderer
      .create(<Text.P testId="hello" text="Hello, world" />)
      .toJSON();
    expect(tree).toHaveStyleRule('font-size', '1.6rem');
    expect(tree).toHaveStyleRule('margin', '0');
    expect(tree).toHaveStyleRule('line-height', '150%');
  });
});
