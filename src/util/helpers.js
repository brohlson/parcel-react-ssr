// eslint-disable-next-line no-undef
export const sleep = m => new Promise(r => setTimeout(r, m));

export const isBrowser = () => typeof window !== 'undefined';
