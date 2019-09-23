import React, { Component } from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class App extends Component {
  render() {
    return <AppWrapper>Parcel React</AppWrapper>;
  }
}
