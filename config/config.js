/* eslint-disable array-callback-return */
const assert = require('assert');
require('dotenv').config();

const validEnvironments = ['development', 'test', 'staging', 'production'];
const env = process.env.NODE_ENV || 'development';

assert(
  validEnvironments.includes(process.env.NODE_ENV),
  `Expecting NODE_ENV to be one of: ${validEnvironments.join(', ')}`,
);
[
  'SITE_URL',
  'HOST',
  'PORT',
  'DB_USER',
  'DB_PASSWORD',
  'DB_HOST',
  'REACT_APP_API_URL',
].map((config) => {
  assert(
    process.env[config] != null,
    `Expecting ${config} environment variable to be defined`,
  );
});

const defaultConfig = {
  app: {
    site_url: process.env.SITE_URL,
    api_url: process.env.REACT_APP_API_URL,
    csp: {
      directives: {
        'connect-src': [
          "'self'",
          'https://graph.facebook.com/v3.1/me',
          'https://sentry.io/api/',
          'https://www.google-analytics.com/',
        ],
        'default-src': ["'none'"],
        'child-src': ["'self'"],
        'manifest-src': ["'self'"],
        'frame-src': [
          'staticxx.facebook.com',
          'www.facebook.com',
          'https://js.stripe.com/',
        ],
        'script-src': [
          "'self'",
          "'unsafe-inline'",
          'https://connect.facebook.net/en_US/sdk.js',
          'https://www.google-analytics.com/analytics.js',
          'https://storage.googleapis.com/workbox-cdn/',
          'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js',
          'https://js.stripe.com/v3/',
          'http://www.googletagmanager.com/',
        ],
        'worker-src': ["'self'", 'blob:'],
        'style-src': [
          "'self'",
          "'unsafe-inline'",
          'www.facebook.com',
          'https://www.google-analytics.com',
          'https://fonts.googleapis.com',
        ],
        'img-src': ["'self'", 'https:', 'data:;'],
        'font-src': [
          "'self'",
          'fonts.gstatic.com',
          'https://fonts.googleapis.com',
        ],
        'object-src': ["'self'"],
        'block-all-mixed-content': true,
        'frame-ancestors': ["'none'"],
      },
    },
  },
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  define: {
    underscored: true,
  },
};

// HMR requires unsafe-eval in development mode
if (process.env.NODE_ENV !== 'production') {
  defaultConfig.app.csp.directives['script-src'].push("'unsafe-eval'");
}

const config = {
  development: {
    ...defaultConfig,
    database: 'project_name_development',
  },
  test: {
    ...defaultConfig,
    database: 'project_name_test',
  },
  staging: {
    ...defaultConfig,
    database: 'project_name_staging',
  },
  production: {
    ...defaultConfig,
    database: 'project_name_production',
  },
};

module.exports = config[env];
