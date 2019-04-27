# universal-node

## What’s Included?

- 👀 `react` as the view.
- 🎛 Preconfigured with `redux`.
- 🚄 `express` server.
- 🛢️ `sequelize` ORM for data persistence.
- 📦 `pm2` for process management.
- 👌 Airbnb's ESlint configuration and Standard Stylelint - performing code formatting on commit. Stop worrying about code style consistency.
- 📝 `browserslist` to share target browsers between different front-end tools.
- 🌍 Server Side Rendering with `next.js`.
- 🔧 Centralised application configuration with helpers to avoid boilerplate in your code. Also has support for environment variables.
- 💅 `styled-components` to style your apps without stress.
- ⛑ SEO friendly - provides control of title/meta from within your pages.
- 📊 Google Analytics support.
- 🐞 Error tracking with Sentry.
- ⚙️ PWA support with `workbox`.
- 👮 Security on the `express` server using `helmet` and `hpp`.

## Table of Contents

- [universal-node](#universal-node)
  - [What’s Included?](#whats-included)
  - [Table of Contents](#table-of-contents)
  - [Installation and setup](#installation-and-setup)
    - [1. Install packages](#1-install-packages)
    - [2. Configure Environment variables](#2-configure-environment-variables)
    - [3. Run database migrations and seeds (for testing purpose)](#3-run-database-migrations-and-seeds-for-testing-purpose)
  - [Commands](#commands)
    - [dev](#dev)
    - [build](#build)
    - [start](#start)
    - [lint](#lint)
  - [Environment variables](#environment-variables)
    - [Server bundle](#server-bundle)
    - [Client bundle](#client-bundle)
    - [.env file](#env-file)
  - [PWA Support](#pwa-support)
  - [Browserslist](#browserslist)

## Installation and setup

### 1. Install packages

```sh
$ npm install
```

### 2. Configure [Environment variables](#environment-variables)

### 3. Run database migrations and seeds (for testing purpose)

```sh
$ npm run db:migrate:seeds
```

## Commands

### dev

```sh
$ npm run dev
```

Starts a development server.

### build

```sh
$ npm run build
```

Builds the project for production, producing the bundled assets.

### start

```sh
$ npm start
```

Starts a production server. You must run `npm run build` before running this command.

### lint

```sh
$ npm run lint
```

Runs [ESlint](https://eslint.org/) and [Stylelint](https://stylelint.io/) on the project.

We use conventional commit messages: [commitlint/config-conventional](https://github.com/marionebl/commitlint/tree/master/%40commitlint/config-conventional).

## Environment variables

Your project can consume variables declared in your environment by accessing them via `process.env`.

The following variables will be made available:

- `SITE_URL`: The URL where the site will be running, e.g., `http://project-name.com`
- `HOST`: The host where the site will be running, e.g., `localhost`
- `PORT`: The port where the site will be running, e.g., `3000`
- `DB_USER`: The user name used for database connection.
- `DB_PASSWORD`: The user's password used for database connection.
- `DB_HOST`: The database connection, the value can be a IP address or a domain.
- `REACT_APP_*`: Custom variables that may be accessible in both the client and server bundles.
- `NODE_ENV`: One of `development`, `test`, `staging` or `production`.

These will be embedded at **build time**, thus are **read-only**. This means you must rebuild your application every time you change them.

### Server bundle

Besides the variables listed above, your server bundle will have access to the whole `process.env` just like a regular Node.js application.

### Client bundle

Only the variables listed above will be available.
If you need custom environment variables, you must prefix them with `REACT_APP_`. This avoids accidentally exposing sensitive environment variables, such as a private key or a database credential.

### .env file

Environment variables defined on `.env` file will be loaded into `process.env`.
Please read [dotenv](https://github.com/motdotla/dotenv) documentation for more information.

```
REACT_APP_FOO=bar
```

This file is ignored in source control and it is intended to be created from `.env.sample`, which is committed and anyone who clones the project can easily use it as a starting point.

## PWA Support

By default, in production mode, the application is a [PWA](https://developers.google.com/web/progressive-web-apps/) with [Workbox](https://developers.google.com/web/tools/workbox/). Please change `static/manifest.json` with the respective application data. Workbox configuration can be found in `next.config.js`. The service worker is instantiated inside the `PWASupport` component.

## Browserslist

By default, configurations for ESlint, Stylelint are "ChromeAndroid >=70, Chrome >= 70, Firefox >= 63, Edge >= 16, Safari >= 11, iOS >= 11.2" based on [browserl.ist](https://browserl.ist/?q=%3E3%25%2C+ChromeAndroid+%3E%3D70%2C+Chrome+%3E%3D+70%2C+Firefox+%3E%3D+63%2C+Edge+%3E%3D+16%2C+Safari+%3E%3D+11%2C+iOS+%3E%3D+11.2).
