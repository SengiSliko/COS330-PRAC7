var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    if (req.method == "POST") {
        req.on('data', function(data) {
            console.log(data);
        });
    }
}).listen(9000); //the server object listens on port 8080