module.exports = (title, content, scripts) =>`
<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
    </head>
    <body>
    <div id="root">
    ${content}
    </div>
    ${scripts}
    </body>
  </html>
`
;