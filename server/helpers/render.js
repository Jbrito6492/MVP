import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { startSession } from '../../client/store/actions/index.js';
import Routes from '../../client/Routes.js';
import StyleContext from 'isomorphic-style-loader/StyleContext';

export default (req, store) => {
  const css = new Set();
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <StyleContext.Provider value={{ insertCss }}>
          <div>{renderRoutes(Routes)}</div>
        </StyleContext.Provider>
      </StaticRouter>
    </Provider>
  );
  const title = 'Whats the Move?';
  return `
<!DOCTYPE html>
  <html lang="en">
    <head>
      <style>${[...css].join('')}</style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <meta charset="UTF-8">
      <title>${title}</title>
    </head>
    <body>
    <div id="root">${content}</div>
    <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
    <script type="text/javascript" src="client.bundle.js"></script>
    </body>
  </html>
`;
};