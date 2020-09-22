import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../client/components/app/App.jsx';
import Routes from '../../client/Routes.jsx';

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>)

  const title = 'Whats the Move?';

  return `
<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
    </head>
    <body>
    <div id="root">${content}</div>
    <script type="text/javascript" src="client.bundle.js"></script>
    </body>
  </html>
`;
};