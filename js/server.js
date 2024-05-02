var http = require('http');

function startServer() {
    var server = http.createServer(function (req, res) {

    });

    server.listen(3000,'127.0.0.1', function () {
        console.log('Server is running on port 3000');
    });
}

module.exports = {
    startServer
}