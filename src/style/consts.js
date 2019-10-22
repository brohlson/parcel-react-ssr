import { breakpoints as bp } from '../util/consts';

export const bz = `
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  `;

const mq = {
  mobile: `${bp.mobile}px`,
  tablet: `${bp.tablet}px`,
  tabletSmall: `${bp.tabletSmall}px`,
  desktop: `${bp.desktop}px`,
};

export const colors = {
  dark: '#000',
  light: '#fff',
  grey: '#DBDFE8',
  greyLight: '#A3A3A3',
  error: '#d42b23',
};

export const z = {
  page: 1000,
  modalInner: 11000,
  modalWrapper: 12000,
  shelf: 14000,
};

export const boxShadow = {
  default: '0px 4px 6px rgba(226, 226, 226, 0.25)',
};

export const font = {
  p: `
    font-size: 1.6rem;
    line-height: 150%;
    margin: 0;
    @media screen and (max-width: ${mq.tabletSmall}) {
        // Your mobile rules...
    }
    `,
};
