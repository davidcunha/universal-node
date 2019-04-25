import cookie from 'js-cookie';
import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import get from 'lodash/get';

/**
 /* Session with cookies for client and server-side
*/

const setCookieOnBrowser = (key, value, expires) => {
  cookie.set(key, value, {
    ...(expires && { expires }),
    path: '/',
  });
};

const setCookieOnServer = (key, value, expires, ctx) => {
  if (isUndefined(get(ctx, 'res.cookie'))) {
    return;
  }

  const expiresDate = new Date();
  expiresDate.setDate(expiresDate.getDate() + expires);

  ctx.res.cookie(key, value, {
    ...(expires && {
      expires: expiresDate,
    }),
    path: '/',
  });
};

export const setCookie = (key, value, expires = 1, ctx = {}) => {
  if (process.browser) {
    setCookieOnBrowser(key, value, expires);
  } else {
    setCookieOnServer(key, value, expires, ctx);
  }
};

const getCookieFromBrowser = key => cookie.get(key);

const getCookieFromServer = (key, req) => {
  if (isUndefined(get(req, 'headers.cookie'))) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};

const removeCookiesFromBrowser = (keys) => {
  keys.forEach((key) => {
    cookie.remove(key);
  });
};

const removeCookiesFromServer = (keys, res = {}) => {
  if (!isEmpty(res)) {
    keys.forEach(key => res.clearCookie(key));
  }
};

export const getCookie = (key, req = {}) => {
  if (isNull(req) || isUndefined(req)) {
    return process.browser && getCookieFromBrowser(key);
  }
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

export const removeCookies = (keys, res = {}) => {
  if (isNull(res) || isUndefined(res)) {
    return process.browser && removeCookiesFromBrowser();
  }
  return process.browser
    ? removeCookiesFromBrowser(keys)
    : removeCookiesFromServer(keys, res);
};
