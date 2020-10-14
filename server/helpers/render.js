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
  const css = new Set()
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
  const content = renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    </StyleContext.Provider>
  );
  const title = 'Whats the Move?';
  return `
<!DOCTYPE html>
  <html lang="en">
    <head>
     <title>${title}</title>
     <meta charset="UTF-8">
     <script src="client.bundle.js" defer>
     </script>
     <style>${[...css].join('')}
     </style>
    </head>
    <body>
    <div id="root">${content}</div>
    <script>window.INITIAL_STATE = ${serialize(store.getState())}
    </script>
    </body>
  </html>
`;
};