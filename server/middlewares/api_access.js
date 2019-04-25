/* eslint-disable consistent-return */
const passport = require('passport');

/**
 * JWT Authentication and Authorization middleware for Role-based auth
 */
module.exports = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (authErr, user) => {
    if (authErr) {
      return next(authErr);
    }
    if (!user) {
      return res.sendStatus(401);
    }
    req.user = user;
    next();
  })(req, res, next);
};
