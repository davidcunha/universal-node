import redirect from '~/utils/redirect';
import { setCookie, getCookie, removeCookies } from '~/utils/cookies';
import { pageRoutes } from '~/config/routes';

/**
 /* Authorization utilities and redirects
*/
export default class Auth {
  static login = ({ id, token }) => {
    setCookie('user_id', id);
    setCookie('jwt', token);
    return null;
  };

  static logout = (path = pageRoutes.HOME_PATH, ctx = {}) => {
    Auth.clearCustomerState();
    redirect(path, ctx);
  };

  static clearCustomerState = (ctx = {}) => {
    removeCookies(['user_id', 'jwt'], ctx.res);
  };

  static getUser = (ctx = {}) => ({
    user_id: getCookie('user_id', ctx.req),
    jwt: getCookie('jwt', ctx.req),
  });

  static getJwt = (ctx = {}) => getCookie('jwt', ctx.req);

  static getUserId = (ctx = {}) => getCookie('user_id', ctx.req);

  static isAuthenticated = ctx => !!Auth.getJwt(ctx);

  static redirectIfAuthenticated = (ctx, path = pageRoutes.HOME_PATH) => {
    if (Auth.isAuthenticated(ctx)) {
      redirect(path, ctx);
      return true;
    }
    return false;
  };

  static redirectIfNotAuthenticated = (ctx, path = pageRoutes.HOME_PATH) => {
    if (!Auth.isAuthenticated(ctx)) {
      Auth.clearCustomerState(ctx);
      redirect(path, ctx);
      return true;
    }
    return false;
  };
}
