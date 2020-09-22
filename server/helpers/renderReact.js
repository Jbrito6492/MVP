import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../../client/components/app/App.jsx';

export default () => {
  const content = renderToString(<App />)
  const title = 'Whats the Move?'
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