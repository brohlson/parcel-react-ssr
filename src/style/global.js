import 'typeface-inter';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
html {
    font-family: 'Inter', sans-serif; 
    font-feature-settings: 'dlig', 'zero', 'ss01', 'cv05', 'cv10';
    font-size: 62.5% !important;
    font-family: "Inter", sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default Global;
