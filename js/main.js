var http = require('http');
var date =require('./main2')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Date is "+date.myDateTime());
    res.end();
}).listen(8080); 