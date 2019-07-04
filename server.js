const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    res.writeHead(200, {
      "Content-Type": 'text/html;charset=utf-8'
    })
    res.write('hello server,hello ecs')
    res.end()
  }
})

server.listen(3000)