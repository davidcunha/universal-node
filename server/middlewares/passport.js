/* eslint-disable consistent-return */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const bcrypt = require('bcrypt');
const { User } = require('../models');
require('dotenv').config();

passport.use(
  'withPassword',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (user === null) {
          return done(null, false, { message: 'E-mail and/or password incorrect' });
        }
        const comparison = await bcrypt.compare(password, user.password);
        if (comparison !== true) {
          return done(null, false, { message: 'E-mail and/or password incorrect' });
        }
        return done(null, user);
      } catch (err) {
        done(err);
      }
    },
  ),
);

// JSON web tokens RFC 7519 https://jwt.io/
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
passport.use(
  new JwtStrategy(opts, (payload, done) => {
    User.findOne({
      where: {
        id: payload.id,
      },
    }).then((user) => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }),
);
