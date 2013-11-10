var app = require('http').createServer(handler)
  , fs = require('fs')

app.listen(1339);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html', function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200, {'Content-Type' : 'text/html'});
  
    res.end(data);
  });
}