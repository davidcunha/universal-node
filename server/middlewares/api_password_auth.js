/* eslint-disable consistent-return */
const passport = require('passport');

/**
 * Local authentication with email and password
 */
module.exports = (req, res, next) => {
  passport.authenticate('withPassword', { session: false }, (authErr, user, info) => {
    if (authErr) {
      return next(authErr);
    }
    if (!user) {
      res.status(400).json(info);
    }
    req.user = user;
    next();
  })(req, res, next);
};
