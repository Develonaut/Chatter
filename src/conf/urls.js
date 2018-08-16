import { compile } from 'path-to-regexp';

export const Urls = {
  DASHBOARD: '/dashboard',
  SIGNIN: '/',
};

export function getUrl(url = '', pathArgs = {}) {
  // tell pathToRegExp the url we want to use, and
  // compile will return a function we can pass
  // args to, to make our url.
  return compile(url)(pathArgs);
}
