import React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import { startSession } from '../../client/store/actions/index.js';
import Routes from '../../client/Routes.js';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import Loadable from 'react-loadable';
import { ChunkExtractor } from '@loadable/server';

export default (req, store) => {
  const statsFile = path.resolve('public', 'loadable-stats.json');
  const extractor = new ChunkExtractor({ statsFile });
  const scriptTags = extractor.getScriptTags();
  const linkTags = extractor.getLinkTags();
  const styleTags = extractor.getStyleTags();
  const css = new Set();
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));
  const html = renderToString(
    extractor.collectChunks(
      <StyleContext.Provider value={{ insertCss }}>
        <Provider store={store}>
          <StaticRouter location={req.path} context={{}}>
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
        </Provider>
      </StyleContext.Provider>
    ));

  const title = 'Whats the Move?';
  return `
<!DOCTYPE html>
  <html lang="en">
    <head>
     <title>${title}</title>
     <meta charset="UTF-8">
     </script>
     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
     <style>${[...css].join('')}
     </style>
    </head>
    <body>
    <div id="root">${html}</div>
    ${scriptTags}
    <script>window.INITIAL_STATE = ${serialize(store.getState())}
    </script>
    </body>
</html>
`;
};