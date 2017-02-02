import React from 'react';

const renderCSSAssets = (assets = []) => assets.map(
  asset => <link key={ asset } rel="stylesheet" href={ asset } />
);

const renderJSAssets = (assets = []) => assets.map(
  asset => <script key={ asset } src={ asset } />
);

const Layout = ({ title, cssAssets, jsAssets, children }) =>
  <html lang="en">
    <head>
    <meta charSet="utf-8" />
    <title>{ title }</title>

    <meta name="HandheldFriendly" content="True" />
    <meta name="MobileOptimized" content="320" />

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
    <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)" />

    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <link rel="shortcut icon" href="/appicon.ico" />
    { renderCSSAssets(cssAssets) }
  </head>
  <body>
    { children }
    { renderJSAssets(jsAssets) }
  </body>
  </html>;

export default Layout;
