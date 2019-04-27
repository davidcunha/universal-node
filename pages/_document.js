import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MainDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            key="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <meta key="HandheldFriendly" name="HandheldFriendly" content="True" />
          <meta key="MobileOptimized" name="MobileOptimized" content="320" />
          <meta
            key="apple-mobile-web-app-title"
            name="apple-mobile-web-app-title"
            content="project-name"
          />
          <meta
            key="apple-mobile-web-app-capable"
            name="apple-mobile-web-app-capable"
            content="yes"
          />
          <meta
            key="apple-touch-fullscreen"
            name="apple-touch-fullscreen"
            content="yes"
          />
          <meta
            key="apple-mobile-web-app-status-bar-style"
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta key="theme-color" name="theme-color" content="#ffffff" />
          <meta
            key="msapplication-navbutton-color"
            name="msapplication-navbutton-color"
            content="#ffffff"
          />
          <meta
            key="msapplication-starturl"
            name="msapplication-starturl"
            content="/"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta
            key="application-name"
            name="application-name"
            content="project-name"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js" />
          <NextScript />
          {process.env.REACT_APP_GA && process.env.NODE_ENV === 'production' ? (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${
                  process.env.REACT_APP_GA
                }`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `  window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.REACT_APP_GA}');`,
                }}
              />
            </>
          ) : null}
        </body>
      </html>
    );
  }
}

export default MainDocument;
