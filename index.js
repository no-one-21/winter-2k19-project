var http = require('http');
var fs =require('fs');

var server = http.createServer(function(req,res){
    console.log('reuest was made: '* req.url);
    res.writeHead(200,{'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/HTML/index.html','utf8');
    myReadStream.pipe(res);
});
server.listen(8080,'127.0.0.1');