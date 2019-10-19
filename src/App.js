/* eslint-disable quotes */
import React, { Component } from 'react';
import styled from 'styled-components';

import Global from './style/global';
import Reset from './style/reset';

import Text from './components/Text';

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
`;

export default class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Global />
        <Reset />
        <Text.P text={'Hello, world'} />
        <Text.P text={`I'm a parcel-bundled React starter`} />
      </AppWrapper>
    );
  }
}
