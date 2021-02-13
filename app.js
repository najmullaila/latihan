var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    var acces = url.parse(req.url);
    console.log(acces);
    return res.end();
}).listen(8080); 
console.log("berhasil");