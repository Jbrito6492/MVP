module.exports = (title, content) =>`
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
`
;